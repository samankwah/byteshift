"use client"

import type { ReactNode, ComponentType } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Shield,
  Activity,
  ShieldCheck,
  KeyRound,
  Monitor,
  Lock,
  Database,
  BarChart2,
  UserCheck,
  HardDrive,
  Wifi,
  Fingerprint,
  Globe,
  Network,
  GitMerge,
  Server,
  LayoutGrid,
  Code,
  Cpu,
  Cloud,
  PieChart,
} from "lucide-react"
import {
  SiAmazonwebservices,
  SiTerraform,
  SiPostgresql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiPython,
  SiCisco,
} from "react-icons/si"
import type { CaseStudy } from "@/app/lib/case-studies"

/* ── Tech icon registry ──────────────────────────────── */
type AnyIcon = ComponentType<{ size?: number; className?: string }>

const TECH_ICONS: Record<string, AnyIcon> = {
  // Brand icons (react-icons/si)
  AWS: SiAmazonwebservices as AnyIcon,
  Terraform: SiTerraform as AnyIcon,
  PostgreSQL: SiPostgresql as AnyIcon,
  "Next.js": SiNextdotjs as AnyIcon,
  "Node.js": SiNodedotjs as AnyIcon,
  "React Native": SiReact as AnyIcon,
  Python: SiPython as AnyIcon,
  Azure: Cloud,
  "Power BI": PieChart,
  "Cisco Meraki": SiCisco as AnyIcon,
  // AWS service icons → lucide fallbacks
  RDS: Database,
  CloudWatch: BarChart2,
  IAM: UserCheck,
  S3: HardDrive,
  // Security concepts → lucide
  "Zero-Trust": Shield,
  SIEM: Activity,
  "HIPAA Controls": ShieldCheck,
  MFA: KeyRound,
  "Endpoint EDR": Monitor,
  Encryption: Lock,
  // Protocol / generic
  "REST APIs": Code,
  WebSockets: Wifi,
  "Biometrics API": Fingerprint,
  "SD-WAN": Globe,
  VLANs: Network,
  BGP: GitMerge,
  "SNMP Monitoring": Activity,
  "Managed Switches": Server,
  "Gov.uk Design System": LayoutGrid,
}

function TechTile({ name }: { name: string }) {
  const Icon = TECH_ICONS[name]
  return (
    <div className="flex flex-col items-center gap-2.5 rounded-xl bg-muted/50 p-4 text-center hover:bg-muted transition-colors">
      <div className="flex h-10 w-10 items-center justify-center">
        {Icon ? (
          <Icon size={26} className="text-foreground/80" />
        ) : (
          <Cpu size={22} className="text-foreground/50" />
        )}
      </div>
      <span className="text-[11px] font-medium text-muted-foreground leading-tight">{name}</span>
    </div>
  )
}

/* ── Animation ───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

interface Props {
  cs: CaseStudy
  next: CaseStudy
}

/* ── Max-width token — tweak here to adjust column width */
const COL = "max-w-[880px]"

