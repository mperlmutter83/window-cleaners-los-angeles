import type { RenderPost } from "./api";

// Brand-new site: no local posts yet. The blog renders API-first and this
// empty fallback keeps the page graceful until Agent SEO publishes content.
export const blogPosts: RenderPost[] = [];

export function getPostBySlug(slug: string): RenderPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
