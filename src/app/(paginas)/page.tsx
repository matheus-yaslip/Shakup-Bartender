import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import StickyStory from "@/components/Home/StickyStory";
import AnimatedStats from "@/components/Home/AnimatedStats";
import EventTypesSection from "@/components/Home/EventTypesSection";
import HomeClosingSection from "@/components/ui/HomeClosingSection";

export const metadata: Metadata = {
  title: "Bartenders e serviço de bar para eventos",
  description: "Fashion Bartenders: coquetelaria, bartenders e estrutura de bar para eventos sociais e corporativos em São Paulo.",
};

// const stats = [["+18", "anos de experiência"], ["+10 mil", "eventos realizados"], ["+100 mil", "pessoas satisfeitas"]];
const gallery = ["img1.webp", "img2.webp", "img3.webp", "img4.webp", "img5.webp", "img8.webp"];

const showcaseItems = [
  "detalhes-1.jpg",
  "detalhes-3.jpg",
  "detalhes-2.jpg",
  "detalhes-4.jpg",
];


export default function Home() {
  return (
    <main id="conteudo">
      <section className="hero">
        <div className="hero-media" data-parallax="0.025">
          <video autoPlay muted loop playsInline poster="/" aria-label="Fashion Bartenders em evento">
            <source src="/fashion/video/banner.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-shade" />
        <div className="hero-topline">SÃO PAULO — SERVIÇO DE BAR PARA EVENTOS</div>
        <div className="hero-content">
          <p data-reveal>Coquetelaria • serviço • presença</p>
          <h1 className="hero-title" aria-label="Fashion Bartenders">
            <span className="hero-title-line">
              {"ShakeUp".split("").map((letter, index) => (
                <span className="hero-letter-mask" key={`fashion-${index}`}>
                  <span
                    className="hero-letter"
                    style={
                      {
                        "--letter-delay": `${index * 0.055}s`,
                      } as CSSProperties
                    }
                  >
                    {letter}
                  </span>
                </span>
              ))}
            </span>

            <span className="hero-title-line hero-title-accent">
              {"Bartenders".split("").map((letter, index) => (
                <span className="hero-letter-mask" key={`bartenders-${index}`}>
                  <span
                    className="hero-letter"
                    style={
                      {
                        "--letter-delay": `${0.35 + index * 0.055}s`,
                      } as CSSProperties
                    }
                  >
                    {letter}
                  </span>
                </span>
              ))}
            </span>
          </h1>
          <div className="hero-bottom" data-reveal>
            <span>Uma experiência de bar pensada para acompanhar o ritmo, a estética e a energia de cada evento.</span>
            <Link
              href="/contato"
              className="text-link hero-event-link"
              data-cursor="LET'S GO"
            >
              Planejar meu evento <b>↗</b>
            </Link>
          </div>
        </div>
        <div className="scroll-cue">SCROLL <i /></div>
      </section>




      <section className="manifesto section-pad">
        <div
          className="eyebrow manifesto-reveal manifesto-reveal-1"
          data-reveal
        >
          01 — A EXPERIÊNCIA
        </div>

        <div className="manifesto-editorial">
          <div
            className="manifesto-title manifesto-reveal manifesto-reveal-2"
            data-reveal
          >
            <h2>
              Não servimos <br />
              apenas <em>drinks.</em> <br />
              <em>Criamos</em> atmosfera <br />
              para eventos <br />
              <em>memoráveis.</em>
            </h2>
          </div>

          <div
            className="manifesto-content manifesto-reveal manifesto-reveal-3"
            data-reveal
          >
            <p>
              A ShakeUp Bartenders é especializada na prestação de serviços
              de bar e bebidas para diferentes tipos de eventos. A equipe
              combina cordialidade, profissionalismo e repertório para preparar
              coquetéis clássicos, contemporâneos, com ou sem álcool.
            </p>

            <p>
              O cardápio pode ser personalizado conforme o paladar e a proposta
              de cada cliente, com atenção à apresentação, qualidade dos produtos
              e fluidez do atendimento.
            </p>

            <Link href="/empresa" className="text-link dark" data-cursor="LET'S GO">
              Conhecer a Fashion <b>→</b>
            </Link>
          </div>
        </div>
      </section>



      <StickyStory />
      <AnimatedStats />

      <section className="services-editorial section-pad">
        <div className="services-head">
          <div className="eyebrow" data-reveal>
            03 — SERVIÇOS
          </div>

          <h2 data-reveal>
            Feito para eventos que
            <br />
            não querem passar despercebidos.
          </h2>
        </div>

        <div className="service-blocks">
          {[
            [
              "Bartenders",
              "Serviço profissional de bar e coquetelaria para eventos.",
              "/bar/servico-1.jpg",
            ],
            [
              "Drinks personalizados",
              "Combinações clássicas, contemporâneas e criações alinhadas ao evento.",
              "/bar/servico-2.jpg",
            ],
            [
              "Eventos sociais",
              "Casamentos, aniversários, formaturas, festivais e celebrações.",
              "/bar/servico-3.jpg",
            ],
            [
              "Eventos corporativos",
              "Atendimento e estrutura para ativações, confraternizações e encontros empresariais.",
              "/bar/servico-4.jpg",
            ],
          ].map(([title, text, image], i) => (

            <article
              className={`service-block-item service-block-item-${i + 1}`}
              key={title}
              data-service-reveal
            >

              <div className="service-block-info">
                <div className="service-index">
                  <span>{i + 1}.</span>
                  <div className="service-line" />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>
              </div>

              <div
                className="service-block-media"
                data-direction={i % 2 === 0 ? "from-left" : "from-right"}
                data-cursor="VIEW"
              >
                <div className="service-media-inner">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


     <EventTypesSection />



      <section className="horizontal-showcase">
        <div className="horizontal-head">
          <span>05 — DETALHES</span>

          {/* <h2>
      Uma experiência
      <br />
      vista de perto.
    </h2> */}
        </div>

        <div className="horizontal-marquee">
          <div className="horizontal-track">

            {[0, 1].map((group) => (
              <div
                className="horizontal-group"
                key={group}
                aria-hidden={group === 1 ? "true" : undefined}
              >
                {showcaseItems.map((src, i) => (
                  <figure
                    key={`${group}-${src}`}
                    data-cursor="VIEW"
                    data-showcase-item
                  >
                    <Image
                      src={`/bar/${src}`}
                      alt={
                        group === 0
                          ? `Detalhe da coquetelaria ShakeUp Bartenders ${i + 1}`
                          : ""
                      }
                      fill
                      sizes="32vw"
                      data-cursor="VIEW"
                    />

                    <figcaption>
                      0{i + 1} / ShakeUp Bartenders
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}

          </div>
        </div>
      </section>




      <section className="menu-teaser">
        <div className="menu-photo menu-video" data-parallax="0.035">
          <video autoPlay muted loop playsInline poster="/fashion/drinks/drink-2.webp" aria-label="Preparo de drink  ShakeUp Bartenders">
            <source src="/fashion/video/drink.mp4" type="video/mp4" />
          </video>
        </div>


        <div className="menu-copy menu-copy-sticky" data-parallax="-0.018">
          <div className="eyebrow" data-reveal>
            06 — CARDÁPIO
          </div>

          <h2 data-reveal>
            Do zero álcool
            <br />
            ao <em>diamante.</em>
          </h2>

          <p data-reveal>
            Soft, Bronze, Prata, Ouro e Diamante: diferentes propostas para adaptar a experiência de bebidas ao perfil do evento.
          </p>

          <Link
            href="/cardapio"
            className="pill-link"
            data-cursor="LET'S GO"
          >
            EXPLORAR CARDÁPIO
            <span>↗</span>
          </Link>
        </div>


      </section>

      <section className="gallery-preview section-pad">
        <div className="eyebrow" data-reveal>07 — GALERIA</div>
        <div className="gallery-title"><Link href="/galeria" data-cursor="LET'S GO">Ver galeria completa ↗</Link></div>
        <div className="preview-grid preview-grid-six">
          {gallery.map((src, i) => <figure key={src} className={`g${i + 1}`} data-reveal data-cursor="VIEW"><Image src={`/galeria1/${src}`} alt={`Galeria  ShakeUp Bartenders ${i + 1}`} fill sizes="(max-width:700px) 100vw, 40vw" /></figure>)}
        </div>
      </section>


 

      <HomeClosingSection />


 
    </main>
  );
}
