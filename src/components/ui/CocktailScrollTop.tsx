"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { settings } from "@/settings/settings";

export default function CocktailScrollTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [visible, setVisible] = useState(false);

  const updateProgress = useCallback(() => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      scrollHeight > 0
        ? Math.min(
            Math.max(scrollTop / scrollHeight, 0),
            1
          )
        : 0;

    targetProgressRef.current = progress;

    setVisible(scrollTop > 80);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    };

    const animate = () => {
      const current = progressRef.current;
      const target = targetProgressRef.current;

      const next =
        current +
        (target - current) * 0.12;

      progressRef.current = next;

      const button = buttonRef.current;

      if (button) {
        button.style.setProperty(
          "--scroll-progress",
          next.toString()
        );
      }

      rafRef.current =
        requestAnimationFrame(animate);
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    rafRef.current =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );

      if (rafRef.current) {
        cancelAnimationFrame(
          rafRef.current
        );
      }
    };
  }, [updateProgress]);

  const scrollToTop = () => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    window.scrollTo({
      top: 0,
      behavior:
        reduceMotion
          ? "auto"
          : "smooth",
    });
  };

  return (
    <div className="floating-actions-stack">

      {/* VOLTAR AO TOPO */}
      <button
        ref={buttonRef}
        type="button"
        className={`cocktail-scroll-top ${
          visible ? "is-visible" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        data-cursor="TOP"
      >
        <span
          className="cocktail-scroll-top__glass"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 100 125"
            role="presentation"
          >
            <defs>
              <clipPath id="cocktailLiquidClip">
                <path
                  d="
                    M18 22
                    L82 22
                    C78 44 68 60 51 68
                    C34 60 24 44 18 22
                    Z
                  "
                />
              </clipPath>

              <linearGradient
                id="cocktailLiquidGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#d8ff21"
                />

                <stop
                  offset="100%"
                  stopColor="#a9d600"
                />
              </linearGradient>
            </defs>

            <g
              clipPath="url(#cocktailLiquidClip)"
            >
              <rect
                className="cocktail-scroll-top__liquid"
                x="15"
                y="20"
                width="70"
                height="50"
                rx="2"
                fill="url(#cocktailLiquidGradient)"
              />

              <path
                className="cocktail-scroll-top__wave"
                d="
                  M10 24
                  C22 19 34 29 46 24
                  C58 19 70 29 90 24
                  L90 34
                  L10 34
                  Z
                "
                fill="rgba(255,255,255,.24)"
              />
            </g>

            <path
              className="cocktail-scroll-top__outline"
              d="
                M18 22
                L82 22
                C78 44 68 60 51 68
                C34 60 24 44 18 22
                Z
              "
            />

            <path
              className="cocktail-scroll-top__rim"
              d="M18 22H82"
            />

            <path
              className="cocktail-scroll-top__outline"
              d="M51 68V101"
            />

            <path
              className="cocktail-scroll-top__outline"
              d="M34 105H68"
            />

            <circle
              className="cocktail-scroll-top__garnish"
              cx="78"
              cy="19"
              r="6"
            />

            <path
              className="cocktail-scroll-top__arrow"
              d="
                M51 57
                V39
                M44 46
                L51 39
                L58 46
              "
            />
          </svg>
        </span>
      </button>


      {/* WHATSAPP */}
      <a
        href={settings.whatsappApi}
        target="_blank"
        rel="nofollow noreferrer"
        className="floating-whatsapp"
        aria-label="Falar pelo WhatsApp"
        data-cursor="CHAT"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M16.04 3C9.43 3 4.06 8.25 4.06 14.71c0 2.07.55 4.09 1.6 5.86L4 26.65l6.28-1.63a12.16 12.16 0 0 0 5.75 1.45h.01c6.6 0 11.98-5.25 11.98-11.71C28.02 8.25 22.65 3 16.04 3Zm0 21.49h-.01a10.1 10.1 0 0 1-5.12-1.39l-.37-.22-3.73.97 1-3.55-.24-.37a9.55 9.55 0 0 1-1.55-5.22c0-5.37 4.49-9.74 10.02-9.74s10.02 4.37 10.02 9.74-4.49 9.78-10.02 9.78Zm5.5-7.3c-.3-.15-1.79-.86-2.07-.96-.28-.1-.48-.15-.68.15-.2.29-.78.96-.96 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.47-.89-.78-1.5-1.74-1.67-2.03-.18-.29-.02-.45.13-.6.14-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.51-.08-.15-.68-1.6-.93-2.19-.25-.59-.5-.5-.68-.51h-.58c-.2 0-.53.07-.81.36-.28.29-1.06 1.01-1.06 2.47 0 1.46 1.09 2.86 1.24 3.06.15.2 2.15 3.2 5.2 4.49.73.31 1.29.49 1.73.63.73.22 1.39.19 1.91.11.58-.08 1.79-.71 2.04-1.4.25-.69.25-1.28.18-1.4-.08-.13-.28-.2-.58-.34Z"
            fill="currentColor"
          />
        </svg>
      </a>

    </div>
  );
}