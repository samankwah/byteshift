import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {[
            { label: "Services", href: "#services" },
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
          ].map((item) => (
            <div key={item.label} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center">
          <img
            src="/byteshift-high-resolution-logo-transparent.png"
            alt="ByteShift Labs"
            className="h-8 w-auto opacity-60"
          />
        </div>
        <p className="mt-4 text-center text-sm leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} ByteShift Labs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

