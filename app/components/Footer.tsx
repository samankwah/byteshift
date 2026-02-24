import Link from "next/link"
import { SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si"

const year = new Date().getFullYear()

const ctaLinks = [
  { label: "Read Our Blog", href: "/blog" },
  { label: "Subscribe To Our Newsletter", href: "/#newsletter" },
  { label: "Let's talk", href: "/#contact" },
]

const socialLinks = [
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiX, label: "X", href: "#" },
  { icon: SiYoutube, label: "YouTube", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Tagline */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground max-w-xl">
          Built by people who love what they do — and use AI to do it better.
        </h2>

        {/* CTA + Social row */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Pill buttons */}
          <div className="flex flex-wrap gap-3">
            {ctaLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-muted/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icon circles */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full border border-border p-2.5 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-border" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} ByteShift Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
