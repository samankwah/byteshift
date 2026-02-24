export interface CaseStudy {
  slug: string
  result: string
  title: string
  tags: string[]
  client: string
  industry: string
  duration: string
  services: string[]
  challenge: string
  approach: string
  solution: string
  outcomes: { metric: string; label: string }[]
  testimonial?: { quote: string; author: string; role: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cloud-migration-fintech",
    result: "40% Cost Reduction",
    title: "Cloud Migration for FinTech Firm",
    tags: ["Cloud", "FinTech", "AWS"],
    client: "FinTech Client",
    industry: "Financial Services",
    duration: "6 months",
    services: ["Cloud Architecture", "AWS Migration", "Cost Optimisation"],
    challenge:
      "The client was running aging on-premise infrastructure that required constant maintenance, suffered from unpredictable downtime, and was scaling poorly with rapid business growth. IT costs were consuming 28% of operational budget.",
    approach:
      "We conducted a comprehensive audit of existing workloads, mapped each service to a suitable AWS equivalent, and built a phased migration plan to ensure zero disruption to live financial operations. Security and compliance were embedded at every stage.",
    solution:
      "Using AWS Well-Architected principles, we migrated 40+ services to a fully managed cloud environment — including auto-scaling compute, managed databases, and a centralised monitoring stack — over six structured sprints with parallel testing environments.",
    outcomes: [
      { metric: "40%", label: "Reduction in infrastructure costs" },
      { metric: "99.95%", label: "Uptime post-migration" },
      { metric: "3×", label: "Faster deployment cycles" },
      { metric: "6 mo", label: "Full migration timeline" },
    ],
    testimonial: {
      quote:
        "ByteShift Labs made what felt like an impossible undertaking look effortless. Our costs dropped immediately and our team can finally focus on building products instead of fighting infrastructure.",
      author: "James Owusu",
      role: "CTO, FinTech Client",
    },
  },
  {
    slug: "cybersecurity-overhaul",
    result: "Zero Breaches, 12 Months",
    title: "Enterprise Cybersecurity Overhaul",
    tags: ["Cybersecurity", "Healthcare", "Zero-Trust"],
    client: "Healthcare Provider",
    industry: "Healthcare",
    duration: "4 months",
    services: ["Security Audit", "Zero-Trust Architecture", "Staff Training"],
    challenge:
      "A regional healthcare provider had suffered two minor security incidents in 18 months and faced increasing regulatory pressure around patient data protection. Legacy perimeter-based security was leaving critical systems exposed.",
    approach:
      "We performed a full security audit across 200+ endpoints, mapped attack surfaces, and designed a zero-trust architecture that treats every access request as untrusted — regardless of network location. Compliance mapping against HIPAA was built into every recommendation.",
    solution:
      "Deployed identity-aware access controls, encrypted all data in transit and at rest, implemented real-time threat monitoring via SIEM, and ran a tailored staff security awareness programme across three hospital sites.",
    outcomes: [
      { metric: "0", label: "Security breaches in 12 months" },
      { metric: "100%", label: "HIPAA compliance achieved" },
      { metric: "200+", label: "Endpoints secured" },
      { metric: "4 mo", label: "Deployment timeline" },
    ],
    testimonial: {
      quote:
        "We went from worrying about the next breach to confidently passing our compliance audit. The ByteShift team brought both technical depth and a calm, structured approach that our staff trusted.",
      author: "Dr. Akosua Mensah",
      role: "Head of IT, Healthcare Provider",
    },
  },
  {
    slug: "custom-erp-development",
    result: "30% Ops Efficiency Gain",
    title: "Custom ERP Development",
    tags: ["Software", "Logistics", "ERP"],
    client: "Logistics Company",
    industry: "Logistics & Supply Chain",
    duration: "9 months",
    services: ["Custom Software Development", "ERP Integration", "Process Automation"],
    challenge:
      "A fast-growing logistics company was managing operations across five spreadsheets and two disconnected SaaS tools. Manual data entry was causing order errors, billing delays, and an inability to get real-time visibility into fleet and warehouse status.",
    approach:
      "We embedded with operations teams for two weeks to map every workflow end-to-end before writing a single line of code. The architecture was modular by design so departments could adopt the system incrementally without disrupting live operations.",
    solution:
      "Built a bespoke ERP platform — covering order management, fleet tracking, warehouse inventory, and financial reporting — with a unified dashboard and API integrations to the client's existing tools. Mobile-first field app included for drivers.",
    outcomes: [
      { metric: "30%", label: "Operational efficiency gain" },
      { metric: "80%", label: "Reduction in manual data entry" },
      { metric: "Real-time", label: "Fleet & inventory visibility" },
      { metric: "9 mo", label: "End-to-end delivery" },
    ],
  },
  {
    slug: "mobile-banking-app",
    result: "2M Transactions Processed",
    title: "Mobile Banking App",
    tags: ["Mobile App", "FinTech", "React Native"],
    client: "Digital Bank",
    industry: "Financial Services",
    duration: "8 months",
    services: ["Mobile Development", "API Design", "Security Engineering"],
    challenge:
      "A digital-first bank needed a cross-platform mobile app to serve a growing customer base, with real-time transaction tracking, biometric authentication, and compliance with Central Bank digital banking guidelines — all within an aggressive go-to-market deadline.",
    approach:
      "We used React Native for a single codebase across iOS and Android, prioritised the critical user journeys first, and built a security-first API layer in parallel so both teams could move independently without blockers.",
    solution:
      "Delivered a full-featured banking app with biometric login, real-time push notifications, spending analytics, P2P transfers, and bill payments — backed by a microservices API and integrated with the bank's core banking system.",
    outcomes: [
      { metric: "2M+", label: "Transactions processed in year 1" },
      { metric: "4.7★", label: "App Store rating" },
      { metric: "iOS & Android", label: "Single codebase deployment" },
      { metric: "8 mo", label: "Concept to live launch" },
    ],
    testimonial: {
      quote:
        "The app launched on time, performed flawlessly under load, and our customers love it. ByteShift delivered a product we're genuinely proud of.",
      author: "Kwame Asante",
      role: "CEO, Digital Bank",
    },
  },
  {
    slug: "network-infrastructure-redesign",
    result: "99.9% Uptime Achieved",
    title: "Network Infrastructure Redesign",
    tags: ["Infrastructure", "Retail", "Networking"],
    client: "Retail Chain",
    industry: "Retail",
    duration: "5 months",
    services: ["Network Design", "Multi-Site Deployment", "Monitoring & NOC"],
    challenge:
      "A retail chain with 30+ locations was experiencing frequent network outages at point-of-sale, costing thousands in lost transactions per incident. The existing network had no redundancy, inconsistent hardware across sites, and no centralised monitoring.",
    approach:
      "We conducted a site-by-site assessment across all locations, designed a standardised network blueprint with full redundancy, and planned deployments in rolling batches to avoid any single site going dark during trading hours.",
    solution:
      "Deployed a resilient multi-site SD-WAN network across all 30+ locations with dual-link failover, centralised NOC monitoring, and standardised managed switches and access points. A 4-hour SLA with on-call support was built into the managed service agreement.",
    outcomes: [
      { metric: "99.9%", label: "Network uptime achieved" },
      { metric: "30+", label: "Locations upgraded" },
      { metric: "£0", label: "Transaction loss since go-live" },
      { metric: "5 mo", label: "Full rollout timeline" },
    ],
  },
  {
    slug: "digital-transformation-roadmap",
    result: "3× Faster Service Delivery",
    title: "Digital Transformation Roadmap",
    tags: ["Consulting", "Government", "Digital Strategy"],
    client: "Government Agency",
    industry: "Public Sector",
    duration: "12 months",
    services: ["Digital Strategy", "Process Re-engineering", "Change Management"],
    challenge:
      "A government agency was delivering citizen services through largely paper-based processes with backlogs stretching weeks. Siloed departments, legacy systems, and limited internal digital capability were blocking modernisation efforts despite budget approval.",
    approach:
      "We took a discovery-first approach — interviewing 40+ staff members, mapping 80+ citizen journeys, and benchmarking against comparable digital government transformations globally — before producing a prioritised, costed roadmap with quick wins alongside multi-year initiatives.",
    solution:
      "Delivered a three-horizon digital transformation roadmap, led implementation of the first two horizons in-house (digitising 15 high-volume services, integrating three legacy databases, and establishing an internal digital unit), and provided ongoing advisory as the agency scaled independently.",
    outcomes: [
      { metric: "3×", label: "Faster average service delivery" },
      { metric: "15", label: "Services fully digitised" },
      { metric: "60%", label: "Reduction in processing backlogs" },
      { metric: "12 mo", label: "Roadmap to delivery" },
    ],
    testimonial: {
      quote:
        "ByteShift Labs brought the rigour of a strategy firm and the execution capability of a tech company. They didn't just hand us a document — they built with us.",
      author: "Ama Boateng",
      role: "Director of Transformation, Government Agency",
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((cs) => cs.slug === slug)
  return caseStudies[(index + 1) % caseStudies.length]
}
