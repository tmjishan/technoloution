// src/app/blog/[slug]/page.tsx
export const revalidate = 60;
import { fetchAllPostsData, fetchBlogPost } from "@/lib/graphql-client";
import Image from "next/image";
import Link from "next/link";

// ✅ [1] static paths generate
export async function generateStaticParams() {
  const posts = await fetchAllPostsData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ [3] Main Page component
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await fetchBlogPost(slug);

  return (
    <div className="p-6 w-full md:max-w-5xl mx-auto bg-gray-900/50 flex flex-col gap-y-10 flex-auto">
      <h1 className="text-3xl font-bold">{post?.title}</h1>

      <Image
        src={
          post?.featuredImage?.node?.sourceUrl ||
          "/Technoloution-website-Logo-PNG-3.png"
        }
        alt={post?.title || " "}
        width={1200}
        height={720}
        className="object-cover w-full md:max-w-5xl max-h-[500px] rounded-2xl"
      />

      <p className="text-gray-500">{post?.date}</p>
      <div className="mt-4 prose prose-invert">
        <div
          className="flex flex-col gap-y-5 flex-1 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
        />
      </div>
      <div className="text-center">
        <Link
          href="/blog"
          className="inline-block text-yellow-400 hover:underline text-base sm:text-lg font-semibold"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
