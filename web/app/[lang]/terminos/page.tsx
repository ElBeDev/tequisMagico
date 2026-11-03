import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL, LegalPage, LegalSection } from '@/components/LegalPage';
import { alternates, href, langOf } from '@/lib/i18n';

export async function generateMetadata({ params }: PageProps<'/[lang]/terminos'>): Promise<Metadata> {
  const lang = langOf(await params);
  return { title: lang === 'en' ? 'Terms of use' : 'Términos de uso', alternates: alternates(lang, '/terminos') };
}

// Adaptado del borrador de la app (ViewsLegalViews.swift); pendiente de revisión legal. La
// versión en inglés es una traducción: la que vale es la de español.
export default async function TerminosPage({ params }: PageProps<'/[lang]/terminos'>) {
  const lang = langOf(await params);
  if (lang === 'en') {
    return (
      <LegalPage title="Terms of use" subtitle="Last updated: November 2026. This is a translation; the Spanish version prevails.">
        <LegalSection title="1. What Tequisquiapan Mágico is">
          <p>
            A travel guide to Tequisquiapan, Querétaro, Mexico, with points of interest, local businesses and events. The information is provided by the
            businesses or gathered from public sources, and it may change without notice (hours, prices, availability).
          </p>
        </LegalSection>
        <LegalSection title="2. Third-party information">
          <p>
            We show information from independent businesses and organizers. We are not a party to any purchase, booking or service you arrange with them and
            are not responsible for what they offer. We recommend confirming hours and prices directly with each place.
          </p>
        </LegalSection>
        <LegalSection title="3. Business content">
          <p>
            Businesses that manage their own information are responsible for its accuracy and for holding the rights to the photos they publish. We may remove
            false or offensive content or content that infringes third-party rights.
          </p>
        </LegalSection>
        <LegalSection title="4. Intellectual property">
          <p>
            The design, brand and code belong to Tequisquiapan Mágico. Photos are used under Creative Commons attribution licenses (see{' '}
            <Link href={href(lang, '/creditos')} className="underline">credits</Link>) or belong to the respective business.
          </p>
        </LegalSection>
        <LegalSection title="5. Limitation of liability">
          <p>The site is provided “as is”. We don’t guarantee that the information is always up to date or error-free. Using routes and directions is at your own risk.</p>
        </LegalSection>
        <LegalSection title="6. Contact">
          <p>
            Questions or corrections: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
          </p>
        </LegalSection>
      </LegalPage>
    );
  }
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
        <p>El sitio se ofrece “tal cual”. No garantizamos que la información esté siempre actualizada o libre de errores. El uso de rutas y direcciones es bajo tu propio riesgo.</p>
      </LegalSection>
      <LegalSection title="6. Contacto">
        <p>
          Dudas o correcciones: <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
