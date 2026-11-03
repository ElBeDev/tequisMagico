'use client';

import { useEffect, useState } from 'react';
import type { Lang } from '@/lib/i18n';
import { openState, type OpenState } from '@/lib/schedule';

// Se calcula en el navegador: la página está cacheada varios minutos y "abierto ahora"
// tiene que reflejar la hora real de quien la ve.
export default function OpenNow({ schedule, lang }: { schedule: Record<string, string> | null; lang: Lang }) {
  const [state, setState] = useState<OpenState>(null);

  useEffect(() => {
    const update = () => setState(openState(schedule, lang));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, [schedule, lang]);

  if (!state) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium ${state.open ? 'text-ok' : 'text-muted'}`}
    >
      <span className={`size-1.5 rounded-full ${state.open ? 'bg-ok' : 'bg-muted'}`} />
      {state.label}
    </span>
  );
}
