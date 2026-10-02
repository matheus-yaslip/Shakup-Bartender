import pagesData from '@/data/pagesData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Mapa do site', description: 'Mapa de páginas da ShakeUp Bartenders.' };

export default function MapaSite() {
  const fixed = [['/','Início'],['/empresa','Empresa'],['/cardapio','Cardápio'],['/galeria','Galeria'],['/contato','Contato'],['/informacoes','Informações']];
  return <main id="conteudo" className="site-map-page">
    <section className="page-hero"><div className="eyebrow">MAPA DO SITE</div><h1>Encontre<br/><em>cada página.</em></h1></section>
    <section className="site-map section-pad">
      <div className="site-map-primary">{fixed.map(([href,label])=><Link key={href} href={href}>{label}<span>↗</span></Link>)}</div>
      <div className="site-map-seo">{pagesData.map((p)=><Link key={p.contratada} href={`/${p.contratada}`}>{p.palavra}</Link>)}</div>
    </section>
  </main>;
}
