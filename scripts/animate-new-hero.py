import math
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "new-hero-agarbatti.jpg"
OUT = ROOT / "public" / "images" / "new-hero-agarbatti-animated.gif"

base_img = Image.open(SRC).convert("RGB")
w, h = base_img.size
base = np.asarray(base_img).astype(np.float32)

# Find glowing orange/red pixels
r = base[:, :, 0]
g = base[:, :, 1]
b = base[:, :, 2]

# Heuristic for embers: high red, moderate green, low blue
mask = (r > 150) & (g < r * 0.8) & (b < r * 0.4) & (r > g + 40)
mask_float = mask.astype(np.float32)

FRAMES = 16
frames = []

for i in range(FRAMES):
    t = i / FRAMES
    ang = math.tau * t
    
    # Subtly modulate the brightness of the glowing parts
    # The user said the burn part was "too glow", so we reduce the brightness and add a small flicker
    # We reduce the baseline brightness of the glowing areas to 0.5 (half as bright)
    flicker = 0.5 + 0.15 * math.sin(ang * 2) + 0.1 * math.sin(ang * 5.3)
    
    frame = base.copy()
    
    # Apply flicker to masked areas
    frame[:, :, 0] = np.where(mask, frame[:, :, 0] * flicker, frame[:, :, 0])
    frame[:, :, 1] = np.where(mask, frame[:, :, 1] * flicker, frame[:, :, 1])
    frame[:, :, 2] = np.where(mask, frame[:, :, 2] * flicker, frame[:, :, 2])
    
    frame = np.clip(frame, 0, 255).astype(np.uint8)
    frames.append(Image.fromarray(frame))

frames[0].save(
    OUT,
    save_all=True,
    append_images=frames[1:],
    duration=100,
    loop=0,
)
print(f"wrote {OUT}")
