"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline"
import FullScreenMenu from "./FullScreenMenu"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">ByteShift Labs</span>
              <img
                className="h-7 w-auto sm:h-10"
                src="/byteshift-high-resolution-logo-transparent.png"
                alt="ByteShift Labs Logo"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex gap-x-12">
            <Link
              href="/how"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              How
            </Link>
            <Link
              href="/who"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Who
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="flex flex-1 justify-end items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            )}
            {/* Mobile hamburger */}
            <button
              className="lg:hidden rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
