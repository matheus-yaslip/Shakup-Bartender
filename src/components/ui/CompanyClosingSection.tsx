import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/CompanyClosingSection.module.scss";

export default function CompanyClosingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.dot} />
            <span>ESSÊNCIA ShakeUp Bartenders</span>
          </div>

          <h2 data-reveal>
            O cuidado está
            <br />
            <em>nos detalhes.</em>
          </h2>
        </div>


        <div className={styles.content}>

          <div className={styles.editorialNumber}>

            <small>
              PRESENÇA
              <br />
              ATENDIMENTO
              <br />
              EXPERIÊNCIA
            </small>
          </div>


          <div className={styles.manifesto}>
            <p data-reveal>
              Para nós, servir bem vai muito além do que está no copo.
              Está no atendimento, no ritmo, na apresentação e na forma
              como cada convidado é recebido.
            </p>

            <p data-reveal>
              É essa atenção aos detalhes que transforma o bar em parte
              da experiência do evento.
            </p>

            <Link
              href="/contato"
              className={styles.cta}
              data-cursor="LET'S GO"
            >
              <span>Fale com nosso time</span>

              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>


          <div className={styles.visual}>

            <div className={styles.imageWrap}>
              <Image
                src="/galeria1/img12.webp"
                alt="Experiência ShakeUp Bartenders em evento"
                fill
                sizes="(max-width: 700px) 70vw, 24vw"
                className={styles.image}
              />

              <span className={styles.imageIndex}>
                02 / 05
              </span>
            </div>

            <div
              className={styles.monogram}
              aria-hidden="true"
            >
              FB
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}