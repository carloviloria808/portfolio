"""Generate a 1200x630 terminal-styled Open Graph image."""
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT = sys.argv[1]
OUT = sys.argv[2]

W, H = 1200, 630
BG = (10, 12, 10, 255)
PHOS = (230, 236, 230)
M = 88


def font(sz):
    return ImageFont.truetype(FONT, sz)


base = Image.new("RGBA", (W, H), BG)
d = ImageDraw.Draw(base)

# faint grid
for x in range(0, W + 1, 48):
    d.line([(x, 0), (x, H)], fill=(230, 236, 230, 11))
for y in range(0, H + 1, 48):
    d.line([(0, y), (W, y)], fill=(230, 236, 230, 11))

# boot header (dim)
d.text((M, 60), "ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL", font=font(30), fill=(230, 236, 230, 120))
d.text((M, 92), "VAULT-TEC UNIFIED OPERATING SYSTEM", font=font(30), fill=(230, 236, 230, 85))

# name with phosphor glow
name = "> CARLO VILORIA"
nf = font(128)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(glow).text((M, 168), name, font=nf, fill=(230, 236, 230, 200))
base = Image.alpha_composite(base, glow.filter(ImageFilter.GaussianBlur(8)))
d = ImageDraw.Draw(base)
d.text((M, 168), name, font=nf, fill=PHOS + (255,))

# role / status
d.text((M, 338), "> ROLE: SOFTWARE & AI DEVELOPER", font=font(54), fill=(230, 236, 230, 235))
d.text((M, 402), "> STATUS: AVAILABLE FOR HIRE", font=font(54), fill=(230, 236, 230, 235))

# url + cursor at the bottom
uf = font(40)
url = "> carloportfolio.vercel.app"
d.text((M, 518), url, font=uf, fill=(230, 236, 230, 150))
uw = d.textlength(url + " ", font=uf)
d.rectangle([(M + uw, 524), (M + uw + 16, 558)], fill=PHOS + (235,))

# corner ticks
t = 26
for (cx, cy, dx, dy) in [(40, 40, 1, 1), (W - 40, 40, -1, 1), (40, H - 40, 1, -1), (W - 40, H - 40, -1, -1)]:
    d.line([(cx, cy), (cx + dx * t, cy)], fill=(230, 236, 230, 90), width=2)
    d.line([(cx, cy), (cx, cy + dy * t)], fill=(230, 236, 230, 90), width=2)

# scanlines
scan = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(scan)
for y in range(0, H, 3):
    sd.line([(0, y), (W, y)], fill=(0, 0, 0, 38))
base = Image.alpha_composite(base, scan)

base.convert("RGB").save(OUT)
print("saved", OUT, base.size)
