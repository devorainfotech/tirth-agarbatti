import sys
from pathlib import Path
from PIL import Image
import numpy as np

src_path = sys.argv[1]
out_path = Path("m:/Projects/Milliard-Agarbatti/public/images/title-underline.png")

img = Image.open(src_path).convert("RGBA")
arr = np.array(img)

h, w, _ = arr.shape
# Crop second row, left column which contains a thick marker-style highlight
crop = arr[int(h*0.2):int(h*0.4), 0:int(w*0.5)]

r, g, b, a = crop[:,:,0].astype(np.float32), crop[:,:,1].astype(np.float32), crop[:,:,2].astype(np.float32), crop[:,:,3].astype(np.float32)
lum = (0.299*r + 0.587*g + 0.114*b)

out = np.zeros_like(crop)
out[:,:,0] = 252  # R
out[:,:,1] = 211  # G
out[:,:,2] = 77   # B

# Strict alpha thresholding to remove the black box
alpha = np.clip((lum - 40) * 4, 0, 255)
out[:,:,3] = alpha.astype(np.uint8)

coords = np.argwhere(alpha > 10)
if coords.size > 0:
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0) + 1
    # Add a little padding
    y0 = max(0, y0 - 5)
    y1 = min(crop.shape[0], y1 + 5)
    x0 = max(0, x0 - 5)
    x1 = min(crop.shape[1], x1 + 5)
    out = out[y0:y1, x0:x1]

final_img = Image.fromarray(out)
final_img.save(out_path)
print(f"Saved clean underline to {out_path}")
