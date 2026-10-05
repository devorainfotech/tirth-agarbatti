"""Build a looping hero GIF: the incense smoke sways and the tips flicker."""

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "hero-tirth.jpg"
OUT = ROOT / "public" / "images" / "hero-burn.gif"

base_img = Image.open(SRC).convert("RGB")
w, h = base_img.size
base = np.asarray(base_img).astype(np.float32)

lum = base.mean(axis=2)
peak = base.max(axis=2)
low = base.min(axis=2)
sat = peak - low
ys = np.arange(h)[:, None]
xs = np.arange(w)[None, :]
# The photo has a single plume. Cover it with the curtain colour so each stick can smoke on its own.
smoke = (lum > 55) & (sat < 80) & (ys < 246) & (xs > 750) & (xs < 1020)
smoke_img = Image.fromarray((smoke.astype(np.uint8) * 255)).filter(ImageFilter.MaxFilter(7))
smoke_img = smoke_img.filter(ImageFilter.GaussianBlur(radius=3.5))
cover = np.asarray(smoke_img).astype(np.float32) / 255.0

left = base[:, 660:690].mean(axis=1)
right = base[:, 1080:1110].mean(axis=1)
xspan = np.linspace(0.0, 1.0, w, dtype=np.float32)
curtain = left[:, None, :] * (1.0 - xspan)[None, :, None] + right[:, None, :] * xspan[None, :, None]
cleaned = base * (1.0 - cover[..., None]) + curtain * cover[..., None]

# Top of each ash cap, left to right
tips = [(805.0, 252.0), (841.0, 251.0), (882.0, 256.0)]
smoke_color = np.array([214.0, 210.0, 206.0], dtype=np.float32)
ember_color = np.array([255.0, 126.0, 58.0], dtype=np.float32)
core_color = np.array([255.0, 214.0, 160.0], dtype=np.float32)

FRAMES = 16


def add_density(layer, cx, cy, radius, amount):
    if amount <= 0.01 or radius < 1:
        return
    x0 = max(0, int(cx - radius))
    x1 = min(w, int(cx + radius) + 1)
    y0 = max(0, int(cy - radius))
    y1 = min(h, int(cy + radius) + 1)
    if x0 >= x1 or y0 >= y1:
        return
    yy, xx = np.ogrid[y0:y1, x0:x1]
    dist = ((yy - cy) ** 2 + (xx - cx) ** 2) / (radius * radius)
    fall = np.clip(1.0 - dist, 0.0, 1.0) ** 2
    layer[y0:y1, x0:x1] += fall * amount


def paint_glow(rgba, cx, cy, radius, color, strength):
    if strength <= 0.01 or radius < 1:
        return
    x0 = max(0, int(cx - radius * 2))
    x1 = min(w, int(cx + radius * 2) + 1)
    y0 = max(0, int(cy - radius * 2))
    y1 = min(h, int(cy + radius * 2) + 1)
    yy, xx = np.ogrid[y0:y1, x0:x1]
    dist = ((yy - cy) ** 2 + (xx - cx) ** 2) / (radius * radius)
    fall = np.clip(1.0 - dist, 0.0, 1.0) ** 2 * strength
    region = rgba[y0:y1, x0:x1]
    src_a = fall
    dst_a = region[:, :, 3].astype(np.float32) / 255.0
    out_a = src_a + dst_a * (1.0 - src_a)
    safe = np.maximum(out_a, 1e-4)
    for c in range(3):
        src = color[c] * src_a
        dst = region[:, :, c].astype(np.float32) * dst_a * (1.0 - src_a)
        region[:, :, c] = np.clip((src + dst) / safe, 0, 255)
    region[:, :, 3] = np.clip(out_a * 255.0, 0, 255)
    rgba[y0:y1, x0:x1] = region


def add_blob(frame, cx, cy, radius, color, strength):
    if strength <= 0.01 or radius < 1:
        return
    x0 = max(0, int(cx - radius))
    x1 = min(w, int(cx + radius) + 1)
    y0 = max(0, int(cy - radius))
    y1 = min(h, int(cy + radius) + 1)
    if x0 >= x1 or y0 >= y1:
        return
    yy, xx = np.ogrid[y0:y1, x0:x1]
    dist = ((yy - cy) ** 2 + (xx - cx) ** 2) / (radius * radius)
    fall = np.clip(1.0 - dist, 0.0, 1.0) ** 2
    a = (fall * strength).astype(np.float32)[..., None]
    region = frame[y0:y1, x0:x1]
    frame[y0:y1, x0:x1] = region * (1.0 - a) + np.maximum(region, color) * a


frames = []
for i in range(FRAMES):
    t = i / FRAMES
    ang = math.tau * t
    frame = base.copy()
    smoke_layer = np.zeros((h, w), dtype=np.float32)

    for si, (tx, ty) in enumerate(tips):
        flicker = 0.55 + 0.45 * (0.5 + 0.5 * math.sin(ang * 2 + si * 2.1))
        add_blob(frame, tx, ty + 1, 4.2, ember_color, 0.55 * flicker)
        add_blob(frame, tx, ty - 1, 2.0, core_color, 0.7 * flicker)

        # Two thin filaments per stick: straight at the tip, then curling and fading
        for strand in range(2):
            phase = ang + si * 1.8 + strand * 2.4
            for k in range(64):
                along = k / 63.0
                curl = max(0.0, along - 0.08) ** 1.35
                cy = ty - 3 - along * 255
                cx = tx + math.sin(along * 4.8 - phase) * (16 * curl)
                cx += math.sin(along * 10.5 - phase * 1.4 + strand) * (7 * curl)
                cx += (strand - 0.5) * 3.5 * along
                radius = 1.6 + along * 4.2
                envelope = math.sin(along * math.pi) ** 0.55 * (1.0 - along * 0.25)
                filament = 0.35 + 0.65 * max(0.0, math.sin(along * 14.0 - phase * 2.1))
                add_density(smoke_layer, cx, cy, radius, envelope * filament * 0.2)

    soft = Image.fromarray(np.clip(smoke_layer * 255.0, 0, 255).astype(np.uint8)).filter(
        ImageFilter.GaussianBlur(radius=2.2)
    )
    smoke_alpha = np.clip(np.asarray(soft).astype(np.float32) / 255.0, 0.0, 0.72)

    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, 0] = 226
    rgba[:, :, 1] = 222
    rgba[:, :, 2] = 216
    rgba[:, :, 3] = (smoke_alpha * 255.0).astype(np.uint8)

    # Ember glow on each tip, with a soft falloff
    for si, (tx, ty) in enumerate(tips):
        flicker = 0.55 + 0.45 * (0.5 + 0.5 * math.sin(ang * 2 + si * 2.1))
        paint_glow(rgba, tx, ty + 1, 5.5, (255, 120, 48), 0.85 * flicker)
        paint_glow(rgba, tx, ty - 1, 2.4, (255, 220, 170), 0.9 * flicker)

    frames.append(Image.fromarray(rgba, "RGBA"))

frames[0].save(
    OUT,
    save_all=True,
    append_images=frames[1:],
    duration=170,
    loop=0,
)
print(f"wrote {OUT} ({OUT.stat().st_size} bytes, {len(frames)} frames)")
