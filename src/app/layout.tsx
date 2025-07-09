// layout.tsx (✅ server component)
export const revalidate = 60;
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

// ✅ SEO metadata
export const metadata = {
  title: "Techno Loution | Web & Automation Experts",
  description:
    "Grow your business with custom web development, workflow automation, and digital support services from Techno Loution.",
};

// ✅ Fonts
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

import ClientLayout from "../components/client-layout"; // 👇 Client wrapper

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto bg-white text-gray-900`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
