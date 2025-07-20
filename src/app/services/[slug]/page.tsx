import { fetchServicesData } from "@/lib/graphql-client";
import { ServiceNode } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ISR: 10 minutes
export const revalidate = 600;

// Static params generate (for dynamic routes)
export async function generateStaticParams() {
  const services = await fetchServicesData();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

// SEO metadata generate dynamically
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params; // **await করতে হবে**

  const services = await fetchServicesData();
  const service = services.find((s) => s.slug === slug);

  return {
    title: service?.servicesacf?.seoTitle || service?.title || "Service",
    description: service?.servicesacf?.seoDescription || "Service details page",
  };
}

// Page component - async because fetches data
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params; // **await করতে হবে**

  const services = await fetchServicesData();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <p className="text-center py-10 text-yellow-600">Service not found</p>
    );
  }

  const details = service.servicesacf;

  const imageUrl =
    service.featuredImage?.node?.sourceUrl ||
    details?.serviceIcon?.node?.sourceUrl ||
    "/fallback-image.jpg";

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-900/70 text-white rounded-lg mt-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        {details?.seoTitle || service.title}
      </h1>

      <div className="relative w-full h-48 sm:h-64 md:h-80 mb-8 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={details?.seoTitle || service.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
          priority={true}
        />
      </div>

      <div
        className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base md:text-lg max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{
          __html:
            details?.serviceDescription || "<p>No description available.</p>",
        }}
      />

      <div className="text-center">
        <Link
          href="/services"
          className="inline-block text-yellow-400 hover:underline text-base sm:text-lg font-semibold"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
