import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, estimateReadTime } from "@/lib/blog";
import { BUSINESS } from "@/data/business";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${BUSINESS.url}/blog/${slug}`,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image || undefined,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { "@type": "Organization", name: post.author || BUSINESS.name },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: `${BUSINESS.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BUSINESS.url}/blog/${slug}` },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <nav className="mb-4 text-sm text-steel">
          <Link href="/blog" className="hover:text-ink">← Blog</Link>
        </nav>
        {post.category && <span className="text-xs font-semibold uppercase tracking-wider text-signal-600">{post.category}</span>}
        <h1 className="mt-2 text-3xl font-bold leading-tight text-ink sm:text-4xl">{post.title}</h1>
        <div className="mt-3 text-sm text-steel">
          {post.date && <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>}
          {post.content && <span> · {estimateReadTime(post.content)} min read</span>}
        </div>

        <div className="prose-content mt-8" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <CTASection />
    </main>
  );
}
