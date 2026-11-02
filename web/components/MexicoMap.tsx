import { MX_PATH, MX_VIEWBOX, NEIGHBORS_PATH, TEQUIS_POINT } from '@/lib/mexico-outline';

/** México en línea fina con un pin que late sobre Tequisquiapan (el mapa del mundo de la referencia). */
export default function MexicoMap() {
  const [x, y] = TEQUIS_POINT;
  return (
    <svg viewBox={MX_VIEWBOX} className="h-auto w-full overflow-hidden" role="img" aria-label="Mapa de México con Tequisquiapan marcado en Querétaro">
      <path d={NEIGHBORS_PATH} fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />
      <path d={MX_PATH} fill="none" stroke="currentColor" strokeWidth="1.1" />
      <g transform={`translate(${x} ${y})`}>
        <circle r="16" fill="none" stroke="currentColor" strokeOpacity="0.5" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'pulse-ring 2.4s ease-out infinite' }} />
        <circle r="18" fill="none" stroke="currentColor" strokeOpacity="0.2" />
        <circle r="9" fill="none" stroke="currentColor" strokeOpacity="0.4" />
        <circle r="4.5" fill="currentColor" />
      </g>
      <text x={x + 26} y={y + 6} className="fill-current font-display" fontSize="22">Tequisquiapan</text>
    </svg>
  );
}
