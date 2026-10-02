"use client";

import { useEffect } from "react";


export default function FloatingActions() {
  useEffect(() => {
    const root = document.documentElement;

    const updateProgress = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollHeight > 0
          ? Math.min(
              1,
              Math.max(
                0,
                scrollTop / scrollHeight
              )
            )
          : 0;

      root.style.setProperty(
        "--page-progress",
        String(progress)
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="floating-actions"
      aria-label="Ações rápidas"
    >
      <button
        className="cocktail-top-button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
        type="button"
      >
        <span className="cocktail-glass">
          <span className="cocktail-liquid" />

          <span className="cocktail-glass-line cocktail-glass-left" />
          <span className="cocktail-glass-line cocktail-glass-right" />

          <span className="cocktail-stem" />
          <span className="cocktail-base" />

          <span className="cocktail-garnish" />
        </span>

        <span className="cocktail-arrow">
          ↑
        </span>
      </button>

      <a
        className="floating-whatsapp"
        href="https://wa.me/55SEUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        title="WhatsApp"
      >
        <span>W</span>
      </a>
    </div>
  );
}