#!/usr/bin/env python3
"""Genera los SVG del logo de Tequisquiapan Mágico (el Globo). Ver docs/marca/README.md.

Requiere: pip install fonttools uharfbuzz
Uso, desde la raíz del repo: python3 docs/marca/gen_logo.py web/public/logo [carpeta para la app iOS]
"""
import math
import os
import sys

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

OUT = sys.argv[1]
FONT = os.path.join(os.path.dirname(__file__), '../../web/assets/GildaDisplay-Regular.ttf')

BONE, FOREST, GREEN, SAGE = '#eeedea', '#1f2a1a', '#38492a', '#a3ad94'
ROSA, GUINDA, GUINDA_CLARO, OCRE, AGUA = '#b4405f', '#6d1f3b', '#a23a5f', '#d9a63e', '#2b8a8f'

tt = TTFont(FONT)
glyphs, upem, order = tt.getGlyphSet(), tt['head'].unitsPerEm, tt.getGlyphOrder()
hb_font = hb.Font(hb.Face(hb.Blob.from_file_path(FONT)))


def text(s, size=64, track=-0.005):
    """El texto en trazos, para que el SVG no dependa de la fuente. Regresa (path, ancho)."""
    buf = hb.Buffer()
    buf.add_str(s)
    buf.guess_segment_properties()
    hb.shape(hb_font, buf, {'kern': True, 'liga': True})
    k, x = size / upem, 0
    pen = SVGPathPen(glyphs, ntos=lambda v: ('%.2f' % v).rstrip('0').rstrip('.'))
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        glyphs[order[info.codepoint]].draw(TransformPen(pen, (k, 0, 0, -k, (x + pos.x_offset) * k, 0)))
        x += pos.x_advance + track * upem
    return pen.getCommands(), (x - track * upem) * k


# Silueta: círculo exacto arriba y una curva con tangente continua hasta la boca.
CX, TOP, R = 256, 12, 170
CY = TOP + R
NECK_Y, NECK = CY + R * 1.27, 33


def silhouette():
    a = math.radians(30)
    t0 = (R * math.cos(a), CY + R * math.sin(a))
    tx, ty = -math.sin(a), math.cos(a)
    p1 = (t0[0] + tx * R * .46, t0[1] + ty * R * .46)
    p2 = (NECK + R * .15, NECK_Y - R * .30)
    p3 = (NECK, NECK_Y)
    tab = []
    for k in range(241):
        ang = -math.pi / 2 + (a + math.pi / 2) * k / 240
        tab.append((CY + R * math.sin(ang), R * math.cos(ang)))
    for k in range(1, 161):
        t = k / 160
        m = 1 - t
        tab.append((
            m**3 * t0[1] + 3 * m * m * t * p1[1] + 3 * m * t * t * p2[1] + t**3 * p3[1],
            m**3 * t0[0] + 3 * m * m * t * p1[0] + 3 * m * t * t * p2[0] + t**3 * p3[0],
        ))
    return tab


TAB = silhouette()
ARC = [0]
for i in range(1, len(TAB)):
    ARC.append(ARC[-1] + math.hypot(TAB[i][0] - TAB[i - 1][0], TAB[i][1] - TAB[i - 1][1]))
LEN = ARC[-1]


def at(s):
    """Por longitud a lo largo de la silueta: (y, medio ancho, aplastamiento vertical)."""
    s = max(0, min(LEN, s))
    lo, hi = 0, len(ARC) - 1
    while hi - lo > 1:
        mid = (lo + hi) // 2
        if ARC[mid] <= s:
            lo = mid
        else:
            hi = mid
    span = max(1e-6, ARC[hi] - ARC[lo])
    t = (s - ARC[lo]) / span
    y = TAB[lo][0] + (TAB[hi][0] - TAB[lo][0]) * t
    h = TAB[lo][1] + (TAB[hi][1] - TAB[lo][1]) * t
    return y, h, max(.35, min(1, (TAB[hi][0] - TAB[lo][0]) / span))


# Gajos en perspectiva de esfera: angostos en las orillas, anchos al centro.
US = [math.sin(math.radians(a)) for a in (-90, -62, -36, -12, 12, 36, 62, 90)]
_uid = [0]


def uid():
    _uid[0] += 1
    return f'g{_uid[0]}'


def fills(dark):
    vara = SAGE if dark else GREEN
    uvas = GUINDA_CLARO if dark else GUINDA
    return [vara, vara, OCRE, ROSA, AGUA, uvas, uvas]


def gore_path(i, seam):
    left, right = [], []
    for y, h in TAB[::6] + [TAB[-1]]:
        sm = seam * min(1, (h / (R * .62)) ** .8)
        a, b = CX + US[i] * h + sm / 2, CX + US[i + 1] * h - sm / 2
        if a > b:
            a = b = (a + b) / 2
        left.append((a, y))
        right.append((b, y))
    pts = left + right[::-1]
    return 'M' + 'L'.join(f'{x:.1f} {y:.1f}' for x, y in pts) + 'Z'


