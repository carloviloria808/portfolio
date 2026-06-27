"""Turn a logo on a solid black background into transparent color / white /
black variants. Alpha = per-pixel brightness (max RGB channel), so the black
background and black cutouts drop out."""
import sys
from PIL import Image, ImageChops

SRC = sys.argv[1]
PREFIX = sys.argv[2]  # e.g. .../tftools  ->  -color.png / -white.png / -black.png

im = Image.open(SRC).convert("RGB")
r, g, b = im.split()
mask = ImageChops.lighter(ImageChops.lighter(r, g), b)  # max(R,G,B): bright = opaque

bbox = mask.getbbox()
pad = 18
if bbox:
    x0, y0, x1, y1 = bbox
    bbox = (max(0, x0 - pad), max(0, y0 - pad),
            min(im.width, x1 + pad), min(im.height, y1 + pad))


def save(img, suffix):
    if bbox:
        img = img.crop(bbox)
    img.thumbnail((640, 640))
    img.save(PREFIX + suffix)
    print("saved", PREFIX + suffix, img.size)


color = im.convert("RGBA")
color.putalpha(mask)
save(color, "-color.png")

white = Image.new("RGBA", im.size, (255, 255, 255, 0))
white.putalpha(mask)
save(white, "-white.png")

black = Image.new("RGBA", im.size, (0, 0, 0, 0))
black.putalpha(mask)
save(black, "-black.png")
