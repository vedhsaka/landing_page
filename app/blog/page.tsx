import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import '../css/markdown.css';

const POSTS_DIR = path.join(process.cwd(), 'app/blogPosts');

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function getBlogPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(POSTS_DIR);
  return files.map((filename) => {
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace('.mdx', ''),
      title: data.title || 'Untitled Post',
      date: data.date || 'No date',
      description: data.description || '',
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogIndex() {
  const blogPosts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">NotHotDog Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                  Read More
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}