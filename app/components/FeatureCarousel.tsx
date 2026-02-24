"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Expert-Led Consulting",
    description: "Our certified IT professionals bring real-world experience across industries to solve your toughest challenges.",
    icon: "🧠",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support ensures your systems are always up and running.",
    icon: "🛡️",
  },
  {
    title: "Scalable Solutions",
    description: "Technology that grows with your business — from startup to enterprise, we've got you covered.",
    icon: "📈",
  },
  {
    title: "Cloud-First Approach",
    description: "Leverage the power of AWS, Azure, and GCP for flexible, cost-efficient infrastructure.",
    icon: "☁️",
  },
  {
    title: "Data-Driven Insights",
    description: "Make smarter decisions with real-time analytics, dashboards, and business intelligence tools.",
    icon: "📊",
  },
  {
    title: "Security by Design",
    description: "Security is baked into every solution — not bolted on as an afterthought.",
    icon: "🔒",
  },
]

const CARD_WIDTH = 300
const GAP = 16

export default function FeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return
    const clamped = Math.max(0, Math.min(index, features.length - 1))
    scrollRef.current.scrollTo({
      left: clamped * (CARD_WIDTH + GAP),
      behavior: "smooth",
    })
    setActiveIndex(clamped)
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    const maxScroll = scrollWidth - clientWidth
    const ratio = maxScroll > 0 ? scrollLeft / maxScroll : 0
    setActiveIndex(Math.round(ratio * (features.length - 1)))
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why ByteShift Labs</h2>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] h-[400px] p-8 m-2 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10 snap-start"
            >
              <div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div className="mt-4">
                <a href="#contact" className="text-primary hover:underline">
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[0, 1].map((i) => {
            const activeDot = activeIndex < features.length / 2 ? 0 : 1
            return (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot ? "w-4 h-2 bg-primary" : "w-2 h-2 bg-border"
                }`}
              />
            )
          })}
        </div>

      </div>
    </div>
  )
}
