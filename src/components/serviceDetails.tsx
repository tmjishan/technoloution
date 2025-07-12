import { fetchServicesData } from "@/lib/graphql-client";
import parse from "html-react-parser";
import Image from "next/image";

export default async function ServicePage() {
  const data = await fetchServicesData();

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-center text-yellow-700 py-10 text-base sm:text-lg">
        No services found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {data.map((item: any, index: number) => {
        const details = item.serviceDetails;

        return (
          <div
            key={index}
            className="bg-gray-800/70 p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col gap-4 transition-all hover:shadow-yellow-900/30"
          >
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              {details.serviceTitle}
            </h2>

            {/* Subtitle */}
            <h5 className="text-sm sm:text-base md:text-lg text-gray-400">
              {details.servicesSubtitle}
            </h5>

            {/* Image */}
            {details.serviceIcon?.node?.sourceUrl && (
              <div className="relative w-full h-40 sm:h-48 rounded-md overflow-hidden">
                <Image
                  src={details.serviceIcon.node.sourceUrl}
                  alt="Service Icon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            )}

            {/* Description */}
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
              {parse(details.shortDescription)}
            </div>

            {/* CTA Button */}
            {details.serviceButtonUrl && (
              <div className="mt-auto pt-2">
                <a
                  href={details.serviceButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-800 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition-all text-sm sm:text-base font-medium"
                >
                  {details.buttonLabel}
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
