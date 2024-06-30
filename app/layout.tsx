import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import { ReactNode } from 'react'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Flame - Automate Your Voice API Testing',
  description: 'Join the waitlist for Flame, the innovative solution for automating voice API testing.',
  keywords: ['voice API', 'API testing', 'automation', 'Flame'],
  openGraph: {
    title: 'Flame - Automate Your Voice API Testing',
    description: 'Join the waitlist for Flame, the innovative solution for automating voice API testing.',
    url: 'https://withflame.com',
    siteName: 'Flame',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flame - Automate Your Voice API Testing',
    description: 'Join the waitlist for Flame, the innovative solution for automating voice API testing.',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#000000',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-FFX2S4LYL2`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FFX2S4LYL2');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
