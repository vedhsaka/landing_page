import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(`User-agent: *
Allow: /

Sitemap: https://NotHotDog.dev/sitemap.xml`, {
    headers: { 'Content-Type': 'text/plain' },
  })
}