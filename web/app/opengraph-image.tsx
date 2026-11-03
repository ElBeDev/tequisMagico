import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { PHOTOS } from '@/lib/photos';

// Imagen para compartir de todo el sitio (WhatsApp, redes). Las fichas de lugar y evento la
// reemplazan con su propia foto. Se genera una sola vez en el build.
export const alt = 'Tequisquiapan, Pueblo Mágico de Querétaro';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const assets = join(process.cwd(), 'assets');
const [gilda, outfit] = await Promise.all([
  readFile(join(assets, 'GildaDisplay-Regular.ttf')),
  readFile(join(assets, 'Outfit-Regular.ttf')),
]);

// Wikimedia pide un User-Agent propio; la foto va embebida para no depender de que el
// generador la pueda descargar. Si falla, la imagen sale con el arco en salvia y sin foto.
async function loadPhoto(): Promise<string | null> {
  try {
    const res = await fetch(PHOTOS.parroquiaAtardecer.src.replace(/\/\d+px-/, '/960px-'), {
      headers: { 'User-Agent': 'TequisMagico/1.0 (https://tequismagico.com)' },
    });
    if (!res.ok) return null;
    return `data:image/jpeg;base64,${Buffer.from(await res.arrayBuffer()).toString('base64')}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const photo = await loadPhoto();
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#eeedea', color: '#141412', padding: '64px 72px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Gilda', fontSize: 104, lineHeight: 1, letterSpacing: '-0.02em' }}>Tequisquiapan</div>
            <div style={{ fontFamily: 'Outfit', fontSize: 34, marginTop: 28, maxWidth: 560, lineHeight: 1.3, color: '#38492a' }}>
              Pueblo Mágico de Querétaro, a dos horas de la Ciudad de México
            </div>
          </div>
          <div style={{ fontFamily: 'Outfit', fontSize: 26, color: '#141412' }}>tequismagico.com</div>
        </div>
        <div style={{ display: 'flex', width: 360, height: 502, borderRadius: '180px 180px 0 0', overflow: 'hidden', background: '#a3ad94' }}>
          {photo && <img src={photo} alt="" width={360} height={502} style={{ objectFit: 'cover' }} />}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Gilda', data: gilda, style: 'normal', weight: 400 },
        { name: 'Outfit', data: outfit, style: 'normal', weight: 400 },
      ],
    },
  );
}
