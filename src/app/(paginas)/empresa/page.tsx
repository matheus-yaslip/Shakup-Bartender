
import EditorialCollageSection from "@/components/EditorialCollageSection";
import CompanyClosingSection from "@/components/ui/CompanyClosingSection";
import { Metadata } from "next";

export const metadata: Metadata = { title:"Empresa", description:"A ShakeUp Bartenders é uma empresa especializada em bar e bebidas para eventos, construída em torno de atendimento, repertório e evolução constante." };

export default function Empresa() {
  return <main id="conteudo">
    <section className="page-hero editorial-hero">
      <div
        className="contact-glass2"
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
      <div className="eyebrow">EMPRESA — DESDE 2006</div>
      <h1 data-reveal>Serviço com técnica.<br /><em>Experiência com presença.</em></h1>
      <div className="page-hero-note">Uma empresa especializada em bar e bebidas para eventos, construída em torno de atendimento, repertório e evolução constante.</div>
    </section>



    <EditorialCollageSection />


    <section className="quote-band">
      <p data-reveal>“O bar precisa acompanhar a energia do evento — e, quando bem executado, ajuda a criá-la.”</p>
    </section>

    <CompanyClosingSection />
  </main>
}
