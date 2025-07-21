export const revalidate = 60;
import "./globals.css";
import type { ReactNode } from "react";
import ClientLayout from "../components/client-layout";

// ✅ SEO Metadata
export const metadata = {
  title: "Technoloution | Web & IT",
  description:
    "Grow your business with custom web development, workflow automation, and digital support services from Technoloution.",
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
