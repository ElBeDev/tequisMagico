import type { Metadata } from 'next';
import { CONTACT_EMAIL, LegalPage, LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Aviso de privacidad',
  alternates: { canonical: '/privacidad' },
};

// Adaptado del borrador de la app (ViewsLegalViews.swift). Igual que aquel, falta que lo
// revise un abogado antes de darlo por definitivo.
export default function PrivacidadPage() {
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
        <p>Nuestro proveedor de hospedaje (Vercel) registra datos técnicos de cada visita, como la dirección IP y el navegador, para operar y proteger el sitio.</p>
      </LegalSection>
      <LegalSection title="Para qué usamos tus datos">
        <p>Para operar y mejorar el sitio y la app, responder tus mensajes y gestionar la información que publican los negocios.</p>
      </LegalSection>
      <LegalSection title="Con quién compartimos datos">
        <p>No vendemos datos personales. Usamos proveedores de infraestructura (Vercel y Neon) para operar el servicio, cada uno con sus propias políticas de privacidad.</p>
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
