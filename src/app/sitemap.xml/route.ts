import pagesData from "@/data/pagesData";
import { NextResponse } from "next/server";
import { url as baseUrl } from "@/settings/settings";

export async function GET() {
  const base = baseUrl.replace(/\/$/, "");
  const fixed = ["", "/empresa", "/cardapio", "/galeria", "/contato", "/informacoes", "/mapa-site"];
  const paths = [...fixed, ...pagesData.map((p) => `/${p.contratada}`)];
  const today = new Date().toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path, i)=>`<url><loc>${base}${path || "/"}</loc><lastmod>${today}</lastmod><changefreq>${i===0?"weekly":"monthly"}</changefreq><priority>${i===0?"1.0":"0.7"}</priority></url>`).join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
