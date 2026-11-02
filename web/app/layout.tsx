import type { Metadata, Viewport } from "next";
import { Gilda_Display, Outfit } from "next/font/google";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/data";
import SiteHeader from "@/components/SiteNav";
import "./globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const gilda = Gilda_Display({ variable: "--font-gilda", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Guía de Tequisquiapan, Querétaro`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Qué hacer en Tequisquiapan: viñedos, queserías, cestería, hoteles, restaurantes, fiestas con fecha y rutas por el Pueblo Mágico de Querétaro.",
  applicationName: SITE_NAME,
  openGraph: { siteName: SITE_NAME, locale: "es_MX", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#eeedea",
};

const FOOTER_LINKS = [
  {
    title: "Explora",
    links: [
      { href: "/lugares", label: "Qué hacer" },
      { href: "/eventos", label: "Eventos" },
      { href: "/rutas", label: "Rutas temáticas" },
      { href: "/mapa", label: "Mapa" },
    ],
  },
  {
    title: "Útil",
    links: [
      { href: "/guia-practica", label: "Guía práctica" },
      { href: "/app", label: "La app" },
      { href: "/creditos", label: "Créditos de fotos" },
    ],
  },
  {
    title: "Información legal",
    links: [
      { href: "/privacidad", label: "Aviso de privacidad" },
      { href: "/terminos", label: "Términos de uso" },
    ],
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${outfit.variable} ${gilda.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <footer className="overflow-hidden pt-28">
          <div className="mx-auto grid max-w-[1140px] gap-12 px-5 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <p className="text-3xl font-bold leading-tight">Ven a vivir</p>
              <p className="font-display text-3xl leading-tight">la magia de Tequis.</p>
              <p className="mt-5 max-w-sm text-[17px] leading-relaxed">
                Cantera, mimbre, viñedos y fiestas de pueblo, a unos 180 km de la Ciudad de México. Esta guía y nuestra app muestran
                la misma información.
              </p>
            </div>
            {FOOTER_LINKS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="font-semibold">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:underline">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-[1140px] px-5 text-sm text-muted">
            © {new Date().getFullYear()} {SITE_NAME}. Guía independiente; no es un sitio oficial del municipio.
          </p>
          <p
            aria-hidden
            className="mt-6 select-none whitespace-nowrap text-center font-display uppercase leading-[0.8] text-white"
            style={{ fontSize: "clamp(3rem, 12.4vw, 12rem)" }}
          >
            Tequisquiapan
          </p>
        </footer>
      </body>
    </html>
  );
}
