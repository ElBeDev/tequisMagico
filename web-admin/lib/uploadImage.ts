/** Sube una foto a /api/upload y regresa su URL pública. */
export async function uploadImage(file: File): Promise<string> {
  const body = new FormData();
  body.append('file', file);

  const res = await fetch('/api/upload', { method: 'POST', body });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.url) {
    throw new Error(data?.error ?? 'Error al subir la imagen');
  }
  return data.url;
}
