import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nothotdog.dev/</loc>
    <lastmod>2024-07-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  })
}