export default function CaseStudyDetail({ cs }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <motion.div
        className={`mx-auto ${COL} px-6 pt-28 pb-20`}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl font-black text-foreground leading-[1.1] mb-8 sm:text-5xl">
          {cs.title}
        </h1>
        <p className="text-lg font-semibold text-foreground leading-relaxed">{cs.summary}</p>
      </motion.div>

      {/* About */}
      <Sec col={COL}>
        <H2>About</H2>
        <p className="text-muted-foreground text-base leading-relaxed">{cs.about}</p>
      </Sec>

      {/* The Challenge */}
      <Sec col={COL}>
        <H2>The Challenge</H2>
        {cs.challengeIntro && (
          <p className="text-muted-foreground text-base leading-relaxed mb-6">{cs.challengeIntro}</p>
        )}
        <ul className="space-y-3">
          {cs.challengePoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1 shrink-0 text-muted-foreground text-base">•</span>
              <p className="font-bold text-foreground text-base leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </Sec>

      {/* The Solution */}
      <Sec col={COL}>
        <H2>The Solution</H2>
        {cs.solutionIntro && (
          <p className="text-muted-foreground text-base leading-relaxed mb-8">{cs.solutionIntro}</p>
        )}
        <ul className="space-y-6">
          {cs.solutionPoints.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="mt-1 shrink-0 text-muted-foreground text-base">•</span>
              <div>
                <p className="font-bold text-foreground mb-1">{item.title}</p>
                <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Sec>

      {/* Our Approach */}
      <Sec col={COL}>
        <h2 className="text-2xl font-bold text-foreground pb-5 mb-6 border-b border-border">
          Our Approach
        </h2>
        {cs.approachIntro && (
          <p className="text-muted-foreground text-base leading-relaxed mb-8">{cs.approachIntro}</p>
        )}
        <div className="space-y-3">
          {cs.approachSteps.map((step) => (
            <div
              key={step.phase}
              className="grid items-stretch gap-3 sm:grid-cols-[220px_1fr]"
            >
              <div className="flex items-center rounded-xl bg-muted p-5">
                <p className="font-bold text-foreground text-sm leading-snug">{step.phase}</p>
              </div>
              <div className="rounded-xl bg-muted p-5">
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Project Showcase Image (optional) */}
      {cs.showcaseImage && (
        <motion.div
          className={`mx-auto ${COL} px-6 pb-16 border-b border-border`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="rounded-2xl overflow-hidden bg-muted border border-border">
            <Image
              src={cs.showcaseImage}
              alt={`${cs.title} — project preview`}
              width={1200}
              height={680}
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Tech Stack */}
      <Sec col={COL}>
        <H2>Powerful Tech Stack</H2>
        <p className="text-muted-foreground text-sm mb-6">
          The tools and technologies that powered this engagement.
        </p>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
          {cs.techStack.map((tech) => (
            <TechTile key={tech} name={tech} />
          ))}
        </div>
      </Sec>

      {/* The Results */}
      <Sec col={COL}>
        <H2>The Results</H2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cs.outcomes.map((o) => (
            <div
              key={o.label}
              className="rounded-2xl bg-card border border-border p-6 flex items-start"
            >
              <p className="text-primary text-lg font-semibold leading-snug">
                {o.metric} {o.label}
              </p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Testimonial */}
      {cs.testimonial && (
        <Sec col={COL}>
          <blockquote className="border-l-2 border-primary/40 pl-5">
            <p className="text-base italic leading-relaxed text-muted-foreground mb-5">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </p>
            <footer>
              <p className="font-semibold text-foreground text-sm">{cs.testimonial.author}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{cs.testimonial.role}</p>
            </footer>
          </blockquote>
        </Sec>
      )}

      {/* Key Takeaway */}
      <Sec col={COL}>
        <p className="text-muted-foreground text-base leading-relaxed">
          <span className="font-bold text-foreground">Key Takeaway: </span>
          {cs.keyTakeaway}
        </p>
        <div className="mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            See all case studies
          </Link>
        </div>
      </Sec>

      {/* CTA strip */}
      <section className="bg-primary px-6 py-20">
        <div className={`mx-auto ${COL} flex flex-col items-start justify-between gap-10 md:flex-row md:items-center`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="max-w-lg text-3xl font-bold leading-snug text-primary-foreground sm:text-4xl">
              Ready to Build a{" "}
              <span className="underline decoration-primary-foreground/40 underline-offset-4">Smart Partnership?</span>
            </h2>
            <p className="mt-3 text-primary-foreground/70">Start your own transformation today.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>


    </main>
  )
}

/* ── Shared sub-components ───────────────────────────── */

function Sec({ children, col }: { children: ReactNode; col: string }) {
  return (
    <motion.section
      className={`mx-auto ${col} px-6 py-14`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  )
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-foreground border-b border-border pb-5 mb-6">
      {children}
    </h2>
  )
}
