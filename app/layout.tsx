import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Flame - Advanced Voice API Testing Automation',
  description: 'Flame is the ultimate voice API testing platform for AI-powered call centers and voice applications. Our automated tools rigorously test latency, accent recognition, and hallucination detection across various voice AI infrastructures. Streamline your voice API integration and ensure top-notch performance with Flame - the Postman for voice APIs.',
  keywords: ['voice API testing', 'automated voice testing', 'call center AI testing', 'speech-to-text validation', 'text-to-speech quality assurance', 'voice AI latency testing', 'accent recognition testing', 'AI hallucination detection', 'conversational AI testing', 'voice API performance metrics', 'voice bot testing tools', 'voice interface QA', 'voice API integration testing', 'speech recognition accuracy testing', 'voice AI benchmarking', 'AI voice testing', 'machine learning voice analysis', 'natural language processing testing', 'virtual agent testing', 'IVR system testing', 'voice synthesis testing', 'multilingual voice AI testing', 'voice API stress testing', 'voice API security testing', 'voice QA tools', 'end-to-end voice testing'],
  openGraph: {
    title: 'Flame - Advanced Voice API Testing Automation',
    description: 'Automate and optimize your voice API testing with Flame. Ensure top performance for AI-powered call centers and voice applications.',
    url: 'https://withflame.com',
    siteName: 'Flame',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flame - Advanced Voice API Testing Automation',
    description: 'Automate and optimize your voice API testing with Flame. Ensure top performance for AI-powered call centers and voice applications.',
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