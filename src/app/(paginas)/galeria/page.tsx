import type { Metadata } from "next";
import GalleryExperience from "@/components/GalleryExperience";

export const metadata: Metadata = { title:"Galeria", description:"Galeria de eventos, drinks e experiências da ShakeUp Bartenders." };

export default function Galeria(){
 return <main id="conteudo">
   <section className="page-hero gallery-hero">
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
     <div className="eyebrow">GALERIA — EVENTOS / DRINKS / DETALHES</div>
     <h1 data-reveal>Não é sobre posar.<br/><em>É sobre acontecer.</em></h1>
     <p>Registros do acervo original da ShakeUp Bartenders organizados em uma galeria editorial.</p>
   </section>
   <GalleryExperience/>
 </main>
}
