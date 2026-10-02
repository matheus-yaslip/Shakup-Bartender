"use client";
import Image from "next/image";
import { useState } from "react";

const imgs = [
"img1.webp","img2.webp","img3.webp","img4.webp",
"img5.webp","img6.webp","img7.webp","img8.webp",
"img9.webp","img10.webp","img11.webp","img12.webp",
"img13.webp","img14.webp","img15.webp","img16.webp"
];

export default function GalleryExperience() {
 const [active,setActive]=useState<string|null>(null);
 return <>
   <div className="masonry-gallery">
    {imgs.map((src,i)=><button key={src} className={`gallery-cell gc-${i%6}`} onClick={()=>setActive(src)} data-reveal data-cursor="VIEW" aria-label={`Abrir foto ${i+1}`}>
      <Image src={`/galeria1/${src}`} alt={`Evento ShakeUp Bartenders — foto ${i+1}`} fill sizes="(max-width:700px) 100vw, 33vw"/>
      <span>0{String(i+1).padStart(2,"0")}</span>
    </button>)}
   </div>
   {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={()=>setActive(null)}>
      <button onClick={()=>setActive(null)} aria-label="Fechar">FECHAR ×</button>
      <div className="lightbox-image"><Image src={`/galeria1/${active}`} alt="Foto ampliada de evento ShakeUp Bartenders" fill sizes="90vw"/></div>
   </div>}
 </>
}
