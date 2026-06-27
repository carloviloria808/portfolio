"""One-off: turn a logo into a solid phosphor mark with a transparent
background, suitable for the dark terminal theme.

Usage: process_logo.py SRC DST [light|dark]
  light (default) — dark art on a light/transparent bg (invert it)
  dark            — light art on a dark bg (use brightness directly)
"""
import sys
from PIL import Image, ImageOps, ImageStat

SRC = sys.argv[1]
DST = sys.argv[2]
MODE = sys.argv[3] if len(sys.argv) > 3 else "light"
COLOR = (230, 236, 230)  # P4 white phosphor

src = Image.open(SRC).convert("RGBA")
if MODE == "dark":
    # Light mark on a dark bg: flatten on black, brightness IS the mark.
    base = Image.new("RGBA", src.size, (0, 0, 0, 255))
    inv = Image.alpha_composite(base, src).convert("L")
else:
    # Dark art on a light/transparent bg: flatten on white, then invert so
    # "ink" is anything darker than white.
    white = Image.new("RGBA", src.size, (255, 255, 255, 255))
    inv = ImageOps.invert(Image.alpha_composite(white, src).convert("L"))
im = src
# Background is the dominant (median) level; cut it off and a small margin,
# then linearly stretch the strokes above it up to full alpha.
bg = ImageStat.Stat(inv).median[0]
floor = bg + 6
mx = inv.getextrema()[1]
scale = 255.0 / max(1, (mx - floor))
gamma = 0.75
alpha = inv.point(
    lambda v: 0 if v <= floor else min(255, int((((v - floor) * scale / 255.0) ** gamma) * 255))
)
print("bg", bg, "floor", floor, "max", mx)

# Build a phosphor-colored RGBA using the boosted mark as alpha.
rgba = Image.new("RGBA", im.size, COLOR + (0,))
rgba.putalpha(alpha)

# Crop to the mark with a little breathing room.
bbox = alpha.getbbox()
if bbox:
    pad = 12
    x0, y0, x1, y1 = bbox
    bbox = (max(0, x0 - pad), max(0, y0 - pad),
            min(im.width, x1 + pad), min(im.height, y1 + pad))
    rgba = rgba.crop(bbox)

rgba.save(DST)
print("saved", DST, rgba.size)
