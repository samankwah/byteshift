"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"
import type { CaseStudy } from "@/app/lib/case-studies"

/* ── Animated blob background ──────────────────────── */
function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0], scale: [1, 1.1, 0.92, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/10"
        animate={{ x: [0, -50, 30, 0], y: [0, 70, -40, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

interface Props {
  cs: CaseStudy
  next: CaseStudy
}

export default function CaseStudyDetail({ cs, next }: Props) {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background px-6 pb-24 pt-28 lg:px-8">
        <BlobBackground />
        <div className="relative mx-auto max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              href="/case-studies"
              className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All case studies
            </Link>

            <div className="mb-6 flex flex-wrap gap-2">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {cs.title}
            </h1>

            <p className="text-4xl font-black text-primary sm:text-5xl">{cs.result}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Overview strip ───────────────────────────── */}
      <section className="bg-muted px-6 py-14 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: "Client", value: cs.client },
            { label: "Industry", value: cs.industry },
            { label: "Duration", value: cs.duration },
            { label: "Services", value: cs.services.join(", ") },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08 } },
              }}
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {item.label}
              </p>
              <p className="text-base font-semibold text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Challenge ─────────────────────────────────── */}
      <TwoColSection bg="light" heading="The Challenge" body={cs.challenge} />

      {/* ── Approach ──────────────────────────────────── */}
      <TwoColSection bg="muted" heading="Our Approach" body={cs.approach} />

      {/* ── Solution ──────────────────────────────────── */}
      <TwoColSection bg="light" heading="The Solution" body={cs.solution} />

      {/* ── Outcomes ──────────────────────────────────── */}
      <section className="bg-muted px-6 py-20 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-12 text-3xl font-bold text-foreground sm:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Outcomes
          </motion.h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {cs.outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
                }}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <p className="mb-1 text-3xl font-black text-primary">{o.metric}</p>
                <p className="text-sm leading-snug text-muted-foreground">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────── */}
      {cs.testimonial && (
        <section className="bg-background px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-3xl font-bold italic leading-relaxed text-foreground sm:text-4xl">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <div className="mt-10 flex flex-col items-center gap-1">
                <p className="font-semibold text-primary">{cs.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{cs.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA strip ─────────────────────────────────── */}
      <section className="bg-gray-950 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="max-w-lg text-3xl font-bold leading-snug text-white sm:text-4xl">
              We&apos;re more than a vendor — we&apos;re your potential{" "}
              <span className="underline decoration-white/40 underline-offset-4">Growth Partner.</span>
            </h2>
            <p className="mt-3 text-gray-400">Start your own transformation today.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Next case study ───────────────────────────── */}
      <section className="border-t border-border bg-background px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Next case study
          </p>
          <Link href={`/case-studies/${next.slug}`} className="group inline-flex items-center gap-5">
            <span className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-3xl">
              {next.result}
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
              <ArrowRight className="h-4 w-4 text-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary-foreground" />
            </span>
          </Link>
          <p className="mt-2 text-muted-foreground">{next.title}</p>
        </div>
      </section>
    </main>
  )
}

/* ── Two-column body section ─────────────────────────── */
function TwoColSection({
  bg,
  heading,
  body,
}: {
  bg: "light" | "muted"
  heading: string
  body: string
}) {
  return (
    <section className={`px-6 py-20 lg:px-8 ${bg === "muted" ? "bg-muted dark:bg-gray-900" : "bg-background"}`}>
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <motion.h2
          className="text-2xl font-bold text-foreground sm:text-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {heading}
        </motion.h2>
        <motion.p
          className="text-base leading-relaxed text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {body}
        </motion.p>
      </div>
    </section>
  )
}
