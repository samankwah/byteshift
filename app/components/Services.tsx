"use client"

import { motion } from "framer-motion"
import { Code, Shield, Cloud, Smartphone, Network, Cpu } from "lucide-react"

const services = [
  {
    icon: <Cloud className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Cloud Solutions",
    description: "Migrate, optimise, and manage your infrastructure with modern cloud-first strategies.",
  },
  {
    icon: <Shield className="w-12 h-12 mb-4 text-green-500" />,
    title: "Cybersecurity",
    description: "Protect your business with robust threat detection, risk assessments, and security frameworks.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Software Development",
    description: "Custom web and enterprise software built to solve your unique business challenges.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
  },
  {
    icon: <Network className="w-12 h-12 mb-4 text-red-400" />,
    title: "IT Infrastructure",
    description: "Network design, deployment, and managed support for businesses of every size.",
  },
  {
    icon: <Cpu className="w-12 h-12 mb-4 text-cyan-500" />,
    title: "Digital Transformation",
    description: "End-to-end consulting to modernise your operations and accelerate growth through technology.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

