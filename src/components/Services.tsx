import { fetchServicesData } from "@/lib/graphql-client";
import Image from "next/image";
import Link from "next/link";

export default async function Services() {
  const services = await fetchServicesData();

  if (!Array.isArray(services) || services.length === 0) {
    return (
      <p className="text-center text-yellow-700 py-10">No services found.</p>
    );
  }

  return (
    <section className="py-16 bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white">
          Our Services
        </h2>
        <h3 className="max-w-3xl mx-auto mb-12 text-center text-sm sm:text-base md:text-xl text-white px-4 sm:px-0 leading-relaxed">
          We deliver tailored digital solutions including Web Development,
          Workflow Automation, Digital Marketing, and Virtual Assistance — all
          designed to help your business grow efficiently and effectively.
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any, index: number) => {
            const {
              serviceTitle,
              shortDescription,
              buttonLabel,
              serviceButtonUrl,
              serviceIcon,
            } = service.serviceDetails || {};

            const iconUrl = serviceIcon?.node?.sourceUrl;

            return (
              <div
                key={index}
                className="bg-white/80  border border-yellow-100 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-yellow-300 transition-shadow duration-300"
              >
                <div className="mb-6 w-full h-40 flex items-center justify-center bg-yellow-100 rounded-lg overflow-hidden">
                  {iconUrl && (
                    <Image
                      src={iconUrl}
                      alt={serviceTitle}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="max-h-full max-w-full object-contain transform transition-transform duration-300 hover:scale-105"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-yellow-900">
                  {serviceTitle}
                </h3>
                <p className="text-gray-700 mb-6 text-sm">{shortDescription}</p>

                {serviceButtonUrl && (
                  <Link
                    href={serviceButtonUrl}
                    className="inline-block text-yellow-700 font-semibold hover:text-yellow-900 hover:underline mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {buttonLabel || "Learn More →"}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
