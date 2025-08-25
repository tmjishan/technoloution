export const revalidate = 60;
import Header from "@/components/header";
import Services from "@/components/Services";
import ServiceView from "@/components/serviceView";
import Tagline from "@/components/tagline";
import ClientsCounterSection from "@/components/ClientsCounterSection";

export default function Home() {
  return (
    <>
      <Header />
      <ServiceView />
      <Tagline />
      <Services />
      <ClientsCounterSection
        clients={200}
        heading="Clients & Growing"
        subtext="Your growth partner for the long run."
      />
    </>
  );
}
