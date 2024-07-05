import React from 'react';

const BlogPostWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="blog-post">
      <style jsx global>{`
        .blog-post {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .blog-post h1 {
          font-size: 2.5em;
          color: #1a1a1a;
          margin-bottom: 0.5em;
        }
        .blog-post h2 {
          font-size: 1.8em;
          color: #2c3e50;
          margin-top: 1.5em;
        }
        .blog-post h3 {
          font-size: 1.4em;
          color: #34495e;
          margin-top: 1.2em;
        }
        .blog-post p {
          margin-bottom: 1em;
        }
        .blog-post ul, .blog-post ol {
          margin-bottom: 1em;
          padding-left: 1.5em;
        }
        .blog-post li {
          margin-bottom: 0.5em;
        }
        .blog-post blockquote {
          border-left: 4px solid #3498db;
          padding-left: 1em;
          margin: 1em 0;
          font-style: italic;
          color: #555;
        }
        .meta {
          font-size: 0.9em;
          color: #666;
          margin-bottom: 2em;
        }
        .callout {
          background-color: #e7f3fe;
          border-left: 5px solid #2196F3;
          padding: 15px;
          margin: 20px 0;
        }
      `}</style>
      {children}
    </div>
  );
};

export default BlogPostWrapper;