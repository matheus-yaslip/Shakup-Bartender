import ContactForm from "@/components/ContactForm/ContactForm";
import { settings } from "@/settings/settings";
import type { Metadata } from "next";

// import "@/styles/contato.scss";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a ShakeUp Bartenders e solicite informações ou orçamento para seu evento.",
};

export default function Contato() {
  const telefoneLimpo = settings.numeroTelefone.replace(/\D/g, "");

  return (
    <main id="conteudo" className="contact-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="contact-hero">

        <div className="contact-hero__label" data-reveal>
          <span className="contact-dot" />

          <span>
            CONTATO — VAMOS CONVERSAR
          </span>
        </div>


        <div className="contact-hero__title">

          <h1 data-reveal>
            Seu evento começa
            <br />

            <em>
              antes do primeiro drink.
            </em>
          </h1>

        </div>


        <div className="contact-hero__aside" data-reveal>

          <span className="contact-index">
            01 / 03
          </span>

          <p>
            Conte um pouco sobre o evento.
            O restante da experiência começa
            a partir dessa conversa.
          </p>

        </div>


        <div
          className="contact-glass"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 300 390"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 62H246C238 141 198 190 150 216C102 190 62 141 54 62Z"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M150 216V305"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M103 334H197"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M73 104C112 116 188 116 227 104"
              stroke="currentColor"
              strokeWidth="1.5"
            />

            <path
              d="M213 37L171 112"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              cx="216"
              cy="39"
              r="18"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

      </section>


      {/* =====================================================
          CONTATO + FORMULÁRIO
      ====================================================== */}

      <section className="contact-workspace">

        <div className="contact-information">

          <div className="contact-information__top">

            <span className="contact-section-number">
              02
            </span>

            <p>
              Você traz a ocasião.
              <br />
              <em>Nós pensamos a experiência.</em>
            </p>

          </div>


          <div className="contact-direct">

            <a
              href={`tel:+55${settings.ddd}${telefoneLimpo}`}
              data-cursor="CALL"
            >
              <span className="contact-direct__label">
                Telefone
              </span>

              <strong>
                ({settings.ddd}) {settings.numeroTelefone}
              </strong>

              <span
                className="contact-direct__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>


            <a
              href={`mailto:${settings.email}`}
              data-cursor="MAIL"
            >
              <span className="contact-direct__label">
                E-mail
              </span>

              <strong>
                {settings.email}
              </strong>

              <span
                className="contact-direct__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>


            <a
              href={settings.whatsappApi}
              target="_blank"
              rel="noreferrer"
              data-cursor="CHAT"
            >
              <span className="contact-direct__label">
                WhatsApp
              </span>

              <strong>
                Iniciar conversa
              </strong>

              <span
                className="contact-direct__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

          </div>


          <div
            className="contact-information__note"
            data-reveal
          >
            <span>
              ShakeUp Bartenders
            </span>

            <p>
              Atendimento, coquetelaria e presença
              construídos ao redor de cada evento.
            </p>
          </div>

        </div>


        {/* =================================================
            O COMPONENTE FUNCIONAL CONTINUA INTACTO
        ================================================== */}

        <div className="contact-form-panel">

          <div className="contact-form-panel__header">

            <span>
              03 — SEU EVENTO
            </span>

            <h2 data-reveal>
              Conte para nós
              <br />
              <em>o que você imagina.</em>
            </h2>

            <p>
              Preencha as informações abaixo.
              Nossa equipe retorna com os próximos passos.
            </p>

          </div>


          <div className="contact-form-wrap">
            <ContactForm variation="contatoFormIncluded" />
          </div>

        </div>

      </section>

    </main>
  );
}