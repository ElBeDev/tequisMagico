//
//  LegalViews.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI

/// Borrador de Términos y Condiciones y Aviso de Privacidad.
/// ⚠️ Esto NO es asesoría legal — hay que reemplazar los [placeholders] con los datos reales
/// del responsable del proyecto y que un abogado lo revise antes de publicar la app.

struct LegalTermsView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                Text("Términos y Condiciones de Uso")
                    .font(.title2).fontWeight(.bold)
                Text("Última actualización: [fecha]")
                    .font(.caption).foregroundStyle(.secondary)

                LegalSection(title: "1. Aceptación de los términos") {
                    Text("Al descargar, instalar o usar la aplicación \"Tequisquiapan Mágico\" (la \"App\"), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses la App.")
                }

                LegalSection(title: "2. Qué es la App") {
                    Text("Tequisquiapan Mágico es un directorio turístico de Tequisquiapan, Querétaro: lugares de interés, negocios locales y eventos. La información de lugares y eventos es proporcionada por sus dueños o recopilada de fuentes públicas, y puede cambiar sin previo aviso (horarios, precios, disponibilidad).")
                }

                LegalSection(title: "3. No somos responsables de terceros") {
                    Text("La App muestra información de negocios y organizadores de eventos independientes. No somos parte de ninguna transacción, reservación o servicio contratado directamente con esos negocios, y no respondemos por la calidad, seguridad o cumplimiento de lo que ofrezcan.")
                }

                LegalSection(title: "4. Cuentas y contenido de negocios") {
                    Text("Los negocios que administren su propio listado son responsables de que la información y fotos que publiquen sean veraces y de su propiedad o cuenten con licencia para usarlas. Nos reservamos el derecho de remover contenido falso, ofensivo o que infrinja derechos de terceros.")
                }

                LegalSection(title: "5. Suscripciones y pagos") {
                    Text("Las funciones premium para usuarios (si aplican) se cobran a través de App Store conforme a las políticas de Apple. Las suscripciones de negocios se rigen por el contrato de suscripción correspondiente. [Completar cuando esté activo el cobro.]")
                }

                LegalSection(title: "6. Propiedad intelectual") {
                    Text("El diseño, marca y código de la App son propiedad de [nombre del responsable/empresa]. Las fotos de lugares y eventos usan licencias Creative Commons con atribución (ver Perfil → Créditos de fotos) o son proporcionadas por el negocio correspondiente.")
                }

                LegalSection(title: "7. Limitación de responsabilidad") {
                    Text("La App se proporciona \"tal cual\". No garantizamos que la información esté siempre actualizada o libre de errores. El uso de rutas, direcciones o recomendaciones es bajo tu propio riesgo.")
                }

                LegalSection(title: "8. Cambios a estos términos") {
                    Text("Podemos actualizar estos términos; los cambios importantes se notificarán dentro de la App.")
                }

                LegalSection(title: "9. Contacto") {
                    Text("Dudas sobre estos términos: [correo de contacto]")
                }
            }
            .padding()
        }
        .navigationTitle("Términos")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct LegalPrivacyView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                Text("Aviso de Privacidad")
                    .font(.title2).fontWeight(.bold)
                Text("Última actualización: [fecha] — conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)")
                    .font(.caption).foregroundStyle(.secondary)

                LegalSection(title: "Responsable") {
                    Text("[Nombre del responsable / razón social], con domicilio en [domicilio], es responsable del tratamiento de tus datos personales conforme a este aviso.")
                }

                LegalSection(title: "Datos que recopilamos") {
                    Text("• Datos que tú nos das directamente (si contactas soporte, o si un negocio se registra en el panel): nombre, correo, teléfono.\n• Datos de uso local del dispositivo: tus favoritos y búsquedas recientes se guardan solo en tu teléfono, no los recibimos.\n• No recopilamos ubicación en tiempo real ni datos de otras apps.")
                }

                LegalSection(title: "Para qué usamos tus datos") {
                    Text("• Operar y mejorar la App.\n• Responder dudas o solicitudes de soporte.\n• Gestionar cuentas de negocios en el panel administrativo (nombre, contacto, información del lugar que publican).\n• En caso de cobros futuros (suscripciones), procesarlos a través de Apple/procesador de pagos — nosotros no almacenamos datos de tarjetas.")
                }

                LegalSection(title: "Con quién compartimos datos") {
                    Text("No vendemos datos personales. Usamos proveedores de infraestructura (Vercel, Neon) para operar el backend, y Apple para distribución de la App y pagos — cada uno bajo sus propias políticas de privacidad.")
                }

                LegalSection(title: "Derechos ARCO") {
                    Text("Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales. Para ejercerlos, escribe a [correo de contacto] indicando tu solicitud; responderemos en los plazos que marca la LFPDPPP.")
                }

                LegalSection(title: "Menores de edad") {
                    Text("La App no está dirigida a menores de 13 años y no recopila intencionalmente datos de menores.")
                }

                LegalSection(title: "Cambios a este aviso") {
                    Text("Cualquier cambio relevante se notificará dentro de la App antes de que entre en vigor.")
                }
            }
            .padding()
        }
        .navigationTitle("Privacidad")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct ContactView: View {
    var body: some View {
        List {
            Section {
                Label("[correo@tequismagico.mx]", systemImage: "envelope")
                Label("[teléfono de contacto]", systemImage: "phone")
            } footer: {
                Text("Reemplaza estos datos con tu correo/teléfono real antes de publicar — por ahora son marcadores de posición.")
            }
        }
        .navigationTitle("Contacto")
        .navigationBarTitleDisplayMode(.inline)
    }
}

private struct LegalSection<Content: View>: View {
    let title: String
    @ViewBuilder let content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(title)
                .font(.headline)
            content
                .font(.subheadline)
                .foregroundStyle(.secondary)
        }
    }
}

#Preview {
    NavigationStack {
        LegalPrivacyView()
    }
}
