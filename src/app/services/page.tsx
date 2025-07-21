import RevealText from "@/components/RevealText";
import ServicePage from "@/components/serviceDetails";
import WorkProcessSection from "@/components/workProcess";

export default function Page() {
  return (
    <>
      {/* Animated Section Title */}
      <RevealText text="SERVICES" />

      {/* Top Intro Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-10 md:pb-20 bg-gray-900/60 rounded-b-3xl">
        <div className="max-w-5xl mx-auto grid gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">
            Web, Marketing & Creative Solutions That Elevate Your Brand
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 tracking-wide leading-relaxed">
            At{" "}
            <span className="font-semibold text-yellow-600">Technolotion</span>,
            we help businesses grow faster with result-driven{" "}
            <strong>Web Development</strong>, <strong>Digital Marketing</strong>
            , <strong>Virtual Assistant</strong>, and{" "}
            <strong>Graphics Design</strong> services. From building
            high-performing websites to managing your brand&rsquo;s online
            presence — we&rsquo;ve got you covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16 md:mt-24 px-4 sm:px-6 md:px-12 lg:px-20 pb-10 md:pb-20">
        <ServicePage />
      </section>

      {/* Work Process Section */}
      <section className="mt-16 md:mt-24">
        <WorkProcessSection />
      </section>
    </>
  );
}
