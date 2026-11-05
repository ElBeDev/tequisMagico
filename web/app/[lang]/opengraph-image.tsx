import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { PHOTOS } from '@/lib/photos';
import { LANGS, langOf } from '@/lib/i18n';

// Imagen para compartir de todo el sitio (WhatsApp, redes). Las fichas de lugar y evento la
// reemplazan con su propia foto. Se genera una sola vez en el build.
export const alt = 'Tequisquiapan, Pueblo Mágico de Querétaro';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const assets = join(process.cwd(), 'assets');
const [gilda, outfit, balloon] = await Promise.all([
  readFile(join(assets, 'GildaDisplay-Regular.ttf')),
  readFile(join(assets, 'Outfit-Regular.ttf')),
  readFile(join(assets, 'logo-globo.png')),
]);
const balloonSrc = `data:image/png;base64,${balloon.toString('base64')}`;

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

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const en = langOf(await params) === 'en';
  const photo = await loadPhoto();
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#eeedea', color: '#141412', padding: '64px 72px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              <img src={balloonSrc} alt="" width={158} height={209} />
              <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Gilda', fontSize: 76, lineHeight: 1, letterSpacing: '-0.015em' }}>
                <div>Tequisquiapan</div>
                <div>Mágico</div>
              </div>
            </div>
            <div style={{ fontFamily: 'Outfit', fontSize: 32, marginTop: 36, maxWidth: 620, lineHeight: 1.3, color: '#38492a' }}>
              {en ? 'A Pueblo Mágico in Querétaro, two hours from Mexico City' : 'Pueblo Mágico de Querétaro, a dos horas de la Ciudad de México'}
            </div>
          </div>
          <div style={{ fontFamily: 'Outfit', fontSize: 26, color: '#141412' }}>{en ? 'tequismagico.com/en' : 'tequismagico.com'}</div>
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
