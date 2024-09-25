import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NotHotDog - AI Powered API testing tool',
  keywords: [
    // Original keywords
    'voice API testing', 'automated voice testing', 'call center AI testing', 'speech-to-text validation',
    'text-to-speech quality assurance', 'voice AI latency testing', 'accent recognition testing',
    'AI hallucination detection', 'conversational AI testing', 'voice API performance metrics',
    'voice bot testing tools', 'voice interface QA', 'voice API integration testing',
    'speech recognition accuracy testing', 'voice AI benchmarking', 'AI voice testing',
    'machine learning voice analysis', 'natural language processing testing', 'virtual agent testing',
    'IVR system testing', 'voice synthesis testing', 'multilingual voice AI testing',
    'voice API stress testing', 'voice API security testing', 'voice QA tools',
    'end-to-end voice testing', 'AI-powered customer service', 'voice assistant optimization',
    'voice user interface testing', 'automated speech recognition testing', 'voice API monitoring',
    'voice quality metrics', 'voice AI performance analysis', 'call center efficiency tools',
    'voice interaction testing', 'voice API load testing', 'voice bot conversation flow testing',
    'AI voice accuracy improvement', 'voice API regression testing', 'voice AI scalability testing',
    'speech analytics tools', 'voice AI compliance testing', 'omnichannel voice testing',
    'voice API error handling', 'voice AI continuous integration', 'voice API documentation testing',
    'voice AI personalization testing', 'voice API versioning', 'voice AI edge case detection',
    'voice API compatibility testing', 'AI voice sentiment analysis',
    'AI call center optimization', 'voice AI performance tracking', 'automated voice response testing',
    'voice API integration for startups', 'enterprise voice AI solutions', 'voice bot development tools',
    'AI-powered IVR testing', 'voice UI/UX testing', 'voice AI localization testing',
    'real-time voice analytics', 'voice API debugging tools', 'voice AI fraud detection testing',
    'voice biometrics testing', 'AI voice assistant benchmarking', 'voice API penetration testing',
    'voice AI A/B testing', 'conversational flow optimization', 'voice AI intent recognition testing',
    'voice API latency reduction', 'AI call routing efficiency testing', 'voice AI accuracy metrics',
    'voice API failover testing', 'AI voice transcription quality', 'voice bot personality testing',
    'voice API compliance auditing', 'AI voice emotion detection testing', 'voice interface accessibility testing',
    'voice AI data privacy compliance', 'AI call center analytics', 'voice API scalability solutions',
    'AI voice assistant training tools', 'voice API performance benchmarks', 'AI-driven call quality monitoring',
    'voice bot conversation design testing', 'AI voice agent simulation', 'voice API integration best practices',
    'AI-powered voice search optimization', 'voice commerce testing tools', 'AI voice assistant market analysis',
    'voice API trend forecasting', 'AI call center ROI optimization', 'voice AI competitive analysis tools',
    'AI voice branding consistency testing', 'voice API customer experience metrics', 'AI voice assistant user adoption testing',
    'voice AI natural language understanding', 'AI call center workforce optimization', 'voice API cloud integration testing',
    'AI voice assistant skill testing', 'voice API cross-platform compatibility', 'AI voice interface usability testing',
    'voice AI continuous learning validation', 'AI call center predictive analytics', 'voice API service level agreement testing',
  ],
  openGraph: {
  title: 'NotHotDog - AI Powered API Testing Tool',
    url: 'https://NotHotDog.dev',
    siteName: 'NotHotDog',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NotHotDog - AI Powered API Testing Tool',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#000000" />
      <meta name="google-site-verification" content="We8336zdpSjE2jH88dbRSvfbDyIbN9iwJRxnlohtJro" />
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