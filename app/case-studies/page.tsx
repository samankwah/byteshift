"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/app/lib/case-studies"

/* ── Animated blob background ───────────────────────── */
function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-40 -top-60 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 80, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/10"
        animate={{ x: [0, -70, 30, 0], y: [0, 100, -60, 0], scale: [1, 0.88, 1.2, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10"
        animate={{ x: [0, 60, -90, 0], y: [0, -50, 40, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />
    </div>
  )
}

const rowVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
}

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <BlobBackground />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.p
            className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Studies
          </motion.p>
          <motion.h1
            className="max-w-4xl text-6xl font-black leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Shared Goals.
            <br />
            <span className="text-primary">Proven Results.</span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-lg text-xl leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real engagements. Measurable outcomes. A track record built one client partnership at a time.
          </motion.p>
        </div>
      </section>

      {/* ── Case study list ──────────────────────────── */}
      <section className="relative mx-auto max-w-5xl px-6 pb-4 lg:px-8">
        <div className="border-t border-border">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={rowVariants}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex items-center justify-between gap-8 border-b border-border py-10 transition-colors duration-200 hover:bg-muted/40"
              >
                {/* Left content */}
                <div className="min-w-0 flex-1">
                  <p className="text-3xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-4xl">
                    {cs.result}
                  </p>
                  <p className="mt-2 text-base text-muted-foreground">{cs.title}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {cs.tags.map((tag, idx) => (
                      <span key={tag} className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                        {idx > 0 && <span className="text-muted-foreground/40">·</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow circle */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                  <ArrowRight className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary-foreground" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ───────────────────────────────── */}
      <section className="relative mt-10 bg-gray-950">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-10 px-6 py-20 md:flex-row md:items-center lg:px-8">
          <motion.h2
            className="max-w-lg text-3xl font-bold leading-snug text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We&apos;re more than a vendor — we&apos;re your potential{" "}
            <span className="underline decoration-white/40 underline-offset-4">Growth Partner.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
    </main>
  )
}