def placed(i, s, body):
    y, h, sq = at(s)
    mid, wid = (US[i] + US[i + 1]) / 2, (US[i + 1] - US[i]) * h
    ref = (US[i + 1] - US[i]) * R
    return f'<g transform="translate({CX + mid * h:.1f} {y:.1f}) scale({wid / ref:.3f} {sq:.3f})">{body}</g>'


def motifs(i, ink):
    o = ''
    ref = (US[i + 1] - US[i]) * R
    if i == 1:  # vara: tejido
        step, cw = LEN * .041, ref / 2.5
        for r in range(int(LEN * .96 / step)):
            row = ''
            for j in range(-2, 3):
                x = j * cw
                if (r + j) % 2 == 0:
                    row += f'<rect x="{x - cw * .46:.1f}" y="-3.6" width="{cw * .92:.1f}" height="7.2" rx="3.6"/>'
                else:
                    row += f'<rect x="{x - 3.2:.1f}" y="{-step * .5:.1f}" width="6.4" height="{step:.1f}" rx="3.2"/>'
            o += placed(i, LEN * .035 + r * step, row)
    elif i == 2:  # queso: ojos
        for f, dx, r in [(.06, .04, 5), (.13, -.2, 9), (.2, .2, 6), (.28, -.08, 12), (.36, .24, 8), (.44, -.24, 7), (.51, .06, 13),
                         (.6, -.2, 9), (.67, .22, 7), (.75, -.04, 11), (.83, .18, 6), (.9, -.14, 6), (.96, .08, 3.5)]:
            o += placed(i, LEN * f, f'<circle cx="{dx * ref:.1f}" cy="0" r="{r}"/>')
    elif i == 3:  # arcos del portal: dos por fila
        aw, off = ref * .145, ref * .2
        def arc(c):
            return f'<path d="M{c - aw:.1f} {aw * 1.3:.1f}V{-aw * .3:.1f}A{aw:.1f} {aw:.1f} 0 0 1 {c + aw:.1f} {-aw * .3:.1f}V{aw * 1.3:.1f}Z"/>'
        for f in (.075, .205, .335, .465, .595, .725, .855):
            o += placed(i, LEN * f, arc(-off) + arc(off))
    elif i == 4:  # agua termal
        a, f = ref * .62, .05
        while f < .97:
            o += placed(i, LEN * f, f'<path d="M{-a:.1f} 0C{-a * .55:.1f} -11 {-a * .22:.1f} -11 0 0S{a * .55:.1f} 11 {a:.1f} 0" fill="none" stroke="{ink}" stroke-width="6"/>')
            f += .072
    elif i == 5:  # uvas
        grape = ''.join(f'<circle cx="{x}" cy="{y}" r="6"/>' for x, y in [(-12.5, -9), (0, -9), (12.5, -9), (-6.3, 2), (6.3, 2), (0, 13)])
        grape += f'<path d="M0 -15V-23" fill="none" stroke="{ink}" stroke-width="3" stroke-linecap="round"/><path d="M0 -21C5 -28 12 -27 15 -23C11 -19 5 -19 0 -21Z"/>'
        for f in (.1, .24, .38, .52, .66, .8, .92):
            o += placed(i, LEN * f, grape)
    return o


def balloon(dark=False, detail=True, seam=5.5):
    """dark = para fondos oscuros: la canasta va en hueso y los gajos oscuros se aclaran."""
    basket = BONE if dark else FOREST
    weave = FOREST if dark else BONE
    o = ''
    for i, fill in enumerate(fills(dark)):
        cid = uid()
        sm = seam if detail else seam * 2
        o += f'<clipPath id="{cid}"><path d="{gore_path(i, sm)}"/></clipPath><g clip-path="url(#{cid})" fill="{BONE}"><rect width="512" height="520" fill="{fill}"/>'
        if detail and i not in (0, 6):
            o += motifs(i, BONE)
        o += '</g>'
    ny, bw, bh = NECK_Y, 64, 48
    bx, by = CX - bw / 2, ny + 26
    o += f'<path d="M{CX - NECK - 1} {ny + 2:.1f}L{CX - NECK + 4} {ny + 26:.1f}M{CX + NECK + 1} {ny + 2:.1f}L{CX + NECK - 4} {ny + 26:.1f}" fill="none" stroke="{basket}" stroke-width="6.5" stroke-linecap="round"/>'
    if detail:
        o += f'<path d="M{CX - 9} {ny + 2:.1f}L{CX - 7} {ny + 26:.1f}M{CX + 9} {ny + 2:.1f}L{CX + 7} {ny + 26:.1f}" fill="none" stroke="{basket}" stroke-width="4" stroke-linecap="round"/>'
    o += f'<rect x="{bx}" y="{by:.1f}" width="{bw}" height="{bh}" rx="9" fill="{basket}"/>'
    if detail:
        for r, y in enumerate((by + 10, by + 23, by + 36)):
            for j, x in enumerate(range(int(bx) + 7, int(bx + bw) - 7, 15)):
                if (r + j) % 2 == 0:
                    o += f'<rect x="{x}" y="{y - 2.8:.1f}" width="13" height="5.6" rx="2.8" fill="{weave}"/>'
    return o


