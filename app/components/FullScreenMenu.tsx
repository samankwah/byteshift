"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: "How", href: "/how" },
  { label: "Who", href: "/who" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Let's Talk", href: "/#contact" },
]

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            className="fixed top-0 left-0 h-full w-72 bg-background z-50 flex flex-col shadow-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <img
                src="/byteshift-high-resolution-logo-transparent.png"
                alt="ByteShift Labs"
                className="h-8 w-auto"
              />
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 py-4 overflow-y-auto">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  <div className="mx-5 border-b border-border/50" />
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-5 py-5 border-t border-border">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} ByteShift Labs
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
