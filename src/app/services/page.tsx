import RevealText from "@/components/RevealText";
import ServicePage from "@/components/serviceDetails";

export default function Page() {
  return (
    <>
      {/* Animated Section Title */}
      <RevealText text="SERVICES" />

      {/* Top Section with Description */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-10 md:pt-20 pb-10 bg-gray-50 dark:bg-gray-900/60 rounded-3xl">
        <div className="max-w-5xl mx-auto grid gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Web, Marketing & Creative Solutions That Elevate Your Brand
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed">
            At{" "}
            <span className="font-semibold text-yellow-800 dark:text-yellow-600">
              TechnoLotion
            </span>
            , we help businesses grow faster with result-driven{" "}
            <strong>Web Development</strong>, <strong>Digital Marketing</strong>
            , <strong>Virtual Assistant</strong>, and{" "}
            <strong>Graphics Design</strong> services. From building
            high-performing websites to managing your brand’s online presence —
            we’ve got you covered.
          </p>
        </div>
      </section>

      {/* Service Component Section */}
      <section className="my-10  md:px-12 lg:px-20 pb-20 md:pb-32">
        <ServicePage />
      </section>
    </>
  );
}
