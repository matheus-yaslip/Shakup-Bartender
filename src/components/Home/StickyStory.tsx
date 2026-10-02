"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    number: "01",
    title: "Estrutura",
    eyebrow: "ESTRUTURA / SERVIÇO",
    text: "Estrutura, insumos e organização pensados para que o bar deixe de ser apenas apoio e passe a fazer parte da experiência do evento.",
    image: "/bar/bar-1.jpg",
    alt: "Estrutura de bar da ShakeUp Bartenders",
  },
  {
    number: "02",
    title: "Presença",
    eyebrow: "EVENTOS / PRESENÇA",
    text: "Atendimento próximo, apresentação cuidadosa e uma equipe preparada para acompanhar o ritmo e a atmosfera de cada ocasião.",
    image: "/bar/bar-2.jpg",
    alt: "Evento atendido pela ShakeUp Bartenders",
  },
  {
    number: "03",
    title: "Coquetelaria",
    eyebrow: "COQUETELARIA / DETALHE",
    text: "Drinks clássicos e contemporâneos preparados com atenção à execução, aos ingredientes e principalmente à apresentação.",
    image: "/bar/bar-3.jpg",
    alt: "Drink preparado pela ShakeUp Bartenders",
  },
];

export default function StickyStory() {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.45,
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="story-scroll">
      <div className="story-scroll-heading">
        <span>02 — EM CENA</span>

        <h2>
          O bar como
          <br />
          <em>parte da experiência.</em>
        </h2>
      </div>

      <div className="story-scroll-layout">

        <div className="story-sticky-media">
          <div
            className="story-image-stage"
            data-cursor="EXPLORE"
          >
            {items.map((item, index) => (
              <div
                key={item.image}
                className={`story-image ${
                  activeIndex === index ? "is-active" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  priority={index === 0}
                />
              </div>
            ))}

            <div className="story-image-index">
              <span>0{activeIndex + 1}</span>
              <span>0{items.length}</span>
            </div>
          </div>
        </div>

        <div className="story-scroll-content">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`story-scroll-item ${
                activeIndex === index ? "is-active" : ""
              }`}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
            >
              <div className="story-item-top">
                <span>{item.number}</span>
                <small>{item.eyebrow}</small>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="story-progress">
                <span />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}