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

  return <div>Hello SERVICE</div>;
}
