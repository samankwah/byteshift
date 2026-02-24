export interface CaseStudy {
  slug: string
  result: string
  title: string
  tags: string[]
  client: string
  industry: string
  duration: string
  services: string[]
  summary: string
  about: string
  challengeIntro?: string
  challengePoints: string[]
  solutionIntro?: string
  solutionPoints: { title: string; description: string }[]
  approachIntro?: string
  approachSteps: { phase: string; description: string }[]
  techStack: string[]
  outcomes: { metric: string; label: string }[]
  keyTakeaway: string
  showcaseImage?: string
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
    summary:
      "We migrated 40+ live financial services to AWS over six structured sprints with zero downtime — cutting infrastructure costs by 40% and unlocking the scalability the business needed to grow.",
    about:
      "A fast-scaling FinTech firm running aging on-premise infrastructure, consuming 28% of operational budget on IT alone, with no path to reliable uptime or growth.",
    challengeIntro:
      "The client needed to exit aging on-premise infrastructure without disrupting 40+ live financial services or compromising regulatory compliance. The migration required to:",
    challengePoints: [
      "Migrate 40+ live services without downtime",
      "Cut infrastructure spend by at least 30%",
      "Meet financial compliance requirements in the cloud",
      "Upskill internal team to manage cloud-native infrastructure",
    ],
    solutionIntro:
      "We migrated 40+ live services to AWS using a phased, zero-downtime approach guided by the Well-Architected Framework. Key aspects of the solution included:",
    solutionPoints: [
      {
        title: "Well-Architected Foundation",
        description:
          "Mapped every workload to an AWS equivalent using the Well-Architected Framework before touching a single server.",
      },
      {
        title: "Phased Migration Sprints",
        description:
          "Ran six parallel migration sprints with shadow environments to eliminate downtime risk.",
      },
      {
        title: "Cost Governance Tooling",
        description:
          "Implemented AWS Cost Explorer, budgets, and tagging policies to maintain ongoing cost visibility.",
      },
      {
        title: "Compliance Guardrails",
        description:
          "Embedded security controls and audit logging at the infrastructure layer from day one.",
      },
    ],
    approachIntro:
      "We designed a risk-averse migration strategy built around AWS Well-Architected principles, moving services in structured sprints to ensure zero disruption to live financial operations.",
    approachSteps: [
      {
        phase: "Discovery & Audit",
        description:
          "Inventoried all 40+ services, mapped dependencies, and graded migration complexity.",
      },
      {
        phase: "Architecture Design",
        description:
          "Designed target AWS architecture with redundancy, auto-scaling, and managed databases.",
      },
      {
        phase: "Phased Migration",
        description:
          "Migrated in six sprints — dev environments first, then staging, then production — with rollback plans.",
      },
      {
        phase: "Handover & Training",
        description:
          "Ran a structured handover with documentation and hands-on training for the internal team.",
      },
    ],
    techStack: ["AWS", "Terraform", "RDS", "CloudWatch", "IAM", "S3"],
    outcomes: [
      { metric: "40%", label: "Reduction in infrastructure costs" },
      { metric: "99.95%", label: "Uptime post-migration" },
      { metric: "3×", label: "Faster deployment cycles" },
      { metric: "6 mo", label: "Full migration timeline" },
    ],
    keyTakeaway:
      "Cloud migration is as much a process discipline problem as a technology problem — phasing and rollback planning made the difference between a smooth migration and a disaster.",
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
    summary:
      "We redesigned the security posture of a regional healthcare provider — deploying zero-trust architecture, encrypting all patient data, and training staff across three hospital sites — resulting in zero breaches and full HIPAA compliance in 12 months.",
    about:
      "A regional healthcare provider with 200+ endpoints, two prior security incidents, and growing HIPAA compliance pressure needed to rethink its entire security posture.",
    challengeIntro:
      "After two security incidents in 18 months, the healthcare provider needed a complete security overhaul addressing both technical vulnerabilities and human risk factors. The new security posture had to:",
    challengePoints: [
      "Replace legacy perimeter-based security with zero-trust",
      "Achieve and maintain HIPAA compliance across all systems",
      "Secure 200+ endpoints across three hospital sites",
      "Train staff to recognise and report threats",
    ],
    solutionIntro:
      "We deployed a comprehensive, multi-layered security architecture across the client's three hospital sites in four months. Key aspects of the solution included:",
    solutionPoints: [
      {
        title: "Zero-Trust Architecture",
        description:
          "Designed and implemented identity-aware access controls so every request is verified regardless of network location.",
      },
      {
        title: "Data Encryption",
        description:
          "Encrypted all data in transit and at rest across every system handling patient information.",
      },
      {
        title: "Real-Time SIEM Monitoring",
        description:
          "Deployed a Security Information and Event Management platform for continuous threat detection.",
      },
      {
        title: "Staff Awareness Programme",
        description:
          "Delivered tailored security training across all three hospital sites, reducing phishing susceptibility by 70%.",
      },
    ],
    approachIntro:
      "We built a layered defence strategy, combining zero-trust architecture, real-time monitoring, and staff awareness to address every dimension of the client's security risk.",
    approachSteps: [
      {
        phase: "Security Audit",
        description:
          "Ran a full audit across 200+ endpoints, mapped attack surfaces, and produced a prioritised risk register.",
      },
      {
        phase: "Architecture Design",
        description:
          "Designed zero-trust access model with HIPAA compliance mapped to every recommendation.",
      },
      {
        phase: "Deployment",
        description:
          "Rolled out controls in parallel across sites to avoid operational disruption.",
      },
      {
        phase: "Training & Handover",
        description:
          "Delivered staff training and a managed monitoring service with a 4-hour incident SLA.",
      },
    ],
    techStack: ["Zero-Trust", "SIEM", "HIPAA Controls", "MFA", "Endpoint EDR", "Encryption"],
    outcomes: [
      { metric: "0", label: "Security breaches in 12 months" },
      { metric: "100%", label: "HIPAA compliance achieved" },
      { metric: "200+", label: "Endpoints secured" },
      { metric: "4 mo", label: "Deployment timeline" },
    ],
    keyTakeaway:
      "Security is not a one-time project — the monitoring and training programme we left behind is what sustains zero breaches over 12 months.",
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
    summary:
      "We built a bespoke ERP platform — unifying five spreadsheets and two SaaS tools into one system — delivering real-time fleet visibility, automated billing, and a mobile driver app that drove a 30% efficiency gain.",
    about:
      "A fast-growing logistics company managing operations across five spreadsheets and two disconnected SaaS tools, unable to get real-time visibility into fleet, orders, or billing.",
    challengeIntro:
      "With operations scattered across five spreadsheets and two disconnected SaaS tools, the company had no single source of truth for orders, fleet, or billing. The new platform needed to:",
    challengePoints: [
      "Unify five spreadsheets and two SaaS tools into one platform",
      "Give operations managers real-time fleet and warehouse visibility",
      "Automate billing and reduce invoice errors",
      "Build a mobile app for field drivers",
    ],
    solutionIntro:
      "We built a bespoke, modular ERP platform that unified every operational workflow into a single system. Key aspects of the solution included:",
    solutionPoints: [
      {
        title: "Unified ERP Platform",
        description:
          "Built a modular ERP covering order management, fleet tracking, warehouse inventory, and financial reporting in one interface.",
      },
      {
        title: "Real-Time Dashboards",
        description:
          "Delivered live operations dashboards so managers can see fleet location, order status, and stock levels at a glance.",
      },
      {
        title: "Automated Billing",
        description:
          "Automated invoice generation from order data, eliminating manual entry and reducing billing errors to near zero.",
      },
      {
        title: "Driver Mobile App",
        description:
          "Built a mobile-first field app for drivers with job cards, delivery confirmation, and GPS check-in.",
      },
    ],
    approachIntro:
      "We took a discovery-first approach — embedding with operations teams before writing a line of code — then built and delivered in monthly sprints with working demos at every stage.",
    approachSteps: [
      {
        phase: "Discovery & Process Mapping",
        description:
          "Embedded with operations teams for two weeks to map every workflow before writing code.",
      },
      {
        phase: "Architecture & Modular Design",
        description:
          "Designed a modular architecture so departments could adopt incrementally without disruption.",
      },
      {
        phase: "Build & Iterate",
        description:
          "Delivered in monthly sprints with working demos after each sprint for stakeholder sign-off.",
      },
      {
        phase: "Go-Live & Support",
        description:
          "Rolled out department-by-department with a 90-day hypercare support period.",
      },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "React Native", "REST APIs", "AWS"],
    outcomes: [
      { metric: "30%", label: "Operational efficiency gain" },
      { metric: "80%", label: "Reduction in manual data entry" },
      { metric: "Real-time", label: "Fleet & inventory visibility" },
      { metric: "9 mo", label: "End-to-end delivery" },
    ],
    keyTakeaway:
      "Two weeks of process discovery before writing code saved months of rework — building the right thing mattered more than building fast.",
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
    summary:
      "We designed and built a cross-platform mobile banking app from concept to live launch in 8 months — with biometric auth, real-time transactions, and full Central Bank compliance — processing 2M+ transactions in year one.",
    about:
      "A digital-first bank needed a cross-platform mobile app with biometric auth, real-time transactions, and regulatory compliance — delivered against an aggressive go-to-market deadline.",
    challengeIntro:
      "The digital bank needed a compliant, high-performance mobile app to serve a growing customer base against an aggressive go-to-market timeline. The app had to:",
    challengePoints: [
      "Build iOS and Android from a single codebase",
      "Integrate with core banking system via API",
      "Pass Central Bank digital banking compliance review",
      "Launch within 8 months from project start",
    ],
    solutionIntro:
      "We delivered a full-featured cross-platform banking app from a single React Native codebase within the agreed eight-month timeline. Key aspects of the solution included:",
    solutionPoints: [
      {
        title: "React Native Single Codebase",
        description:
          "Used React Native to deliver feature-parity iOS and Android apps from one codebase, halving QA effort.",
      },
      {
        title: "Biometric & Secure Auth",
        description:
          "Implemented Face ID, Touch ID, and 2FA with encrypted token storage compliant with banking regulations.",
      },
      {
        title: "Real-Time Transaction Engine",
        description:
          "Built a WebSocket-driven transaction feed with push notifications for instant spend alerts.",
      },
      {
        title: "Core Banking Integration",
        description:
          "Designed a secure API gateway layer connecting the app to the bank's legacy core banking system with zero data loss.",
      },
    ],
    approachIntro:
      "We structured the project to eliminate inter-team dependencies from day one, running API design and mobile development in parallel to maintain speed without sacrificing quality or compliance.",
    approachSteps: [
      {
        phase: "Discovery & Compliance Mapping",
        description:
          "Mapped Central Bank requirements early to ensure the architecture was compliant before a line was written.",
      },
      {
        phase: "API Design",
        description:
          "Designed the API layer in parallel with the mobile app so both teams could move independently.",
      },
      {
        phase: "Build & Test",
        description:
          "Eight two-week sprints with automated UI testing and weekly stakeholder demos.",
      },
      {
        phase: "Launch & Monitoring",
        description:
          "Staged rollout starting with 500 beta users, expanded to full launch after 4 weeks of stability.",
      },
    ],
    techStack: ["React Native", "Node.js", "WebSockets", "PostgreSQL", "AWS", "Biometrics API"],
    outcomes: [
      { metric: "2M+", label: "Transactions processed in year 1" },
      { metric: "4.7★", label: "App Store rating" },
      { metric: "iOS & Android", label: "Single codebase deployment" },
      { metric: "8 mo", label: "Concept to live launch" },
    ],
    keyTakeaway:
      "Designing the API layer in parallel with the mobile app removed the biggest bottleneck — neither team ever had to wait for the other.",
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
    summary:
      "We redesigned and deployed a resilient SD-WAN network across 30+ retail locations, eliminating point-of-sale outages and achieving 99.9% uptime with centralised 24/7 monitoring.",
    about:
      "A retail chain with 30+ locations experiencing frequent point-of-sale outages and no centralised network visibility. Every outage meant lost transactions and frustrated staff.",
    challengeIntro:
      "With 30+ retail locations experiencing frequent POS outages and no centralised network visibility, every incident meant lost revenue and frustrated staff. The new infrastructure had to:",
    challengePoints: [
      "Eliminate POS outages across 30+ retail locations",
      "Standardise hardware across all sites",
      "Implement centralised monitoring with a 4-hour response SLA",
      "Minimise disruption to trading hours during rollout",
    ],
    solutionIntro:
      "We deployed a resilient SD-WAN network across all 30+ retail locations using a standardised blueprint validated at pilot sites before full rollout. Key aspects of the solution included:",
    solutionPoints: [
      {
        title: "SD-WAN Deployment",
        description:
          "Deployed a software-defined WAN with dual-link failover so any single connection failure is invisible to the business.",
      },
      {
        title: "Standardised Site Blueprint",
        description:
          "Created a repeatable hardware and config blueprint applied identically across all 30+ sites.",
      },
      {
        title: "Centralised NOC",
        description:
          "Set up a Network Operations Centre with 24/7 monitoring and automated alerting for any anomaly.",
      },
      {
        title: "Rolling Rollout Plan",
        description:
          "Deployed in batches of 5 sites per week, always outside trading hours, with a rollback plan for each site.",
      },
    ],
    approachIntro:
      "We designed a standardised deployment blueprint, validated it at two pilot sites, then rolled it out in weekly batches across all 30+ locations to maintain trading continuity throughout.",
    approachSteps: [
      {
        phase: "Site Assessment",
        description:
          "Visited and audited all 30+ locations to document existing infrastructure and identify failure points.",
      },
      {
        phase: "Blueprint Design",
        description:
          "Designed the standardised SD-WAN blueprint and tested it at two pilot sites before full rollout.",
      },
      {
        phase: "Rolling Deployment",
        description:
          "Deployed 5–6 sites per week in batches outside trading hours over 5 months.",
      },
      {
        phase: "NOC Handover",
        description:
          "Handed over to a managed NOC service with documented runbooks and a 4-hour SLA.",
      },
    ],
    techStack: ["SD-WAN", "Cisco Meraki", "VLANs", "BGP", "SNMP Monitoring", "Managed Switches"],
    outcomes: [
      { metric: "99.9%", label: "Network uptime achieved" },
      { metric: "30+", label: "Locations upgraded" },
      { metric: "£0", label: "Transaction loss since go-live" },
      { metric: "5 mo", label: "Full rollout timeline" },
    ],
    keyTakeaway:
      "A standardised site blueprint was the unlock — once the pilot was validated, every subsequent deployment was fast, predictable, and low-risk.",
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
    summary:
      "We produced a three-horizon digital transformation roadmap for a government agency, then led delivery of the first two horizons — digitising 15 citizen services, integrating three legacy databases, and establishing an in-house digital team.",
    about:
      "A government agency delivering citizen services through paper-based processes with multi-week backlogs, siloed departments, and limited internal digital capability despite available budget.",
    challengeIntro:
      "Despite available budget and clear appetite for change, paper-based processes and siloed systems were creating multi-week service backlogs across the agency. The transformation programme had to:",
    challengePoints: [
      "Map 80+ citizen journeys across siloed departments",
      "Digitise the highest-volume services first to show fast ROI",
      "Build internal digital capability to reduce dependency on consultants",
      "Align leadership and frontline staff around a shared transformation agenda",
    ],
    solutionIntro:
      "We produced a three-horizon transformation roadmap and then led delivery of the first two horizons alongside the client's new internal team. Key aspects of the solution included:",
    solutionPoints: [
      {
        title: "Three-Horizon Roadmap",
        description:
          "Produced a prioritised roadmap with quick wins (0–3 months), medium-term initiatives (3–12 months), and long-term programmes.",
      },
      {
        title: "15 Services Digitised",
        description:
          "Led implementation of the first two roadmap horizons, fully digitising 15 high-volume citizen services.",
      },
      {
        title: "Internal Digital Unit",
        description:
          "Established and trained an in-house digital team to own ongoing delivery and reduce consultant dependency.",
      },
      {
        title: "Legacy Database Integration",
        description:
          "Integrated three previously siloed legacy databases, eliminating duplicate data entry for frontline staff.",
      },
    ],
    approachIntro:
      "We combined deep discovery with structured delivery — interviewing frontline staff, mapping citizen journeys, and producing a costed roadmap before leading implementation of the first two horizons.",
    approachSteps: [
      {
        phase: "Discovery & Journey Mapping",
        description:
          "Interviewed 40+ staff and mapped 80+ citizen journeys to identify the highest-impact digitisation opportunities.",
      },
      {
        phase: "Roadmap Design",
        description:
          "Produced a three-horizon roadmap with business cases for each initiative, signed off by the executive team.",
      },
      {
        phase: "Horizon 1 & 2 Delivery",
        description:
          "Led delivery of the first two roadmap horizons over 12 months alongside the client's new internal team.",
      },
      {
        phase: "Capability Handover",
        description:
          "Embedded a digital practice framework so the agency could continue delivery independently.",
      },
    ],
    techStack: ["Gov.uk Design System", "Python", "PostgreSQL", "REST APIs", "Azure", "Power BI"],
    outcomes: [
      { metric: "3×", label: "Faster average service delivery" },
      { metric: "15", label: "Services fully digitised" },
      { metric: "60%", label: "Reduction in processing backlogs" },
      { metric: "12 mo", label: "Roadmap to delivery" },
    ],
    keyTakeaway:
      "The roadmap was only as valuable as the internal team left behind to deliver it — building capability was as important as building the services.",
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
