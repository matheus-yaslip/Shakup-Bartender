"use client";

import { useEffect, useRef, } from "react";
import Link from "next/link";
import Image from "next/image";
import { url, settings } from "@/settings/settings";
import { usePathname } from "next/navigation";

export default function Rodape() {
  const imageRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const { selosDark } = settings;
  const pathname = usePathname();
  const urlFormatted = url.replace(/\/$/, "");
  const fullUrl = `${urlFormatted}${pathname}`;


  const contactRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contactRowRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Efeito Parallax Suave (Sacudida/Parallax na foto ao rolar o scroll)
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!newsletterRef.current || !imageRef.current) return;

      const rect = newsletterRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Verifica se a seção da newsletter está visível na tela
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calcula o scroll relativo em relação ao centro da tela
        const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
        // Fator de movimento sutil e suave
        const translateY = centerDistance * 0.06;

        imageRef.current.style.transform = `scale(1.1) translateY(${translateY}px)`;
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // executa na inicialização

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  return (
    <footer className="cocktail-footer">
      {/* ================= SEÇÃO SUPERIOR: NEWSLETTER ================= */}
      <div className="newsletter-section" ref={newsletterRef} data-reveal>
        {/* Lado Esquerdo: Foto com Frase e Linha Animada */}
        <div className="newsletter-card image-card">
          <div className="image-wrapper">
            <div className="parallax-img" ref={imageRef}>
              <Image
                src="/bar/rodape.jpg" // Altere para o caminho da sua imagem
                alt="Saiba mais sobre nós"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <div className="image-overlay">
            <h3 className="newsletter-title">
              <span>Saiba mais sobre nós</span>
              <span className="animated-underline"></span>
            </h3>
          </div>
        </div>

        {/* Lado Direito: Formulário da Newsletter */}
        <div className="newsletter-card form-card">
          <p className="newsletter-description" data-reveal>
            Um atendimento pensado para transformar cada detalhe em parte da experiência.
          </p>

          <div
            ref={contactRowRef}
            className="newsletter-contact-row"
            data-reveal
          >
            <span className="newsletter-contact-label">
              FALE COM A GENTE
            </span>

            <Link
              href="/contato"
              className="newsletter-contact-link"
              data-cursor="LET'S GO"
            >
              Ir para contato
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= SEÇÃO INTERMEDIÁRIA: BRANDING E LINKS ================= */}
      <div className="footer-main-content">
        {/* Lado Esquerdo: Logo em Texto / Tipografia */}
        <div className="brand-logo-container">
          <Image
            src="/Logo/logo-rodape-bg.png"
            alt="ShakeUp"
            width={700}
            height={200}
            className="brand-logo-image"
          />
        </div>


        {/* Lado Direito: Grid de Links */}
        <div className="links-grid">
          <div className="links-col">
            <Link href="/cardapio">Receitas - Para beber</Link>
            <Link href="/cardapio">Melhores Drinks - Para comer</Link>
            <Link href="/galeria">Fotos</Link>
            <Link href="/empresa">Para ler</Link>
          </div>

          <div className="links-col">
            <Link href="/empresa">Soft - Sem Alcool</Link>
            <Link href="/cardapio">Cocktails - Amor Líquido</Link>
            <Link href="/empresa">Bronze - Caipirinhas </Link>
            <Link href="/empresa">Prata - Ampliação de sabores</Link>
            <Link href="/empresa">Ouro - Experência Premium</Link>
            <Link href="/servicos">Serviços</Link>
          </div>

          <div className="links-col">
            <Link href="/empresa">Sobre</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/termos">Condições de utilização</Link>
            <Link href="/privacidade">Política de Privacidade</Link>
          </div>
        </div>
      </div>

      {/* ================= SEÇÃO INFERIOR: SELOS & YASLIP ================= */}
      <div className="bottomRowFooter">
        <div className="copyright-info">
          © {new Date().getFullYear()} ShakeUp Bartenders — Todos os direitos reservados.
        </div>

        <div className="footerSelos">
          <div className="logoYaslip">
            <object
              data={`/selos/${selosDark ? "selo- branco.svg" : "selo-preto.svg"
                }`}
              type="image/svg+xml"
            ></object>
          </div>
          <ul>
            <li>
              <Link
                href={`http://validator.w3.org/check?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C HTML Validator"
                  src={`/selos/${selosDark ? "w3c-html-preto.webp" : "w3c-html.webp"
                    }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`http://jigsaw.w3.org/css-validator/validator?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C CSS Validator"
                  src={`/selos/${selosDark ? "w3c-css-preto.webp" : "w3c-css.webp"
                    }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`https://developers.google.com/speed/pagespeed/insights/?url=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="Google PageSpeed"
                  src={`/selos/${selosDark ? "pagespeed-preto.webp" : "pagespeed.webp"
                    }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              {typeof window !== "undefined" &&
                window.location.protocol === "https:" && (
                  <Link
                    href={`https://www.sslshopper.com/ssl-checker.html#hostname=${fullUrl}`}
                    target="_blank"
                  >
                    <Image
                      alt="SSL"
                      src={`/selos/${selosDark ? "ssl-preto.webp" : "ssl.webp"
                        }`}
                      width={40}
                      height={60}
                    />
                  </Link>
                )}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}