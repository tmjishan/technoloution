import { fetchServicesData } from "@/lib/graphql-client";
import parse from "html-react-parser";
import Image from "next/image";

export default async function ServicePage() {
  const data = await fetchServicesData();

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-center text-yellow-700 py-10">No services found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:p-6 max-w-7xl mx-auto">
      {data.map((item: any, index: number) => {
        const details = item.serviceDetails;

        return (
          <div
            key={index}
            className="bg-gray-800/70 p-6 rounded-lg shadow-md flex flex-col gap-4"
          >
            <h2 className="text-3xl font-semibold text-white">
              {details.serviceTitle}
            </h2>

            <h5 className="text-gray-400 text-xl">
              {details.servicesSubtitle}
            </h5>

            {details.serviceIcon?.node?.sourceUrl && (
              <div className="relative w-full h-40 overflow-hidden rounded-md">
                <Image
                  src={details.serviceIcon.node.sourceUrl}
                  alt="Service Icon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}

            <div className="text-gray-300 text-md leading-relaxed space-x-16 py-5">
              {parse(details.shortDescription)}
            </div>

            {details.serviceButtonUrl && (
              <div className="mt-auto">
                <a
                  href={details.serviceButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-700 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
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
