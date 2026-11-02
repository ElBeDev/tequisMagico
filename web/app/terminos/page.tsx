import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL, LegalPage, LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Términos de uso',
  alternates: { canonical: '/terminos' },
};

// Adaptado del borrador de la app (ViewsLegalViews.swift); pendiente de revisión legal.
export default function TerminosPage() {
  return (
    <LegalPage title="Términos de uso" subtitle="Última actualización: noviembre de 2026.">
      <LegalSection title="1. Qué es Tequisquiapan Mágico">
        <p>
          Es una guía turística de Tequisquiapan, Querétaro, con lugares de interés, negocios locales y eventos. La información la proporcionan los negocios o
          se recopila de fuentes públicas, y puede cambiar sin previo aviso (horarios, precios, disponibilidad).
        </p>
      </LegalSection>
      <LegalSection title="2. Información de terceros">
        <p>
          Mostramos información de negocios y organizadores independientes. No somos parte de ninguna compra, reservación o servicio que contrates con ellos
          y no respondemos por lo que ofrezcan. Te recomendamos confirmar horarios y precios directamente con cada lugar.
        </p>
      </LegalSection>
      <LegalSection title="3. Contenido de negocios">
        <p>
          Los negocios que administren su información son responsables de que sea veraz y de tener los derechos de las fotos que publiquen. Podemos retirar
          contenido falso, ofensivo o que infrinja derechos de terceros.
        </p>
      </LegalSection>
      <LegalSection title="4. Propiedad intelectual">
        <p>
          El diseño, la marca y el código son de Tequisquiapan Mágico. Las fotos usan licencias Creative Commons con atribución (ver{' '}
          <Link href="/creditos" className="underline">créditos</Link>) o son del negocio correspondiente.
        </p>
      </LegalSection>
      <LegalSection title="5. Limitación de responsabilidad">
        <p>El sitio se ofrece &quot;tal cual&quot;. No garantizamos que la información esté siempre actualizada o libre de errores. El uso de rutas y direcciones es bajo tu propio riesgo.</p>
      </LegalSection>
      <LegalSection title="6. Contacto">
        <p>
          Dudas o correcciones: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
