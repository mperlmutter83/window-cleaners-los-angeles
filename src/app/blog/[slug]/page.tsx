import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contentToHtml, getPost, toRenderPost } from "@/lib/api";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog-data";
import { site } from "@/lib/site";

export const revalidate = 60;
export const dynamicParams = true;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const apiPost = await getPost(site.domain, slug);
  const post = apiPost ? toRenderPost(apiPost) : getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.metaDescription || post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const apiPost = await getPost(site.domain, slug);
  const post = apiPost ? toRenderPost(apiPost) : getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm font-semibold text-sky-300 hover:text-sky-200">
            ← Back to Blog
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-sky-300">{post.category}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-slate-300">{post.date}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt={post.title} className="mb-10 w-full rounded-3xl object-cover" />
        )}
        <div
          className="space-y-6 text-lg leading-8 text-slate-700 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-slate-900"
          dangerouslySetInnerHTML={{ __html: contentToHtml(post.content) }}
        />
      </article>
    </>
  );
}
