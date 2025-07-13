// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import ClientLayout from "../components/client-layout";

import { Poppins } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";

// ✅ Font Configs
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO Metadata
export const metadata = {
  title: "Techno Loution | Web & Automation Experts",
  description:
    "Grow your business with custom web development, workflow automation, and digital support services from Techno Loution.",
};

// ✅ Root Layout Component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${poppins.className} 
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          max-w-7xl mx-auto 
          bg-white text-gray-900
        `}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
