import pagesData from '@/data/pagesData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informações e serviços',
  description: 'Conteúdos sobre os serviços de bartender, garçom e bar para eventos oferecidos pela ShakeUp Bartenders.',
};

export default function Informacoes() {
  return <main id="conteudo">
    <section className="page-hero info-hero">
      <div className="eyebrow">INFORMAÇÕES — SERVIÇOS / REGIÕES / EVENTOS</div>
      <h1>Conteúdo para quem<br/><em>está planejando um evento.</em></h1>
      <p>As páginas abaixo preservam o acervo informativo e SEO do site anterior da ShakeUp Bartenders.</p>
    </section>
    <section className="info-index section-pad">
      <div className="info-index-head"><span>{pagesData.length} páginas</span><span>Acervo migrado</span></div>
      <div className="info-links">
        {pagesData.map((page, i) => <Link href={`/${page.contratada}`} key={page.contratada}><small>{String(i+1).padStart(2,'0')}</small><span>{page.palavra}</span><b>↗</b></Link>)}
      </div>
    </section>
  </main>;
}
