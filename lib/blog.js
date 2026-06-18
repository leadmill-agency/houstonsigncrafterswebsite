// Blog post loader. Reads markdown files from content/blog/*.md at build time.
// Each post has frontmatter (title, slug, date, description, author, image,
// category, keywords) and a markdown body converted to HTML.
//
// Server-only — uses fs. Don't import from client components.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

marked.setOptions({ gfm: true, breaks: false });

function readPostFile(filename) {
  const filepath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  const slug = data.slug || filename.replace(/\.md$/, "");
  return { slug, ...data, content };
}

/** Post metadata (no rendered HTML) for the listing page, newest first. */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files
    .map(readPostFile)
    .filter((p) => !p.draft)
    .map((p) => {
      // eslint-disable-next-line no-unused-vars
      const { content, ...meta } = p;
      return meta;
    });
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

/** A single post by slug with rendered HTML, or null if not found. */
export function getPostBySlug(slug) {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const filename = files.find((f) => readPostFile(f).slug === slug);
  if (!filename) return null;
  const post = readPostFile(filename);
  if (post.draft) return null;
  return { ...post, html: marked.parse(post.content) };
}

export function getAllSlugs() {
  return getAllPosts().map((p) => p.slug);
}

export function estimateReadTime(content) {
  const wordCount = String(content).trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 225));
}
