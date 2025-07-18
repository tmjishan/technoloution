import Header from "@/components/header";
import Services from "@/components/Services";
import ServiceView from "@/components/serviceView";
import Tagline from "@/components/tagline";

export default function Home() {
  return (
    <>
      <Header />
      <ServiceView />
      <Tagline />
      <Services />
    </>
  );
}
