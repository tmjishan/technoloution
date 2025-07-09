import { fetchServicesData } from "@/lib/graphql-client";

export default async function ServicePage() {
  const data = await fetchServicesData();

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-center text-yellow-700 py-10">No services found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-2">Service Box Headline </h2>
        <p className="text-gray-700 mb-4">Service Box Short Description</p>
        <a
          href=""
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Service
        </a>
      </div>
    </div>
  );
}
