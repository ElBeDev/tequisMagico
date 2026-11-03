import type { Metadata, Viewport } from "next";
import { Gilda_Display, Outfit } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_NAME, SITE_URL, getEvents, getPlaces, todayInTequis } from "@/lib/data";
import { buildNav } from "@/lib/nav";
import { buildSearchIndex } from "@/lib/search";
import SiteHeader from "@/components/SiteNav";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Reveals from "@/components/motion/Reveals";
import Cursor from "@/components/motion/Cursor";
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
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#eeedea",
};

// Corre antes del primer pintado: marca <html> para que el CSS oculte lo que va a entrar
// animado (evita el parpadeo). Si en 4 s las animaciones no arrancaron, lo muestra todo.
const MOTION_SCRIPT = `(function(){var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion')},4000)})()`;

const FOOTER_LINKS = [
  {
    title: "Explora",
    links: [
      { href: "/lugares", label: "Qué hacer" },
      { href: "/lugares/gastronomia", label: "Comer y beber" },
      { href: "/lugares/hospedaje", label: "Dónde dormir" },
      { href: "/eventos", label: "Eventos" },
      { href: "/rutas", label: "Rutas temáticas" },
      { href: "/mapa", label: "Mapa" },
    ],
  },
  {
    title: "Útil",
    links: [
      { href: "/por-que-tequis", label: "¿Por qué Tequis?" },
      { href: "/guia-practica", label: "Guía práctica" },
      { href: "/guias", label: "Guías de viaje" },
      { href: "/mi-viaje", label: "Mi viaje" },
      { href: "/app", label: "La app" },
      { href: "/creditos", label: "Créditos de fotos" },
    ],
  },
];

const LEGAL_LINKS = [
  { href: "/privacidad", label: "Aviso de privacidad" },
  { href: "/terminos", label: "Términos de uso" },
];

// Menú y buscador se arman con los mismos datos del API (con el mismo caché de 5 min que las
// páginas). Si el API falla, el header sale con las secciones fijas y el buscador sin lugares.
async function loadHeaderData() {
  const [places, events] = await Promise.all([getPlaces().catch(() => []), getEvents().catch(() => [])]);
  return { nav: buildNav(places, events, todayInTequis()), search: buildSearchIndex(places, events) };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { nav, search } = await loadHeaderData();
  return (
    <html lang="es-MX" className={`${outfit.variable} ${gilda.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <SmoothScroll />
        <Reveals />
        <Cursor />
        <SiteHeader nav={nav} search={search} />

        <main className="flex-1">{children}</main>

        <footer data-cursor-dark className="on-dark mt-40 overflow-hidden bg-forest pt-28 text-white">
          <div className="frame grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div data-reveal="up">
              <p className="heading max-w-[17ch]">¿Tienes un negocio en Tequis?</p>
              <p className="mt-6 max-w-[40ch] text-lead leading-snug text-white/85">
                Aparece en la guía y en la app, con tus fotos, horarios y la ruta para llegar.
              </p>
              <a href="mailto:contacto@tequismagico.com?subject=Quiero%20aparecer%20en%20Tequisquiapan%20M%C3%A1gico" className="btn mt-10">
                Escríbenos
              </a>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {FOOTER_LINKS.map((col) => (
                <nav key={col.title} aria-label={col.title} data-reveal="up">
                  <p className="font-medium text-white/60">{col.title}</p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="hover:underline">{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
              <div data-reveal="up" className="col-span-2 sm:col-span-1">
                <p className="font-medium text-white/60">La app</p>
                <p className="mt-5 max-w-[24ch]">Cerca de mí, favoritos y uso sin conexión.</p>
                <Link href="/app" className="mt-3 inline-block underline">Conocer la app</Link>
              </div>
            </div>
          </div>
          <div className="frame mt-24 flex flex-col gap-3 text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p className="meta">© {new Date().getFullYear()} {SITE_NAME}. Guía independiente; no es un sitio oficial del municipio.</p>
            <ul className="meta flex gap-6">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <p
            aria-hidden
            data-split="chars"
            className="mt-10 select-none whitespace-nowrap text-center font-display uppercase leading-[0.8] tracking-[-0.02em] text-sage"
            style={{ fontSize: "clamp(3rem, 12.4vw, 13rem)" }}
          >
            Tequisquiapan
          </p>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
