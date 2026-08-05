import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, toRenderPost } from "@/lib/api";
import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Window Cleaning Blog",
  description:
    "Window cleaning tips, maintenance advice, and local service information from Window Cleaners Los Angeles.",
  alternates: { canonical: `${site.url}/blog` },
};

export default async function BlogPage() {
  const apiPosts = await getPosts(site.domain);
  const posts = apiPosts.length > 0 ? apiPosts.map(toRenderPost) : blogPosts;

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">Blog</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Window cleaning tips and local advice
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Helpful articles about keeping your windows, screens, tracks, and glass looking their best.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">New articles are coming soon.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              We’re preparing helpful window cleaning tips for Los Angeles homeowners and businesses.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-sky-700">{post.category}</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-sky-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-slate-500">{post.date}</p>
                {post.excerpt && <p className="mt-4 text-slate-600">{post.excerpt}</p>}
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-block font-semibold text-sky-700 hover:text-sky-800"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
