import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "A structured, transparent engagement model — from discovery and strategy through build, deployment, and ongoing support. No surprises. Real results.",
  openGraph: {
    title: "How We Work | ByteShift Labs",
    description:
      "A structured, transparent engagement model — from discovery and strategy through build, deployment, and ongoing support. No surprises. Real results.",
  },
  twitter: {
    title: "How We Work | ByteShift Labs",
    description:
      "A structured, transparent engagement model — from discovery and strategy through build, deployment, and ongoing support. No surprises. Real results.",
  },
}

export default function HowLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
