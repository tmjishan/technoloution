import RevealText from "@/components/RevealText";
import { fetchAllPostsData } from "@/lib/graphql-client";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const Data = await fetchAllPostsData();

  return (
    <div>
      <RevealText text="Blog" />

      {Data.map((item, index) => {
        return (
          <div key={index} className="w-5xl mx-auto">
            <Link
              href={item.slug}
              className="flex gap-5 p-3 my-5 bg-amber-800 rounded-2xl justify-start items-center"
            >
              <Image
                src={
                  item.featuredImage?.node?.sourceUrl ||
                  "/Technoloution-website-Logo-PNG-3.png"
                }
                alt={item?.featuredImage?.node?.altText || item.slug}
                width={200}
                height={200}
                className="min-w-1/12 rounded-2xl"
              />
              <div>Title: {item.title}</div>
              <div className="font-semibold text-yellow-950">
                {" "}
                <span className="text-yellow-700">Publishing Date:</span>{" "}
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
