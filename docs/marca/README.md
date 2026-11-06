# Marca: el Globo

El logo de Tequisquiapan Mágico es un globo redondo con un gajo por cada cosa que ofrece Tequis.

| Parte del globo | Qué representa |
|---|---|
| Vara tejida | Cestería de vara de sauz |
| Ojos de queso | Cavas y queserías |
| Arcos | Plaza, portales y parroquia |
| Agua | Aguas termales |
| Uvas | Viñedos y vino |
| Canasta tejida | Otra vez la cestería |
| El globo | Vuelos al amanecer |

No es el logo oficial de Pueblos Mágicos, que es un rehilete de SECTUR con su propio manual de uso, ni la marca "Tequis te quiere" del Patronato de Turismo. No uses ni imites esas marcas.

## Nombre

El nombre completo es **Tequisquiapan Mágico**. Donde no cabe, como en el iPhone o al instalar el sitio, es **Tequis Mágico**, siempre con acento.

## Qué archivo usar

Todo está en [`web/public/logo/`](../../web/public/logo/). El nombre va en trazos, así que los SVG no dependen de ninguna fuente.

| Dónde va | Archivo |
|---|---|
| Globo solo, en fondo claro | `globo-sobre-claro.svg` |
| Globo solo, en fondo oscuro o sobre una foto | `globo-sobre-oscuro.svg` |
| Globo solo, abajo de 40 px | `globo-mini-sobre-claro.svg` o `globo-mini-sobre-oscuro.svg` |
| Con el nombre, a lo ancho | `tequisquiapan-magico-horizontal-sobre-claro.svg` o `-sobre-oscuro.svg` |
| Con el nombre, a lo alto | `tequisquiapan-magico-vertical-sobre-claro.svg` o `-sobre-oscuro.svg` |
| Foto de perfil o ícono cuadrado | `icono-verde-1024.png` o `icono-hueso-1024.png` (también en SVG) |
| Favicon | `favicon-verde.svg` |

## Reglas

- **Fondos claros:** canasta en verde bosque. **Fondos oscuros y fotos:** canasta en hueso y gajos oscuros aclarados. Por eso hay dos versiones.
- **Tamaño mínimo:** con dibujos, 40 px de alto. Abajo de eso, la versión `mini`, que solo lleva los colores.
- **No cambies** los colores de los gajos, el orden ni las proporciones, y no le agregues contornos ni sombras.

## Colores

| Color | Hex | Dónde |
|---|---|---|
| Verde bosque | `#1f2a1a` | Canasta, fondo de íconos |
| Hueso | `#eeedea` | Dibujos, canasta sobre oscuro |
| Verde viñedo | `#38492a` | Gajo de vara |
| Salvia | `#a3ad94` | Gajo de vara sobre oscuro |
| Ocre | `#d9a63e` | Gajo de queso |
| Rosa parroquia | `#b4405f` | Gajo de arcos |
| Agua | `#2b8a8f` | Gajo de agua |
| Guinda | `#6d1f3b` | Gajo de uvas |
| Guinda claro | `#a23a5f` | Gajo de uvas sobre oscuro |

## Volver a generarlo

Los SVG salen de [`gen_logo.py`](gen_logo.py). Si cambias el diseño, cámbialo ahí y no a mano en los archivos:

```
pip install fonttools uharfbuzz
python3 docs/marca/gen_logo.py web/public/logo
```

Los PNG y `favicon.ico` se exportan después desde esos SVG, y hay que copiar a mano estos archivos:

- `web/app/favicon.ico`, `web/app/icon.svg` y `web/app/apple-icon.png`
- `web/assets/logo-globo.png`, para la imagen que se comparte en redes
- `web-admin/public/logo/`, `web-admin/app/favicon.ico` y `web-admin/app/icon.svg`

Para el ícono de la app iOS, pasa una segunda carpeta al generador. Salen tres SVG, que hay que exportar a PNG de 1024 × 1024 **sin transparencia** (el App Store rechaza el ícono principal si la tiene) y copiar a `Tequis Magico/Tequis Magico/Assets.xcassets/AppIcon.appiconset/`:

```
python3 docs/marca/gen_logo.py web/public/logo carpeta-ios
```

| Archivo | Cuándo lo usa iOS | Fondo |
|---|---|---|
| `icon-light.png` | Modo claro | Verde bosque |
| `icon-dark.png` | Modo oscuro | Verde casi negro |
| `icon-tinted.png` | Modo teñido: iOS lo pinta del color que elija el usuario | Negro, globo en grises |

## Pendiente

- Antes de registrar la marca en el IMPI, hay que hacer una búsqueda de marcas y revisar que no choque con "Tequis te quiere" ni con el programa Pueblos Mágicos.
