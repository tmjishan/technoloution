"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apollo-client";
import Navbar from "../components/navbar";
import ScrollToTop from "@/components/ScrollToTop";
import type { ReactNode } from "react";
import Footer from "./footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main className="p-4 min-h-screen">{children}</main>
      <ScrollToTop />
      <Footer />
    </ApolloProvider>
  );
}
