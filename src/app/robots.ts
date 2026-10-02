import type { MetadataRoute } from "next";
import { url } from "@/settings/settings";
export default function robots(): MetadataRoute.Robots {
 return { rules: { userAgent:"*", allow:"/" }, sitemap:`${url}sitemap.xml` };
}
