"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../styles/EditorialCollageSection.module.scss";

const SHAKE_INTENSITY = 0.55; // deslocamento geral
const ROTATION_INTENSITY = 0.18; // rotação extra no scroll
const SCALE_INTENSITY = 0.0025; // scale sutil
const DELTA_CLAMP = 14; // limite do impacto do scroll
const LERP = 0.08; // suavidade da volta

type PhotoItem = {
  src: string;
  alt: string;
  x: string;
  y: string;
  w: string;
  h: string;
  r: string;
  z: number;
  mx: number;
  my: number;
  mr: number;
};

type SectionItem = {
  title: string;
  body: string;
  copyOffset?: string;
  photos: PhotoItem[];
};

const sections: SectionItem[] = [
  {
    title:
      "Uma alquimia de sabores, serviço e personalidade.",
    body:
      "A ShakeUp Bartenders é especializada na prestação de serviços de bar e bebidas para os mais diversos tipos de eventos. Nosso repertório vai dos clássicos aos drinks contemporâneos, passando por combinações personalizadas criadas para transformar cadaocasião em uma experiência única.",

    copyOffset: "2.4rem",
    photos: [
      {
        src: "/empresa/empresa-1.jpg",
        alt: "DJ e ambiente noturno",
        x: "4%",
        y: "2%",
        w: "52%",
        h: "45%",
        r: "-2deg",
        z: 2,
        mx: 0.6,
        my: 1.1,
        mr: 0.22,
      },
      {
        src: "/empresa/empresa-2.jpg",
        alt: "Pessoas sentadas em ambiente intimista",
        x: "34%",
        y: "7%",
        w: "48%",
        h: "40%",
        r: "-8deg",
        z: 3,
        mx: 0.9,
        my: 0.8,
        mr: 0.28,
      },
      {
        src: "/empresa/empresa-3.jpg",
        alt: "Drinks sobre a mesa",
        x: "-1%",
        y: "49%",
        w: "38%",
        h: "33%",
        r: "0deg",
        z: 1,
        mx: 0.75,
        my: 0.95,
        mr: 0.18,
      },
      {
        src: "/empresa/empresa-4.jpg",
        alt: "Lounge com iluminação vermelha",
        x: "31%",
        y: "50%",
        w: "48%",
        h: "34%",
        r: "0deg",
        z: 2,
        mx: 0.55,
        my: 1.15,
        mr: 0.16,
      },
    ],
  },
  {
    title:
      "Mais do que servir, criamos experiências. Estamos sempre atentos às novas tendências do mercado, buscando novas possibilidades de sabores, apresentações e formas de receber.",
    body:
      "Tudo isso sem perder aquilo que faz parte da nossa essência: qualidade, carisma, espontaneidade e uma equipe preparada para fazer parte do momento.",
    copyOffset: "4.8rem",
    photos: [
      {
        src: "/empresa/empresa-5.jpg",
        alt: "Pessoa segurando drink",
        x: "-2%",
        y: "2%",
        w: "35%",
        h: "36%",
        r: "-8deg",
        z: 3,
        mx: 0.8,
        my: 1,
        mr: 0.25,
      },
      {
        src: "/empresa/empresa-6.jpg",
        alt: "Toca-discos e vinil",
        x: "24%",
        y: "-1%",
        w: "48%",
        h: "38%",
        r: "9deg",
        z: 2,
        mx: 0.5,
        my: 0.95,
        mr: 0.21,
      },
      {
        src: "/empresa/empresa-7.jpg",
        alt: "Corredor interno do bar",
        x: "-3%",
        y: "52%",
        w: "35%",
        h: "39%",
        r: "0deg",
        z: 1,
        mx: 0.7,
        my: 1.05,
        mr: 0.17,
      },
      {
        src: "/empresa/empresa-8.jpg",
        alt: "Pessoa em ambiente com luz âmbar",
        x: "29%",
        y: "47%",
        w: "43%",
        h: "40%",
        r: "7deg",
        z: 3,
        mx: 0.9,
        my: 0.9,
        mr: 0.3,
      },
    ],
  },
];

export default function EditorialCollageSection() {
  const motionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let raf = 0;
    let previousY = window.scrollY;
    let target = 0;
    let current = 0;

    const update = () => {
      current += (target - current) * LERP;
      target *= 0.9;

      motionRefs.current.forEach((node) => {
        if (!node) return;

        const mx = Number(node.dataset.mx || 0.6);
        const my = Number(node.dataset.my || 1);
        const mr = Number(node.dataset.mr || 0.2);

        const tx = current * mx * SHAKE_INTENSITY;
        const ty = current * my * SHAKE_INTENSITY;
        const rr = current * mr * ROTATION_INTENSITY;
        const sc = 1 + Math.abs(current) * SCALE_INTENSITY;

        node.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rr}deg) scale(${sc})`;
      });

      raf = requestAnimationFrame(update);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - previousY;
      previousY = y;

      target += delta;
      if (target > DELTA_CLAMP) target = DELTA_CLAMP;
      if (target < -DELTA_CLAMP) target = -DELTA_CLAMP;
    };

    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className={styles.editorialSection}>
      <div className={styles.editorialInner}>
        {sections.map((section, sectionIndex) => (
          <article className={styles.editorialBlock} key={sectionIndex}>
            <div className={styles.collage}>
              {section.photos.map((photo, photoIndex) => {
                const refIndex = sectionIndex * 10 + photoIndex;

                return (
                  <figure
                    key={`${sectionIndex}-${photoIndex}`}
                    className={styles.photo}
                    style={
                      {
                        "--x": photo.x,
                        "--y": photo.y,
                        "--w": photo.w,
                        "--h": photo.h,
                        "--r": photo.r,
                        "--z": photo.z,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className={styles.photoMotion}
                      ref={(el) => {
                        if (el) motionRefs.current[refIndex] = el;
                      }}
                      data-mx={photo.mx}
                      data-my={photo.my}
                      data-mr={photo.mr}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 42vw"
                      />
                    </div>
                  </figure>
                );
              })}
            </div>

            <div
              className={styles.copy}
              style={
                {
                  "--copyOffset": section.copyOffset || "0rem",
                } as React.CSSProperties
              }
            >
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}