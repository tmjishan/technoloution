import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technoloution | Web & IT",

  description:
    "Grow your business with custom web development, workflow automation, and digital support services from Technoloution.",

  openGraph: {
    title: "Technoloution | Web & IT",
    description:
      "Grow your business with custom web development, workflow automation, and digital support services from Technoloution.",

    url: "https://technoloution.com/", // ✅ Your real live domain

    siteName: "Technoloution",
    images: [
      {
        url: "https://technoloution.com/og-image.png", // ✅ Remove double slash
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
