"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apollo-client";

import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/footer";

import type { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <ScrollToTop />
      <Footer />
    </ApolloProvider>
  );
}
