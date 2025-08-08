export const revalidate = 60;
import { fetchAllPostsData } from "@/lib/graphql-client";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = await fetchAllPostsData();

  return services.map((post) => ({
    slug: post.slug,
  }));
}

// SEO metadata generate dynamically
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const posts = await fetchAllPostsData();
  const post = posts.find((item) => item.slug === slug);

  return {
    title: post?.title || "Post Blog",
    description: post?.excerpt || "Post details page",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const posts = await fetchAllPostsData();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <p className="text-center py-10 text-yellow-600">Post Not Found</p>;
  }

  const ImageURL =
    post.featuredImage?.node?.sourceUrl ||
    "/Technoloution-website-Logo-PNG-3.png";

  const ImageALT = post.featuredImage?.node?.altText || post.title;

  return (
    <div className="p-6 w-full md:max-w-5xl mx-auto bg-gray-900/50 flex flex-col gap-y-10 flex-auto">
      <h1 className="text-3xl font-bold">{post?.title}</h1>

      <Image
        src={ImageURL}
        alt={ImageALT}
        width={1200}
        height={720}
        className="object-cover w-full md:max-w-5xl max-h-[500px] rounded-2xl"
      />

      <p className="text-gray-500">{post?.date}</p>
      <div className="mt-4 prose prose-invert">
        <div
          className="flex flex-col gap-y-5 flex-1 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: post?.content }}
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
