import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getCaseStudy, getNextCaseStudy } from "@/app/lib/case-studies"
import CaseStudyDetail from "./client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return { title: "Case Study Not Found" }
  return {
    title: cs.title,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} | ByteShift Labs`,
      description: cs.summary,
      type: "article",
      ...(cs.showcaseImage && {
        images: [{ url: cs.showcaseImage, width: 1200, height: 680, alt: cs.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.title} | ByteShift Labs`,
      description: cs.summary,
      ...(cs.showcaseImage && { images: [cs.showcaseImage] }),
    },
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudy(slug)

  if (!cs) notFound()

  const next = getNextCaseStudy(slug)

  return <CaseStudyDetail cs={cs} next={next} />
}
