"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "ByteShift Labs completely transformed our IT infrastructure. Their cloud migration was seamless, and we've seen a 40% reduction in downtime since.",
    author: "Kwame Asante",
    position: "CTO, Accra FinTech Ltd",
    image: "/placeholder-user.jpg",
  },
  {
    quote:
      "Their cybersecurity audit uncovered vulnerabilities we didn't even know existed. ByteShift Labs gave us the peace of mind to scale with confidence.",
    author: "Sarah Mensah",
    position: "CEO, MedCore Health",
    image: "/placeholder-user.jpg",
  },
  {
    quote:
      "The custom ERP they built for us replaced three legacy systems and cut our admin overhead in half. Exceptional team, exceptional results.",
    author: "David Osei",
    position: "Operations Director, SwiftLogistics",
    image: "/placeholder-user.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

