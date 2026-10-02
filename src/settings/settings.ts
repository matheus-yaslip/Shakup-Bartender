import { SiteSettings } from "@/types";

const siteName = "Fashion Bartenders";
const title = "Fashion Bartenders | Serviços de Bar para Eventos";
const description = "Serviços de bar, bartenders, drinks e coquetelaria para eventos sociais e corporativos em São Paulo.";
const keywords = "Fashion Bartenders, bartender para eventos, serviço de bar, drinks para eventos, coquetelaria";
export const url = "https://www.fashionbartenders.com.br/";

export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title,
  description,
  siteName,
  keywords,
  canonical: url,
  ddd: "11",
  selosDark: false,
  numeroTelefone: "94021-2876",
  whatsappApi: "https://api.whatsapp.com/send?phone=5511940212876&text=Olá!%20Vim%20do%20site%20da%20Fashion%20Bartenders%20e%20gostaria%20de%20mais%20informações%20e%20orçamento",
  numeroWhatsapp: "94021-2876",
  email: "contato@fashionbartenders.com.br",
  emailDestinatario: "contato@fashionbartenders.com.br",
  endereco: {
    urlMaps: "",
    rua: "",
    numero: "",
    cidade: "São Paulo",
    estado: "SP",
    cep: "",
    mapaEmbed: "",
  },
  openGraph: {
    url,
    title,
    description,
    images: [{ url: "/fashion/drinks/background-body.webp", width: 1200, height: 630, alt: "Fashion Bartenders" }],
    siteName,
    locale: "pt_BR",
    region: "Brasil",
  },
  robots: "index, follow",
};
