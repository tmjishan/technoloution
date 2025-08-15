export const revalidate = 60;
import "./globals.css";
import type { ReactNode } from "react";
import ClientLayout from "../components/client-layout";
import { defaultMetadata } from "./meta";
import type { Metadata } from "next";
import CalendlyPopup from "@/components/CalendlyWidget";

export const metadata: Metadata = {
  ...defaultMetadata, // base metadata
  title: "Technoloution | Web & IT", // optional override
};

// ✅ Root Layout Component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          antialiased 
          max-w-7xl mx-auto 
          bg-white text-gray-900
        `}
      >
        <ClientLayout>
          {children}
          <CalendlyPopup showFloatBtn />
        </ClientLayout>
      </body>
    </html>
  );
}
