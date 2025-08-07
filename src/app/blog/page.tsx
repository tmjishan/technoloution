import RevealText from "@/components/RevealText";
import { fetchAllPostsData } from "@/lib/graphql-client";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export default async function BlogPage() {
  const posts = await fetchAllPostsData();

  return (
    <div>
      <RevealText text="Blog" />

      <div className="w-full px-5 md:max-w-6xl mx-auto py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {posts.map((item, index) => {
          const imageSrc =
            item.featuredImage?.node?.sourceUrl ||
            "/Technoloution-website-Logo-PNG-3.png";

          const imageAlt =
            item.featuredImage?.node?.altText || item.title || "Blog Image";

          const formattedDate = new Date(item.date).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );

          return (
            <Link
              key={index}
              href={`/blog/${item.slug}`}
              className="grid grid-flow-row-dense"
            >
              <article className="flex flex-col md:flex-row bg-yellow-800/60 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 items-center">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={250}
                  className="w-1/2 h-auto object-fill transition-all hover:scale-105 p-4 rounded-4xl"
                />

                <div className="p-4 w-full md:max-w-2/3">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h2>

                  <div className="text-gray-100 text-sm mb-3 line-clamp-3">
                    {item.excerpt ? parse(String(item.excerpt)) : null}
                  </div>

                  <p className="text-sm text-yellow-200 font-medium">
                    <span className="text-yellow-400">Published:</span>{" "}
                    {formattedDate}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
