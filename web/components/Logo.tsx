/** El globo del ícono de la app, en línea, para usarlo en blanco o negro. */
export function BalloonMark({ className = 'size-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="24" cy="24" r="22.5" />
      <path d="M24 9c-6.2 0-10.5 4.7-10.5 10.6 0 6.3 6.1 11.1 8.6 13.4h3.8c2.5-2.3 8.6-7.1 8.6-13.4C34.5 13.7 30.2 9 24 9Z" fill="currentColor" stroke="none" />
      <path d="M22 33l-1.4 3.2M26 33l1.4 3.2" strokeLinecap="round" />
      <rect x="20" y="36.2" width="8" height="4.6" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <BalloonMark className="size-11 shrink-0" />
      <span className="text-[13px] font-bold uppercase leading-[1.15] tracking-[0.08em]">
        Tequisquiapan
        <br />
        Mágico
      </span>
    </span>
  );
}
