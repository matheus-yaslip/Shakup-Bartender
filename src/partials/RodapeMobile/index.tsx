import { settings } from "@/settings/settings";
import { headers } from "next/headers";
import { isMobile } from "../../lib/isMobile";
// import "./rodapeMobile.scss";

import {
  FaEnvelope,
  FaWhatsapp,
  // FaChevronUp,
  FaPhoneAlt,
} from "react-icons/fa";
import ScrollToTopMobile from "@/components/ui/ScrollToTopMobile";

const { siteName, ddd, whatsappApi, numeroTelefone, email } = settings;

export default async function RodapeMobile() {
  const userAgent = (await headers()).get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    mobileCheck && (
      <div className="rodape-mobile">
        <div className="icones-rodape">
          <a
            className="phone icone"
            href={`tel:0${ddd}${numeroTelefone}`}
            title="Telefone para contato"
          >
            <FaPhoneAlt />
            <div style={{ display: "none" }}>{siteName}</div>
          </a>

          <a className="envelope icone" href={`mailto:${email}`} title="e-mail">
            <FaEnvelope />
            <div style={{ display: "none" }}>{siteName}</div>
          </a>

          <a
            className="whatsapp icone"
            href={`${whatsappApi}`}
            rel="nofollow"
            title="Whatsapp"
          >
            <FaWhatsapp />
            <div style={{ display: "none" }}>{siteName}</div>
          </a>
           <ScrollToTopMobile />
        </div>
      </div>
    )
  );
}
