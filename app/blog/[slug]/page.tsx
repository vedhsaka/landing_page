import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from 'next';
import '../../css/markdown.css';
export const runtime = 'edge';

const POSTS_DIR = path.join(process.cwd(), 'app/blogPosts');

interface BlogPost {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
  image: string
}

function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title || 'Untitled Post',
    date: data.date || 'No date',
    description: data.description || '',
    content,
    slug,
    image: data.image || '', // Add this line
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  return {
    title: `${post.title} | NotHotDog Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://NotHotDog.dev/blog/${params.slug}`,
      images: [post.image],

    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 content-container">
      <div className="markdown">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
        {post.image && (
          <img src={post.image} alt={post.title} className="mb-4 w-full h-auto" />
        )}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
