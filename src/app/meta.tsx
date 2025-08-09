// lib/seoMetadata.ts
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Technoloution | Web & IT",
  description:
    "Grow your business with custom web development, workflow automation, and digital support services from Technoloution.",
  openGraph: {
    title: "Technoloution | Web & IT",
    description:
      "Grow your business with custom web development, workflow automation, and digital support services from Technoloution.",
    url: "https://technoloution.com/",
    siteName: "Technoloution",
    images: [
      {
        url: "https://technoloution.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technoloution | Web & IT - Technoloution",
      },
    ],
    locale: "en-US",
    alternateLocale: "en-US",
    type: "website",
  },
};
