import { fetchServicesData } from "@/lib/graphql-client";
import { ServiceNode } from "@/type/type";
import Image from "next/image";
import Link from "next/link";

export default async function Services() {
  const services: ServiceNode[] = await fetchServicesData();

  if (!Array.isArray(services) || services.length === 0) {
    return (
      <p className="text-center text-yellow-400 py-10">No services found.</p>
    );
  }

  const filteredServices = services.filter(
    (s) => s.servicesacf?.displayHome === true
  );

  if (filteredServices.length === 0) {
    return (
      <p className="text-center text-yellow-400 py-10">
        No home-visible services found.
      </p>
    );
  }

  return (
    <section className="py-16 bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
          Our Services
        </h2>
        <h3 className="max-w-3xl mx-auto mb-12 text-center text-sm sm:text-base md:text-xl text-gray-300 px-4 sm:px-0 leading-relaxed">
          We deliver tailored digital solutions including Web Development,
          Workflow Automation, Digital Marketing, and Virtual Assistance — all
          designed to help your business grow efficiently and effectively.
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => {
            const { featuredImage, title, uri, servicesacf } = service;

            const seoTitle = servicesacf?.seoTitle || title;
            const shortDescription =
              servicesacf?.shortDescription || "No description available.";
            const imageUrl =
              featuredImage?.node?.sourceUrl || "/fallback-image.jpg";
            const buttonUrl = uri;
            const buttonLabel = "Learn More →";

            return (
              <div
                key={index}
                className="bg-gray-800 border border-yellow-700/20 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-yellow-500 transition-shadow duration-300"
              >
                <div className="mb-6 w-full h-40 flex items-center justify-center bg-gray-700/50 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={seoTitle}
                    width={400}
                    height={240}
                    className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-yellow-600">
                  {seoTitle}
                </h3>

                <p className="text-gray-300 mb-6 text-sm">{shortDescription}</p>

                {buttonUrl && (
                  <Link
                    href={buttonUrl}
                    className="inline-block text-yellow-600 font-semibold hover:text-yellow-200 hover:underline mt-auto"
                  >
                    {buttonLabel}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {filteredServices.length >= 3 && (
          <div className="text-center">
            <Link
              href="/services"
              className="hidden md:inline-flex items-center justify-center font-extrabold bg-yellow-800 py-2 px-4 sm:px-5 rounded-2xl cursor-pointer text-white text-base sm:text-lg hover:bg-yellow-600 transition-colors duration-200 my-8"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
