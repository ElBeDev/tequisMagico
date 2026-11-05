import { randomBytes } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

// Protegida por proxy.ts. Caddy sirve UPLOAD_DIR como estático en PUBLIC_UPLOAD_URL.
const MAX_BYTES = 10 * 1024 * 1024;

// Se decide por el contenido, no por el nombre ni por el Content-Type que manda el navegador.
function imageExtension(b: Buffer): string | null {
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'jpg';
  if (b.length >= 8 && b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png';
  if (b.length >= 12 && b.toString('latin1', 0, 4) === 'RIFF' && b.toString('latin1', 8, 12) === 'WEBP') return 'webp';
  return null;
}

export async function POST(request: Request): Promise<NextResponse> {
  const dir = process.env.UPLOAD_DIR;
  const publicUrl = process.env.PUBLIC_UPLOAD_URL;
  if (!dir || !publicUrl) {
    return NextResponse.json({ error: 'Subida de fotos sin configurar' }, { status: 500 });
  }

  try {
    const form = await request.formData();
    const file = form.get('file');
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Falta el archivo' }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: 'La foto pesa más de 10 MB' }, { status: 413 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const ext = imageExtension(bytes);
    if (!ext) {
      return NextResponse.json({ error: 'Solo se aceptan fotos JPG, PNG o WebP' }, { status: 415 });
    }

    const name = `${randomBytes(16).toString('hex')}.${ext}`;
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, name), bytes, { flag: 'wx' });

    return NextResponse.json({ url: `${publicUrl.replace(/\/$/, '')}/${name}` });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
