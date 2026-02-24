"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Shield, Lightbulb, TrendingUp } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We do what we say. No hidden agendas, no surprise invoices — just honest, transparent delivery.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the technology curve so your business doesn't have to. Emerging tech, applied practically.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "We measure success by your outcomes — not the hours we log or the lines of code we write.",
  },
]

export default function WhoPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-background py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
            {...fadeIn}
          >
            About ByteShift Labs
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-7xl font-bold leading-tight mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ByteShift Labs is a lean, expert IT consultancy built for businesses that refuse to be left behind. We
            combine deep technical expertise with strategic thinking to deliver solutions that actually move the needle.
          </motion.p>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-gray-200 dark:bg-gray-800 py-16 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          {...fadeIn}
        >
          <p className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold leading-snug">
            &ldquo;We exist to make world-class technology accessible to every business.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Three principles guide every project, every conversation, and every line of code.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 border border-border"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-muted dark:bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold leading-tight text-foreground">Our Story</h2>
          </motion.div>
          <motion.div
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>
              ByteShift Labs was founded on a simple observation: too many great businesses were being held back by
              technology that didn&apos;t serve them — either too bloated, too expensive, or simply the wrong fit.
            </p>
            <p>
              We started as a small team of engineers and consultants who had worked inside large enterprises and knew
              exactly what good looked like. We decided to bring that same rigour and expertise to ambitious businesses
              of all sizes — without the overhead of the big consultancies.
            </p>
            <p>
              Today, ByteShift Labs works with clients across fintech, healthcare, logistics, and the public sector,
              delivering everything from cloud migrations to bespoke software and cybersecurity frameworks. We&apos;re
              proud to be a team that ships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-20 px-6 text-center">
        <motion.div className="max-w-2xl mx-auto" {...fadeIn}>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s have a no-pressure conversation about where your business is headed.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