BOX = (78, 6, 356, int(NECK_Y + 26 + 48 + 2))
N1, W1 = text('Tequisquiapan')
N2, W2 = text('Mágico')


def save(name, w, h, viewbox, body):
    with open(os.path.join(OUT, f'{name}.svg'), 'w') as f:
        f.write(f'<svg xmlns="http://www.w3.org/2000/svg" width="{w:.0f}" height="{h:.0f}" viewBox="{viewbox}">{body}</svg>\n')


def word(fg, x, y, size, path):
    return f'<g transform="translate({x:.2f} {y:.2f}) scale({size / 64:.4f})" fill="{fg}"><path d="{path}"/></g>'


def horizontal(dark, H=320):
    x, y, w, h = BOX
    fg = BONE if dark else FOREST
    s = H / h
    sz, tx = H * .34, w * s + H * .12
    body = f'<g transform="scale({s:.4f}) translate({-x} {-y})">{balloon(dark)}</g>{word(fg, tx, H * .48, sz, N1)}{word(fg, tx, H * .85, sz, N2)}'
    return body, tx + W1 * sz / 64 + 6, H


def vertical(dark, mh=330, sz=60):
    x, y, w, h = BOX
    fg = BONE if dark else FOREST
    s = mh / h
    W = max(W1 * sz / 64, w * s) + 8
    body = f'<g transform="translate({(W - w * s) / 2:.2f} 0) scale({s:.4f}) translate({-x} {-y})">{balloon(dark)}</g>'
    body += word(fg, (W - W1 * sz / 64) / 2, mh + 66, sz, N1) + word(fg, (W - W2 * sz / 64) / 2, mh + 126, sz, N2)
    return body, W, mh + 144


def tile(bg, dark, fit, detail=True, rx=0):
    """Globo centrado en un cuadro de color. `fit` = alto del globo sobre el alto del cuadro."""
    x, y, w, h = BOX
    s = 1024 * fit / h
    r = f' rx="{rx}"' if rx else ''
    return f'<rect width="1024" height="1024" fill="{bg}"{r}/><g transform="translate(512 512) scale({s:.4f}) translate({-(x + w / 2)} {-(y + h / 2)})">{balloon(dark, detail)}</g>'


os.makedirs(OUT, exist_ok=True)
x, y, w, h = BOX
vb = f'{x} {y} {w} {h}'
save('globo-sobre-claro', w, h, vb, balloon(False))
save('globo-sobre-oscuro', w, h, vb, balloon(True))
save('globo-mini-sobre-claro', w, h, vb, balloon(False, False))
save('globo-mini-sobre-oscuro', w, h, vb, balloon(True, False))
for name, fn, dark in (('horizontal-sobre-claro', horizontal, False), ('horizontal-sobre-oscuro', horizontal, True),
                       ('vertical-sobre-claro', vertical, False), ('vertical-sobre-oscuro', vertical, True)):
    body, W, H = fn(dark)
    save(f'tequisquiapan-magico-{name}', W, H, f'0 0 {W:.2f} {H:.2f}', body)
square = '0 0 1024 1024'
save('icono-verde', 1024, 1024, square, tile(FOREST, True, .84))
save('icono-hueso', 1024, 1024, square, tile(BONE, False, .84))
save('icono-maskable', 1024, 1024, square, tile(FOREST, True, .62))
save('favicon-verde', 1024, 1024, square, tile(FOREST, True, .9, detail=False, rx=200))
# Ícono de la app iOS: las tres apariencias, sin transparencia. Si se pasa una segunda carpeta.
if len(sys.argv) > 2:
    IOS = sys.argv[2]
    os.makedirs(IOS, exist_ok=True)
    gris = '<filter id="gris"><feColorMatrix type="saturate" values="0"/></filter>'
    for name, body in (('icon-light', tile(FOREST, True, .84)),
                       ('icon-dark', tile('#0d120b', True, .84)),
                       ('icon-tinted', f'{gris}<g filter="url(#gris)">{tile("#000000", True, .84)}</g>')):
        with open(os.path.join(IOS, f'{name}.svg'), 'w') as f:
            f.write(f'<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="{square}">{body}</svg>\n')
print('listo:', sorted(os.listdir(OUT)))
