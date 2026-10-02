"use client";

import ContactForm from "../ContactForm/ContactForm";
import "../../styles/index.scss";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import Link from "next/link";

const { numeroTelefone, ddd, email } = settings;
const { rua, numero, cidade, estado, cep, urlMaps } = settings.endereco;

export default function Form() {
  const pathname = usePathname();

  if (pathname === "/contato") return null; // Caso seja página de contato, não exibe o formulário

  return (
    <div className="included-form">
      <div className="base">
        <div className="box-details">
          <div className="box-title">
            <h2 className="title">Entre em contato</h2>
            <p className="description">
              Tire suas dúvidas e solicite um orçamento.
            </p>
          </div>
          <div className="contact">
            <Link href={`tel:0${ddd}${numeroTelefone}`} target="_blank" rel="noreferrer">
              <FaPhone /> {`(${ddd}) ${numeroTelefone}`}
            </Link>
            <Link href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <FiMail /> {`${email}`}
            </Link>
            <Link href={urlMaps} target="_blank" rel="noreferrer">
              <FaMapMarkedAlt /> {`${rua}, ${numero} - ${cidade} - ${estado}, ${cep}`}
            </Link>
          </div>
        </div>
        <ContactForm variation="contatoFormIncluded" />
      </div>  
    </div>
  );
}
