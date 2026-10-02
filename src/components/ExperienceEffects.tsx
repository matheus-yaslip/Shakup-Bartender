"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ExperienceEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ======================================================
       REVEALS GERAIS
    ====================================================== */

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]"
      )
    );

    let observer: IntersectionObserver | null = null;

    if (reduced) {
      revealEls.forEach((el) => {
        el.dataset.visible = "true";
      });
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element =
              entry.target as HTMLElement;

            element.dataset.visible = "true";

            observer?.unobserve(element);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      revealEls.forEach((el) => {
        observer?.observe(el);
      });
    }

    /* ======================================================
       REVEAL DOS SERVIÇOS
    ====================================================== */

    const serviceRevealEls = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-service-reveal]"
      )
    );

    let serviceObserver: IntersectionObserver | null = null;

    if (reduced) {
      serviceRevealEls.forEach((element) => {
        element.classList.add("is-visible");
      });
    } else {
      serviceObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element =
              entry.target as HTMLElement;

            window.setTimeout(() => {
              element.classList.add(
                "is-visible"
              );
            }, 120);

            serviceObserver?.unobserve(
              element
            );
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -5% 0px",
        }
      );

      serviceRevealEls.forEach((element) => {
        serviceObserver?.observe(element);
      });
    }

    /* ======================================================
       PARALLAX + PROGRESS
    ====================================================== */

    let raf = 0;

    const onScroll = () => {
      if (raf) return;

      raf = requestAnimationFrame(() => {
        document
          .querySelectorAll<HTMLElement>(
            "[data-parallax]"
          )
          .forEach((el) => {
            const speed = Number(
              el.dataset.parallax || "0.05"
            );

            const rect =
              el.getBoundingClientRect();

            const center =
              rect.top +
              rect.height / 2 -
              window.innerHeight / 2;

            el.style.setProperty(
              "--parallax-y",
              `${center *
              speed *
              -1
              }px`
            );
          });

        document
          .querySelectorAll<HTMLElement>(
            "[data-progress]"
          )
          .forEach((el) => {
            const rect =
              el.getBoundingClientRect();

            const progress = Math.min(
              1,
              Math.max(
                0,
                (
                  window.innerHeight -
                  rect.top
                ) /
                (
                  window.innerHeight +
                  rect.height
                )
              )
            );

            el.style.setProperty(
              "--progress",
              String(progress)
            );
          });

        raf = 0;
      });
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      onScroll,
      {
        passive: true,
      }
    );

    /* ======================================================
       CURSOR CUSTOMIZADO
    ====================================================== */

    const cursor =
      document.querySelector<HTMLElement>(
        ".fashion-cursor"
      );

    const move = (e: MouseEvent) => {
      if (!cursor) return;

      cursor.style.transform = `
        translate3d(
          ${e.clientX}px,
          ${e.clientY}px,
          0
        )
        translate(-50%, -50%)
      `;
    };

    const handleMouseOver = (
      e: MouseEvent
    ) => {
      if (!cursor) return;

      const target =
        e.target as HTMLElement;

      const interactiveEl =
        target.closest<HTMLElement>(
          "a, button, [data-cursor]"
        );

      if (!interactiveEl) return;

      const related =
        e.relatedTarget as Node | null;

      /*
        Evita disparar novamente ao passar
        entre filhos do mesmo elemento.
      */
      if (
        related &&
        interactiveEl.contains(related)
      ) {
        return;
      }

      const isLink =
        interactiveEl.matches(
          "a, button"
        );

      const label =
        interactiveEl.dataset.cursor;

      if (isLink) {
        cursor.classList.add(
          "is-link"
        );
      }

      if (label) {
        cursor.dataset.label =
          label;

        cursor.classList.add(
          "has-label"
        );
      }

      cursor.classList.add(
        "is-active"
      );
    };

    const handleMouseOut = (
      e: MouseEvent
    ) => {
      if (!cursor) return;

      const target =
        e.target as HTMLElement;

      const interactiveEl =
        target.closest<HTMLElement>(
          "a, button, [data-cursor]"
        );

      if (!interactiveEl) return;

      const related =
        e.relatedTarget as Node | null;

      if (
        related &&
        interactiveEl.contains(related)
      ) {
        return;
      }

      cursor.classList.remove(
        "is-active",
        "is-link",
        "has-label"
      );

      delete cursor.dataset.label;
    };

    window.addEventListener(
      "mousemove",
      move
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    document.addEventListener(
      "mouseout",
      handleMouseOut
    );

    /* ======================================================
       SHOWCASE — HOVER COM DELAY
    ====================================================== */

    const showcaseItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-showcase-item]"
      )
    );

    const showcaseTimers =
      new Map<
        HTMLElement,
        ReturnType<typeof setTimeout>
      >();

    const showcaseEnter = (
      event: Event
    ) => {
      const element =
        event.currentTarget as HTMLElement;

      /*
        Remove timer anterior caso exista.
      */
      const oldTimer =
        showcaseTimers.get(element);

      if (oldTimer) {
        clearTimeout(oldTimer);
      }

      const timer = setTimeout(() => {
        const track =
          element.closest<HTMLElement>(
            ".horizontal-track"
          );

        if (!track) return;

        /*
          Limpa outro item destacado
          antes de destacar o atual.
        */
        track
          .querySelectorAll(
            ".is-focused"
          )
          .forEach((item) => {
            item.classList.remove(
              "is-focused"
            );
          });

        track.classList.add(
          "has-focused-item"
        );

        element.classList.add(
          "is-focused"
        );
      }, 1000);

      showcaseTimers.set(
        element,
        timer
      );
    };

    const showcaseLeave = (
      event: Event
    ) => {
      const element =
        event.currentTarget as HTMLElement;

      const timer =
        showcaseTimers.get(element);

      if (timer) {
        clearTimeout(timer);

        showcaseTimers.delete(
          element
        );
      }

      const track =
        element.closest<HTMLElement>(
          ".horizontal-track"
        );

      element.classList.remove(
        "is-focused"
      );

      if (track) {
        track.classList.remove(
          "has-focused-item"
        );
      }
    };

    showcaseItems.forEach((element) => {
      element.addEventListener(
        "mouseenter",
        showcaseEnter
      );

      element.addEventListener(
        "mouseleave",
        showcaseLeave
      );
    });

    /* ======================================================
       COMPANY COLLAGE — SCROLL SHAKE
    ====================================================== */

    const companyPhotos = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-company-shake]"
      )
    );

    let previousScrollY =
      window.scrollY;

    let companyShakeRaf = 0;

    let companyResetTimer: number | undefined;

    const resetCompanyPhotos = () => {
      companyPhotos.forEach(
        (photo) => {
          photo.style.setProperty(
            "--company-shake-y",
            "0px"
          );

          photo.style.setProperty(
            "--company-shake-r",
            "0deg"
          );
        }
      );
    };

    const updateCompanyShake = () => {
      const currentScrollY =
        window.scrollY;

      const delta =
        currentScrollY -
        previousScrollY;

      previousScrollY =
        currentScrollY;

      /*
        Evita movimentos exagerados
        quando o usuário gira muito
        rapidamente o scroll.
      */
      const limitedDelta =
        Math.max(
          -18,
          Math.min(
            18,
            delta
          )
        );

      companyPhotos.forEach(
        (photo, index) => {
          const strength =
            Math.abs(
              Number(
                photo.dataset
                  .companyShake ||
                "0.008"
              )
            );

          const direction =
            index % 2 === 0
              ? 1
              : -1;

          /*
            Movimento vertical bastante
            discreto.
          */
          const y =
            limitedDelta *
            strength *
            14 *
            direction;

          /*
            Rotação ainda mais discreta.
          */
          const rotate =
            limitedDelta *
            strength *
            0.08 *
            direction;

          photo.style.setProperty(
            "--company-shake-y",
            `${y}px`
          );

          photo.style.setProperty(
            "--company-shake-r",
            `${rotate}deg`
          );
        }
      );

      /*
        Cancela o reset anterior.
      */
      if (companyResetTimer) {
        window.clearTimeout(
          companyResetTimer
        );
      }

      /*
        Depois que a rolagem para,
        as fotos retornam suavemente
        para a posição original.
      */
      companyResetTimer =
        window.setTimeout(() => {
          resetCompanyPhotos();
        }, 120);

      companyShakeRaf = 0;
    };

    const onCompanyShakeScroll =
      () => {
        if (
          reduced ||
          companyPhotos.length === 0
        ) {
          return;
        }

        if (companyShakeRaf) {
          return;
        }

        companyShakeRaf =
          requestAnimationFrame(
            updateCompanyShake
          );
      };

    if (
      !reduced &&
      companyPhotos.length > 0
    ) {
      window.addEventListener(
        "scroll",
        onCompanyShakeScroll,
        {
          passive: true,
        }
      );
    } else {
      resetCompanyPhotos();
    }

    /* ======================================================
       CLEANUP
    ====================================================== */

    return () => {
      /* observers */

      observer?.disconnect();

      serviceObserver?.disconnect();

      /* scroll / resize */

      window.removeEventListener(
        "scroll",
        onScroll
      );

      window.removeEventListener(
        "resize",
        onScroll
      );

      /* cursor */

      window.removeEventListener(
        "mousemove",
        move
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mouseout",
        handleMouseOut
      );

      /* showcase */

      showcaseItems.forEach(
        (element) => {
          element.removeEventListener(
            "mouseenter",
            showcaseEnter
          );

          element.removeEventListener(
            "mouseleave",
            showcaseLeave
          );
        }
      );

      showcaseTimers.forEach(
        (timer) => {
          clearTimeout(timer);
        }
      );

      showcaseTimers.clear();

      /* company collage */

      window.removeEventListener(
        "scroll",
        onCompanyShakeScroll
      );

      if (companyResetTimer !== undefined) {
        window.clearTimeout(
          companyResetTimer
        );
      }

      if (companyShakeRaf) {
        cancelAnimationFrame(
          companyShakeRaf
        );
      }

      resetCompanyPhotos();

      /* raf principal */

      if (raf) {
        cancelAnimationFrame(
          raf
        );
      }
    };
  }, [pathname]);

  return (
    <div
      className="fashion-cursor"
      aria-hidden="true"
    />
  );
}