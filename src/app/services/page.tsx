import CenterSlider from "@/components/ProductivitySlider";
import { fetchServicesData } from "@/lib/graphql-client";

export default async function ServicePage() {
  // Fetch data from the GraphQL endpoint
  // This function should be defined in your lib/graphql-client.ts file
  const data = await fetchServicesData();

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-center text-yellow-700 py-10">No services found.</p>
    );
  }

  const imageUrl = data.map((item: any) => {
    const serviceIcon = item.serviceDetails?.serviceIcon?.node?.sourceUrl;
    return {
      url: serviceIcon || "",
      title: item.serviceDetails?.serviceTitle || "Service Image",
      description: item.serviceDetails?.shortDescription || "No description",
    };
  });

  return (
    <>
      <div className="text-center text-yellow-700">
        <CenterSlider
          slides={imageUrl.map((item) => {
            return {
              image: item.url,
              title: item.title,
              description: item.description,
              buttonText: "Learn More",
              buttonUrl: "#", // Replace with actual URL if needed
            };
          })}
        />
      </div>
      <div>Hello SERVICE</div>
    </>
  );
}
