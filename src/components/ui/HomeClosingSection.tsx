import Link from "next/link";

import styles from "@/styles/HomeClosingSection.module.scss";

export default function HomeClosingSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>

                <div className={styles.top}>

                    <div className={styles.label}>
                        <span className={styles.dot} />

                        <span className={styles.labelText}>
                            EXPERIÊNCIAS QUE FICAM
                        </span>
                    </div>

                    <div className={styles.intro}>

                        <h2 className={styles.title}>
                            <span>Cada evento tem</span>

                            <em>
                                uma atmosfera.
                            </em>
                        </h2>

                        <p className={styles.description}>
                            Criamos experiências de bar que acompanham o ritmo,
                            a identidade e a energia de cada ocasião.
                        </p>

                    </div>
                </div>


                <div className={styles.visualArea}>

                    <div className={styles.sideText}>

                            <p>
                                Do primeiro brinde ao último <span>drink</span>,
                                <br />
                                cada detalhe é <span>pensado</span> para criar
                                <br />
                                momentos únicos, envolver os convidados
                                <br />
                                e transformar cada celebração
                                <br />
                                em uma memória que permanece.
                            </p>

                    </div>

                    <div
                        className={styles.editorialMark}
                        aria-hidden="true"
                    >
                        <span>FB</span>

                        <small>
                            EVENTOS
                            <br />
                            EXPERIÊNCIAS
                        </small>
                    </div>

                </div>


                <div className={styles.bottom}>

                    <div className={styles.line} />

                    <Link
                        href="/empresa"
                        className={styles.cta}
                        data-cursor="LET'S GO"
                    >
                        <span>
                            Conheça a empresa
                        </span>

                        <span aria-hidden="true">
                            ↗
                        </span>
                    </Link>

                </div>

            </div>
        </section>
    );
}