"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Search, Map, Wrench, Rocket, HeartHandshake, Eye, Users, Target } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We begin with a deep-dive into your business, existing tech stack, team structure, and strategic goals. No assumptions — only evidence.",
  },
  {
    number: "02",
    title: "Strategise",
    icon: Map,
    description:
      "We build a clear, prioritised roadmap tailored to your needs and budget. You get options, trade-offs, and a recommendation — not a black box.",
  },
  {
    number: "03",
    title: "Build",
    icon: Wrench,
    description:
      "We execute with precision using agile delivery cycles, weekly check-ins, and a bias for shipping working software over slide decks.",
  },
  {
    number: "04",
    title: "Deploy",
    icon: Rocket,
    description:
      "Seamless go-live with zero-downtime deployments, comprehensive documentation, and handover sessions so your team is never left in the dark.",
  },
  {
    number: "05",
    title: "Support",
    icon: HeartHandshake,
    description:
      "We don't disappear after launch. Ongoing monitoring, proactive maintenance, and continuous improvement keep your systems healthy and evolving.",
  },
]

const benefits = [
  {
    icon: Eye,
    title: "Transparent",
    description: "You always know what we're working on, what's coming next, and where every pound is going.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as an extension of your team — not a distant vendor sending invoices.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision is tied to a business outcome. We don't build for the sake of building.",
  },
]

export default function HowPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-background py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
            {...fadeIn}
          >
            Our Methodology
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-7xl font-bold leading-tight mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            How We Work
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A structured, transparent engagement model designed to eliminate surprises and deliver real results —
            from the first conversation to ongoing support.
          </motion.p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold text-foreground mb-4">The Process</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Five clear phases. No black boxes, no guesswork.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1
              return (
                <motion.div
                  key={step.number}
                  className={`flex flex-col sm:flex-row gap-6 items-start p-8 rounded-2xl border border-border ${
                    isEven ? "bg-muted" : "bg-card"
                  }`}
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                >
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <span className={`text-5xl font-black tabular-nums ${isEven ? "text-primary" : "text-primary/30"}`}>
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isEven ? "bg-primary/20" : "bg-primary/10"}`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="bg-muted py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Why It Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our approach is built on three commitments we make to every client.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  className="bg-background rounded-2xl p-8 border border-border"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20 px-6 text-center">
        <motion.div className="max-w-2xl mx-auto" {...fadeIn}>
          <h2 className="text-4xl font-bold text-background mb-4">
            Let&apos;s start with a conversation
          </h2>
          <p className="text-background/70 text-lg mb-8">
            No commitment required. Just a straightforward chat about what you&apos;re trying to achieve.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-full bg-background text-foreground font-semibold text-lg hover:bg-muted transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
