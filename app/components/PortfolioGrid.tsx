"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    slug: "cloud-migration-fintech",
    title: "Cloud Migration for FinTech Firm",
    description: "Migrated legacy on-premise systems to AWS, reducing operational costs by 40%",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Cloud",
  },
  {
    id: 2,
    slug: "cybersecurity-overhaul",
    title: "Enterprise Cybersecurity Overhaul",
    description: "Full security audit and zero-trust framework implementation for a healthcare provider",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Cybersecurity",
  },
  {
    id: 3,
    slug: "custom-erp-development",
    title: "Custom ERP Development",
    description: "Built a bespoke ERP platform to streamline operations for a logistics company",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Software",
  },
  {
    id: 4,
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    description: "Cross-platform mobile application with real-time transaction tracking and biometric auth",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Mobile App",
  },
  {
    id: 5,
    slug: "network-infrastructure-redesign",
    title: "Network Infrastructure Redesign",
    description: "Designed and deployed a resilient multi-site network for a retail chain",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
  },
  {
    id: 6,
    slug: "digital-transformation-roadmap",
    title: "Digital Transformation Roadmap",
    description: "End-to-end consulting engagement to modernise a government agency's IT operations",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Consulting",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects where ByteShift Labs delivered measurable impact.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto scrollbar-hide border-b border-border mb-10 lg:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`shrink-0 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                filter === category
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <Link href={`/case-studies/${project.slug}`} className="block group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-white text-center px-4">{project.description}</p>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <span className="text-primary group-hover:underline inline-flex items-center">
                      View Case Study
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

