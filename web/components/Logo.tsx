// El Globo: la marca del sitio. Los archivos viven en public/logo y salen de docs/marca/gen_logo.py.
// Son <img> y no SVG en línea porque pesan 28 kB y aparecen en todas las páginas: así el navegador
// los guarda una sola vez. `light` es para fondos claros y `dark` para fondos oscuros o fotos: la
// canasta cambia a hueso y los gajos oscuros se aclaran. Usa `mini` abajo de 40 px: sin los dibujos.
type Tone = 'light' | 'dark';

const file = (tone: Tone, mini: boolean) => `/logo/globo-${mini ? 'mini-' : ''}sobre-${tone === 'light' ? 'claro' : 'oscuro'}.svg`;

export function BalloonMark({ tone = 'light', mini = false, className = 'h-12 w-9' }: { tone?: Tone; mini?: boolean; className?: string }) {
  return <img src={file(tone, mini)} alt="" width={356} height={473} decoding="async" className={className} />;
}

export function Logo({ tone = 'light', className = '' }: { tone?: Tone; className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {/* Las dos versiones encimadas: el header pasa de foto a fondo claro sin que parpadee. */}
      <span className="relative block h-12 w-9 shrink-0">
        <BalloonMark tone="light" className={`absolute inset-0 size-full transition-opacity duration-500 ${tone === 'light' ? '' : 'opacity-0'}`} />
        <BalloonMark tone="dark" className={`absolute inset-0 size-full transition-opacity duration-500 ${tone === 'dark' ? '' : 'opacity-0'}`} />
      </span>
      <span className="font-display text-[1.375rem] leading-[0.95] tracking-[-0.01em]">
        Tequisquiapan
        <br />
        Mágico
      </span>
    </span>
  );
}
