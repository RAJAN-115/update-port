import '@/app/globals.css';
import { FloatingActions } from '@/components/ai/floating-actions';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Rajan's Portfolio",
    template: "%s | Rajan's Portfolio",
  },
  description: 'AI-Powered Personal Portfolio of Rajan Prajapati',
  generator: 'v0.dev',
  authors: [{ name: 'Rajan Prajapati' }],
  keywords: ['portfolio', 'developer', 'web development', 'AI'],
  metadataBase: new URL('https://rajansportfolio.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajansportfolio.vercel.app',
    siteName: "Rajan's Portfolio",
    title: "Rajan's Portfolio",
    description: 'AI-Powered Personal Portfolio of Rajan Prajapati',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rajan's Portfolio",
    description: 'AI-Powered Personal Portfolio of Rajan Prajapati',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}

