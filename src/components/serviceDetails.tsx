import { fetchServicesData } from "@/lib/graphql-client";
import { ServiceNode } from "@/type/type";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

export default async function ServicePage() {
  const data: ServiceNode[] = await fetchServicesData();

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-center text-yellow-700 py-10">No services found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:p-6 max-w-7xl mx-auto">
      {data.map((item, index) => {
        const details = item.servicesacf;

        if (!details) return null;

        const imageUrl =
          item.featuredImage?.node?.sourceUrl ||
          details.serviceIcon?.node?.sourceUrl ||
          "/fallback-image.jpg"; // fallback image

        const altText = details.seoTitle || item.title || "Service Image";

        return (
          <div
            key={index}
            className="bg-gray-800/70 p-6 rounded-lg shadow-md flex flex-col gap-4 transition hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative w-full h-40 overflow-hidden rounded-md">
              <Image
                src={imageUrl}
                alt={altText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-semibold text-white">
              {details.seoTitle || item.title || "Untitled Service"}
            </h2>

            {/* Short Description */}
            <div className="text-gray-300 text-md leading-relaxed py-5">
              {details.shortDescription
                ? parse(details.shortDescription)
                : "No description available."}
            </div>

            <Link
              href={item.uri}
              rel="noopener noreferrer"
              className="bg-yellow-900 px-6 py-2 rounded-2xl inline-block text-center text-white hover:bg-yellow-700 transition"
            >
              Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
