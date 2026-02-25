import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "ByteShift Labs is a lean, expert IT consultancy built for businesses that refuse to be left behind. Deep technical expertise. Strategic thinking. Real results.",
  openGraph: {
    title: "Who We Are | ByteShift Labs",
    description:
      "ByteShift Labs is a lean, expert IT consultancy built for businesses that refuse to be left behind. Deep technical expertise. Strategic thinking. Real results.",
  },
  twitter: {
    title: "Who We Are | ByteShift Labs",
    description:
      "ByteShift Labs is a lean, expert IT consultancy built for businesses that refuse to be left behind. Deep technical expertise. Strategic thinking. Real results.",
  },
}

export default function WhoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
