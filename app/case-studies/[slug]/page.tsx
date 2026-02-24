import { notFound } from "next/navigation"
import { getCaseStudy, getNextCaseStudy } from "@/app/lib/case-studies"
import CaseStudyDetail from "./client"

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
