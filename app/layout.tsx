import "./globals.css"
import { Space_Grotesk, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://byteshiftlabs.netlify.app"),
  title: {
    default: "ByteShift Labs | Expert IT Consulting",
    template: "%s | ByteShift Labs",
  },
  description:
    "ByteShift Labs is a lean IT consultancy delivering cloud migrations, cybersecurity, custom software, and digital transformation for ambitious businesses.",
  keywords: [
    "IT consulting",
    "cloud migration",
    "cybersecurity",
    "digital transformation",
    "custom software development",
    "ERP development",
    "network infrastructure",
  ],
  authors: [{ name: "ByteShift Labs" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "ByteShift Labs",
    title: "ByteShift Labs | Expert IT Consulting",
    description:
      "ByteShift Labs is a lean IT consultancy delivering cloud migrations, cybersecurity, custom software, and digital transformation for ambitious businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteShift Labs | Expert IT Consulting",
    description:
      "ByteShift Labs is a lean IT consultancy delivering cloud migrations, cybersecurity, custom software, and digital transformation for ambitious businesses.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
