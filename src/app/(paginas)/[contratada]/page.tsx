import { notFound } from "next/navigation";
import Image from "next/image";
import pagesData from "@/data/pagesData";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ contratada: string }> }): Promise<Metadata> {
  const { contratada } = await params;
  const page = pagesData.find((p) => p.contratada === contratada);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/${page.contratada}` },
    openGraph: { title: page.title, description: page.description, url: `/${page.contratada}`, images: ["/fashion/drinks/background-body.webp"] }
  };
}

export function generateStaticParams() {
  return pagesData.map((page) => ({ contratada: page.contratada }));
}

export default async function Page({ params }: { params: Promise<{ contratada: string }> }) {
  const { contratada } = await params;
  const page = pagesData.find((p) => p.contratada === contratada);
  if (!page) return notFound();
  return <main id="conteudo" className="seo-page">
    <section className="seo-title">
      <div className="eyebrow">FASHION BARTENDERS — SERVIÇOS</div>
      <h1>{page.palavra}</h1>
    </section>
    <section className="seo-layout section-pad">
      <article>
        {page.imageCount > 0 && <figure className="seo-image"><Image src={`/fashion/contratadas/${page.contratada}-01.webp`} alt={page.palavra} width={1200} height={800} /></figure>}
        <div className="seo-content" dangerouslySetInnerHTML={{ __html: page.content }} />
      </article>
      <aside>
        <span>Planejando um evento?</span>
        <p>Converse com a ShakeUp Bartenders sobre estrutura, drinks e atendimento.</p>
        <Link href="/contato">
          Solicitar orçamento ↗
        </Link>
      </aside>
    </section>
  </main>
}
