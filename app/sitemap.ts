import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sarukaglobal.com";

  return [
    { url: `${base}` },
    { url: `${base}/products` },
    { url: `${base}/products/rice` },
    { url: `${base}/products/wheat` },
    { url: `${base}/products/maize` },
    { url: `${base}/products/fruits` },
    { url: `${base}/products/vegetables` },
    { url: `${base}/products/spices` },
    { url: `${base}/products/pulses` },
    { url: `${base}/products/dry-fruits` },
  ];
}