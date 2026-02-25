import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real client engagements. Measurable outcomes. Explore how ByteShift Labs has delivered cloud migrations, cybersecurity overhauls, custom software, and digital transformation programmes.",
  openGraph: {
    title: "Case Studies | ByteShift Labs",
    description:
      "Real client engagements. Measurable outcomes. Explore how ByteShift Labs has delivered cloud migrations, cybersecurity overhauls, custom software, and digital transformation programmes.",
  },
  twitter: {
    title: "Case Studies | ByteShift Labs",
    description:
      "Real client engagements. Measurable outcomes. Explore how ByteShift Labs has delivered cloud migrations, cybersecurity overhauls, custom software, and digital transformation programmes.",
  },
}

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
