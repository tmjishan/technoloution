import ServicePage from "@/components/serviceDetails";

export default function Page() {
  return (
    <>
      <section className="px-4 py-16 md:py-24 bg-gray-50 dark:bg-gray-900/60 rounded-4xl">
        <div className="max-w-5xl mx-auto grid gap-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Web, Marketing & Creative Solutions That Elevate Your Brand
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 tracking-wide">
            At{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
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

      <section className="px-4 pb-20 md:pb-32">
        <ServicePage />
      </section>
    </>
  );
}
