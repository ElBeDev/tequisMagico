import type { Metadata } from 'next';
import { CONTACT_EMAIL, LegalPage, LegalSection } from '@/components/LegalPage';
import { alternates, langOf } from '@/lib/i18n';

export async function generateMetadata({ params }: PageProps<'/[lang]/privacidad'>): Promise<Metadata> {
  const lang = langOf(await params);
  return { title: lang === 'en' ? 'Privacy notice' : 'Aviso de privacidad', alternates: alternates(lang, '/privacidad') };
}

// Adaptado del borrador de la app (ViewsLegalViews.swift). Igual que aquel, falta que lo
// revise un abogado antes de darlo por definitivo. La versión en inglés es una traducción: la
// que vale es la de español (lo dice el subtítulo).
export default async function PrivacidadPage({ params }: PageProps<'/[lang]/privacidad'>) {
  const lang = langOf(await params);
  if (lang === 'en') {
    return (
      <LegalPage
        title="Privacy notice"
        subtitle="Under Mexico’s Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP). Last updated: November 2026. This is a translation; the Spanish version prevails."
      >
        <LegalSection title="Who is responsible">
          <p>Tequisquiapan Mágico is responsible for the personal data collected through this site and its app.</p>
        </LegalSection>
        <LegalSection title="Data we collect">
          <p>You can use this site without creating an account or giving us personal data. We don’t use advertising or tracking cookies.</p>
          <p>If you write to us, or if a business signs up with us, we receive the data you share: name, email and phone number.</p>
          <p>Our server logs technical data about each visit, such as IP address and browser, to run and protect the site.</p>
        </LegalSection>
        <LegalSection title="What we use your data for">
          <p>To run and improve the site and the app, reply to your messages and manage the information businesses publish.</p>
        </LegalSection>
        <LegalSection title="Who we share data with">
          <p>We don’t sell personal data. We use a hosting provider to run the service, under its own privacy policy.</p>
        </LegalSection>
        <LegalSection title="Your ARCO rights">
          <p>
            You can Access, Rectify, Cancel or Oppose the processing of your data by writing to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>. We’ll reply within the time limits set by the LFPDPPP.
          </p>
        </LegalSection>
        <LegalSection title="Changes to this notice">
          <p>We’ll post any relevant change on this page.</p>
        </LegalSection>
      </LegalPage>
    );
  }
  return (
    <LegalPage
      title="Aviso de privacidad"
      subtitle="Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Última actualización: noviembre de 2026."
    >
      <LegalSection title="Responsable">
        <p>Tequisquiapan Mágico es responsable del tratamiento de los datos personales que se recaben a través de este sitio y de su app.</p>
      </LegalSection>
      <LegalSection title="Datos que recopilamos">
        <p>Este sitio se puede usar sin crear una cuenta ni darnos datos personales. No usamos cookies de publicidad ni de seguimiento.</p>
        <p>Si nos escribes, o si un negocio se registra con nosotros, recibimos los datos que nos compartas: nombre, correo y teléfono.</p>
        <p>Nuestro servidor registra datos técnicos de cada visita, como la dirección IP y el navegador, para operar y proteger el sitio.</p>
      </LegalSection>
      <LegalSection title="Para qué usamos tus datos">
        <p>Para operar y mejorar el sitio y la app, responder tus mensajes y gestionar la información que publican los negocios.</p>
      </LegalSection>
      <LegalSection title="Con quién compartimos datos">
        <p>No vendemos datos personales. Usamos un proveedor de hospedaje para operar el servicio, bajo sus propias políticas de privacidad.</p>
      </LegalSection>
      <LegalSection title="Derechos ARCO">
        <p>
          Puedes Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos escribiendo a{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>. Responderemos en los plazos que marca la LFPDPPP.
        </p>
      </LegalSection>
      <LegalSection title="Cambios a este aviso">
        <p>Publicaremos cualquier cambio relevante en esta página.</p>
      </LegalSection>
    </LegalPage>
  );
}
