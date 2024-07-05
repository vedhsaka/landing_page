import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://withflame.com/</loc>
    <lastmod>2024-07-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://withflame.com/blog/voice-ai-in-restaurant-drive-throughs</loc>
    <lastmod>2024-07-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add more URLs for other pages and blog posts -->
</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  })
}