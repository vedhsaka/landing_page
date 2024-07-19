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
    <loc>https://withflame.com/blog/</loc>
    <lastmod>2024-07-19</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://withflame.com/blog/voice-ai-in-restaurant-drive-throughs</loc>
    <lastmod>2024-07-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://withflame.com/blog/voice-ai-evolution</loc>
    <lastmod>2024-07-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://withflame.com/blog/voice-ai-customer-care</loc>
    <lastmod>2024-07-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://withflame.com/blog/character-ai</loc>
    <lastmod>2024-07-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
  <loc>https://withflame.com/blog/voice-ai-healthcare</loc>
  <lastmod>2024-07-19</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  })
}