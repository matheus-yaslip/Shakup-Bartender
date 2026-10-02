"use client";
export default function ScrollToTopMobile(){return <button type="button" aria-label="Voltar ao topo" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>↑</button>}
