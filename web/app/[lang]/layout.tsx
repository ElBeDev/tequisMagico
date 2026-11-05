import type { Metadata, Viewport } from "next";
import { Gilda_Display, Outfit } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL, getEvents, getPlaces, todayInTequis } from "@/lib/data";
import { dict } from "@/lib/dict";
import { LANGS, LOCALE, href, isLang, type Lang } from "@/lib/i18n";
import { buildNav } from "@/lib/nav";
import { buildSearchIndex } from "@/lib/search";
import SiteHeader from "@/components/SiteNav";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Reveals from "@/components/motion/Reveals";
import Cursor from "@/components/motion/Cursor";
import "../globals.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });
const gilda = Gilda_Display({ variable: "--font-gilda", subsets: ["latin"], weight: "400" });

// Los dos idiomas se generan en el build; cualquier otro primer segmento es 404 por el notFound()
// del layout. No uses `dynamicParams = false` aquí: Next lo aplica a todas las rutas hijas, y un
// lugar nuevo del panel daría 404 hasta volver a compilar.
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = dict(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} · ${t.siteTagline}`,
      template: `%s · ${SITE_NAME}`,
    },
    description: t.siteDescription,
    applicationName: SITE_NAME,
    openGraph: { siteName: SITE_NAME, locale: lang === "en" ? "en_US" : "es_MX", alternateLocale: lang === "en" ? "es_MX" : "en_US", type: "website" },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#eeedea",
};

// Corre antes del primer pintado: marca <html> para que el CSS oculte lo que va a entrar
// animado (evita el parpadeo). Si en 4 s las animaciones no arrancaron, lo muestra todo.
const MOTION_SCRIPT = `(function(){var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion')},4000)})()`;

const FOOTER_LINKS = (lang: Lang) => {
  const L = (es: string, en: string) => (lang === "en" ? en : es);
  return [
    {
      title: dict(lang).footerExplore,
      links: [
        { href: "/lugares", label: L("Qué hacer", "Things to do") },
        { href: "/lugares/gastronomia", label: L("Comer y beber", "Food & drink") },
        { href: "/lugares/hospedaje", label: L("Dónde dormir", "Where to stay") },
        { href: "/eventos", label: L("Eventos", "Events") },
        { href: "/rutas", label: L("Rutas temáticas", "Themed routes") },
        { href: "/mapa", label: L("Mapa", "Map") },
      ],
    },
    {
      title: dict(lang).footerUseful,
      links: [
        { href: "/por-que-tequis", label: L("¿Por qué Tequis?", "Why Tequis?") },
        { href: "/guia-practica", label: L("Guía práctica", "Travel tips") },
        { href: "/guias", label: L("Guías de viaje", "Travel guides") },
        { href: "/mi-viaje", label: L("Mi viaje", "My trip") },
        { href: "/app", label: L("La app", "The app") },
        { href: "/creditos", label: L("Créditos de fotos", "Photo credits") },
      ],
    },
  ];
};

// Menú y buscador se arman con los mismos datos del API (con el mismo caché de 5 min que las
// páginas). Si el API falla, el header sale con las secciones fijas y el buscador sin lugares.
async function loadHeaderData(lang: Lang) {
  const [places, events] = await Promise.all([getPlaces(lang).catch(() => []), getEvents(lang).catch(() => [])]);
  return { nav: buildNav(places, events, todayInTequis(), lang), search: buildSearchIndex(places, events, lang) };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dict(lang);
  const { nav, search } = await loadHeaderData(lang);
  return (
    <html lang={LOCALE[lang]} className={`${outfit.variable} ${gilda.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <SmoothScroll />
        <Reveals />
        <Cursor />
        <SiteHeader nav={nav} search={search} lang={lang} />

        <main className="flex-1">{children}</main>

        <footer data-cursor-dark className="on-dark mt-40 overflow-hidden bg-forest pt-28 text-white">
          <div className="frame grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div data-reveal="up">
              <p className="heading max-w-[17ch]">{t.footerBusinessTitle}</p>
              <p className="mt-6 max-w-[40ch] text-lead leading-snug text-white/85">
                {t.footerBusinessText}
              </p>
              <a href={`mailto:hola@tequismagico.com?subject=${encodeURIComponent(t.footerBusinessSubject)}`} className="btn mt-10">
                {t.footerBusinessCta}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {FOOTER_LINKS(lang).map((col) => (
                <nav key={col.title} aria-label={col.title} data-reveal="up">
                  <p className="font-medium text-white/60">{col.title}</p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={href(lang, l.href)} className="hover:underline">{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
              <div data-reveal="up" className="col-span-2 sm:col-span-1">
                <p className="font-medium text-white/60">{t.footerApp}</p>
                <p className="mt-5 max-w-[24ch]">{t.footerAppText}</p>
                <Link href={href(lang, "/app")} className="mt-3 inline-block underline">{t.footerAppLink}</Link>
              </div>
            </div>
          </div>
          <div className="frame mt-24 flex flex-col gap-3 text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p className="meta">© {new Date().getFullYear()} {SITE_NAME}. {t.footerIndependent}</p>
            <ul className="meta flex gap-6">
              <li>
                <Link href={href(lang, "/privacidad")} className="hover:text-white hover:underline">{t.privacy}</Link>
              </li>
              <li>
                <Link href={href(lang, "/terminos")} className="hover:text-white hover:underline">{t.terms}</Link>
              </li>
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
      </body>
    </html>
  );
}
