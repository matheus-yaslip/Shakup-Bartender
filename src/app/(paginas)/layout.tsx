import { settings } from "@/settings/settings";
import "normalize.css";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Topo from "@/partials/Topo";
import Rodape from "@/partials/Rodape";
import ExperienceEffects from "@/components/ExperienceEffects";
import { frankRuhl, josefinSans, poppins, openSans } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import CocktailScrollTop from "@/components/ui/CocktailScrollTop";


export const metadata: Metadata = {
  metadataBase: new URL(settings.canonical),
  title: { default: settings.title, template: "%s | ShakeUp Bartenders" },
  description: settings.description,
  alternates: { canonical: settings.canonical },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: settings.canonical,
    siteName: settings.siteName,
    title: settings.title,
    description: settings.description,
    images: settings.openGraph.images,
  },
  robots: settings.robots,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fashion Bartenders",
  url: "https://www.fashionbartenders.com.br/",
  telephone: "+55 11 94021-2876",
  email: "contato@fashionbartenders.com.br",
  areaServed: "São Paulo",
  description: "Empresa especializada em serviços de bar e bebidas para eventos sociais e corporativos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${frankRuhl.variable} ${poppins.variable} ${josefinSans.variable} ${openSans.variable}`}>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Topo />
        <SmoothScroll />
        <ExperienceEffects />
        {children}
        <Rodape />
        <CocktailScrollTop />
        
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
