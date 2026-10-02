"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["/", "Início"],
  ["/empresa", "Empresa"],
  ["/cardapio", "Cardápio"],
  ["/galeria", "Galeria"],
  ["/contato", "Contato"],
];

export default function Topo() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      onResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        onResize
      );
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add(
        "menu-is-open"
      );
    } else {
      document.body.classList.remove(
        "menu-is-open"
      );
    }

    return () => {
      document.body.classList.remove(
        "menu-is-open"
      );
    };
  }, [open]);

  return (
    <header
      className={[
        "fashion-header",
        compact && !open
          ? "is-compact"
          : "",
        open
          ? "menu-open"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        href="/"
        className="brand"
        aria-label="Fashion Bartenders - início"
      >
        <Image
          src="/Logo/logo-bg-1.png"
          alt="Fashion Bartenders"
          width={90}
          height={80}
          priority
        />
      </Link>

      <nav
        className="desktop-nav"
        aria-label="Navegação principal"
      >
        {nav.map(([href, label]) => (
          <Link
            className={
              pathname === href
                ? "active"
                : ""
            }
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link
        className="header-cta magnetic"
        href="/contato"
      >
        Solicitar orçamento
        <span>↗</span>
      </Link>

      <button
        className={`menu-trigger ${
          open ? "is-open" : ""
        }`}
        onClick={() => setOpen(
          (value) => !value
        )}
        aria-expanded={open}
        aria-label={
          open
            ? "Fechar menu"
            : "Abrir menu"
        }
        type="button"
      >
        <span className="menu-trigger-text">
          <span className="menu-text-menu">
            MENU
          </span>

          <span className="menu-text-close">
            FECHAR
          </span>
        </span>

        <span className="menu-trigger-icon">
          <i />
          <i />
        </span>
      </button>

      <div
        className={`menu-overlay ${
          open ? "open" : ""
        }`}
        aria-hidden={!open}
      >
        <div className="menu-index">
          FB / 26
        </div>

        <nav>
          {nav.map(
            ([href, label], index) => (
              <Link
                key={href}
                href={href}
                style={{
                  "--menu-delay":
                    `${0.08 + index * 0.06}s`,
                } as React.CSSProperties}
              >
                <small>
                  0{index + 1}
                </small>

                {label}
              </Link>
            )
          )}
        </nav>

        <p>
          Coquetelaria, serviço e presença
          para eventos que pedem outra
          atmosfera.
        </p>
      </div>
    </header>
  );
}