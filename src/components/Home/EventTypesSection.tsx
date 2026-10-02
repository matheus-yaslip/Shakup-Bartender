"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  video: string;
  captions: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Festas & Casamentos",
    description:
      "Transforme seu casamento ou festa em uma celebração inesquecível com os serviços de bartender da ShakeUp Bartenders.",
    image: "/img/img1.jpg",

    // TROQUE AQUI PELO VÍDEO FINAL
    video: "/fashion/video/drink.mp4",

    captions: [
      "Celebrações memoráveis",
      "Drinks preparados ao vivo",
      "Experiência sob medida",
    ],
  },

  {
    number: "02",
    title: "Eventos Corporativos",
    description:
      "Destaque eventos corporativos com o toque de classe e profissionalismo dos serviços de bartender da ShakeUp Bartenders.",
    image: "/img/img2.jpg",

    // TROQUE AQUI PELO VÍDEO FINAL
    video: "/fashion/video/drink.mp4",

    captions: [
      "Elegância nos detalhes",
      "Serviço profissional",
      "Experiências para sua marca",
    ],
  },

  {
    number: "03",
    title: "Eventos Personalizados",
    description:
      "Surpreenda seus convidados com experiências personalizadas por meio dos serviços exclusivos de bartender da ShakeUp Bartenders.",
    image: "/img/img3.jpg",

    // TROQUE AQUI PELO VÍDEO FINAL
    video: "/fashion/video/drink.mp4",

    captions: [
      "Conceitos exclusivos",
      "Cardápios personalizados",
      "Cada evento, uma atmosfera",
    ],
  },
];

export default function EventTypesSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeTouchCard, setActiveTouchCard] = useState<number | null>(null);

  const isDesktopHover = () => {
    if (typeof window === "undefined") return false;

    return window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
  };

  const playVideo = async (index: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    try {
      video.currentTime = 0;
      await video.play();
    } catch {
      // Evita erro caso o navegador bloqueie o play
    }
  };

  const stopVideo = (index: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.pause();

    // pequeno atraso para a transição terminar
    window.setTimeout(() => {
      if (video.paused) {
        video.currentTime = 0;
      }
    }, 500);
  };

  const handleMouseEnter = (index: number) => {
    if (!isDesktopHover()) return;

    playVideo(index);
  };

  const handleMouseLeave = (index: number) => {
    if (!isDesktopHover()) return;

    stopVideo(index);
  };

  const handleCardClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    if (isDesktopHover()) return;

    /*
     * Não interfere no clique do botão/link.
     */
    const target = event.target as HTMLElement;

    if (target.closest("a")) {
      return;
    }

    /*
     * Se clicar novamente no card ativo,
     * retorna para a imagem.
     */
    if (activeTouchCard === index) {
      stopVideo(index);
      setActiveTouchCard(null);
      return;
    }

    /*
     * Desliga o vídeo anterior.
     */
    if (activeTouchCard !== null) {
      stopVideo(activeTouchCard);
    }

    setActiveTouchCard(index);
    playVideo(index);
  };

  return (
    <section className="event-types section-pad">
      <div className="event-types-intro">
        <div className="eyebrow" data-reveal>
          04 — FORMATOS DE EVENTO
        </div>

        <div className="event-types-head">
          <h2 className="title-event">
            Um serviço pensado para
            <br />
            <em>cada tipo de celebração.</em>
          </h2>

          <p className="text-event">
            Do encontro mais intimista às grandes celebrações, criamos
            experiências de bar que acompanham a atmosfera, o público e a
            identidade de cada evento.
          </p>
        </div>
      </div>

      <div className="event-type-grid">
        {services.map((service, index) => {
          const isTouchActive = activeTouchCard === index;

          return (
            <article
              className={`event-type-card ${
                isTouchActive ? "is-active" : ""
              }`}
              key={service.title}
              data-reveal
              data-cursor="VIEW"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={(event) => handleCardClick(event, index)}
            >
              <div className="event-type-media">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="
                    (max-width: 700px) 100vw,
                    (max-width: 1100px) 50vw,
                    33vw
                  "
                  className="event-type-img"
                />

                <video
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  src={service.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="event-type-video"
                />

                <div className="event-type-overlay" />

                <div className="event-type-hover-copy">
                  {service.captions.map((caption, captionIndex) => (
                    <span
                      key={caption}
                      style={
                        {
                          "--caption-index": captionIndex,
                        } as React.CSSProperties
                      }
                    >
                      {caption}
                    </span>
                  ))}
                </div>
              </div>

              <div className="event-type-copy">
                <span className="event-type-number">
                  {service.number}
                </span>

                <div className="event-type-main">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <Link
                  href="/contato"
                  className="event-type-cta"
                  aria-label={`Solicitar orçamento para ${service.title}`}
                  data-cursor="LET'S GO"
                >
                  <span>Solicitar orçamento</span>

                  <span className="event-type-arrow">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}