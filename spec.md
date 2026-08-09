# mirrahman.ca — Personal Portfolio Specification

## 1. Purpose

Build a fast, polished personal portfolio for **Mir Rahman**, a Senior Software Engineer and AWS-certified Solutions Architect based in Vancouver, BC.

This is the professional destination linked from Mir’s resume, LinkedIn profile, recruiter conversations, and job applications. It must quickly answer:

1. Who is Mir?
2. What kinds of systems has he designed and delivered?
3. What are his strongest technical and architecture capabilities?
4. How can a recruiter or hiring manager contact him or view his resume?

The site is not a company services site and not the technical-blog site. Those identities remain separate:

| Site | Purpose |
| --- | --- |
| `mirrahman.ca` | Mir’s personal professional profile, experience, projects, and contact details |
| `whywhywhy.ca` | Developer-learning articles and “Why?” series |
| `cloudynix.ca` | Cloudynix Technology Inc. company / consulting presence |

## 2. Audience and tone

Primary visitors are recruiters, hiring managers, engineering leaders, solution architects, and technical collaborators. Secondary visitors are prospective consulting clients and developers who discover Mir through his writing.

Tone: confident, precise, warm, senior, and human. Do not use generic marketing claims such as “passionate,” “world-class,” “rockstar,” or “10x.” Demonstrate impact through concise project narratives and concrete technologies. Keep sensitive product, customer, model, data volume, architecture, and commercial details out of the site.

## 3. Positioning and headline

### Primary headline

> Solutions Architect & Senior Software Engineer

### Supporting statement

> I design and deliver secure, scalable backend systems, cloud platforms, data workflows, and AI-assisted services for regulated and operationally demanding environments.

### Short professional summary

AWS-certified Solutions Architect and Senior Software Engineer with 12+ years of experience building cloud-native systems across financial services, payments, trading, insurance, industrial automation, IoT, and data platforms. Hands-on across C#, .NET, Python, TypeScript, AWS, Google Cloud, distributed systems, privacy engineering, and practical AI integration.

Use “Solutions Architect” (correct spelling) consistently in all site copy.

## 4. Tech stack and deployment

- Next.js (latest stable, App Router) with TypeScript
- Tailwind CSS
- Static-first implementation; no database, CMS, login, analytics, or server-side contact form is required for version one
- Deploy on Vercel
- Configure production domain: `mirrahman.ca`; redirect `www.mirrahman.ca` to the canonical domain
- Use accessible semantic HTML, optimized local/static assets, and `next/font`
- Include `robots.txt`, `sitemap.xml`, Open Graph metadata, favicon, and a clean social-sharing image

Do not add unnecessary UI libraries or animation packages. Subtle CSS transitions are enough.

## 5. Information architecture

Create a one-page site with anchored navigation. Use these sections in this order:

1. Hero
2. About
3. Selected impact / expertise
4. Experience timeline
5. Selected projects
6. Technical strengths
7. Certifications
8. Writing and links
9. Contact
10. Footer

The header should be sticky but compact. Desktop navigation: `About`, `Experience`, `Projects`, `Skills`, `Contact`. On mobile, provide an accessible menu or simplified anchor navigation.

## 6. Visual direction

The design should feel like a modern, understated engineering portfolio—not a startup landing page.

- Light default theme; optional system-aware dark mode is welcome only if it remains polished and tested
- Off-white or very light gray page background, deep navy/charcoal text, restrained blue accent
- Strong typography, generous whitespace, thin dividers, subtle card borders
- Avoid stock photos, generic server illustrations, gradients that dominate the screen, progress bars, skill percentages, and noisy technology-logo walls
- Use simple inline SVG icons only where they improve scanning (external link, email, LinkedIn, GitHub)
- Use a text monogram (`MR`) or a small professional headshot placeholder; do not fabricate a portrait

## 7. Detailed page requirements

### 7.1 Hero

Show:

- Eyebrow: `Vancouver, BC, Canada`
- H1: `Mir Rahman`
- Primary headline from section 3
- Supporting statement from section 3
- Primary CTA: `View résumé` (download/open `/resume.pdf`; use a clear placeholder and README instruction until the final PDF is supplied)
- Secondary CTA: `Get in touch` linking to `mailto:hello@mirrahman.ca`
- Compact text links: LinkedIn and GitHub

Include a small availability/status line that is easy to change in a single data file. Default: `Open to senior engineering and solutions architecture opportunities.`

### 7.2 About

Use a concise 2–3 paragraph story. Emphasize that Mir combines architecture thinking with hands-on delivery: APIs, backend services, asynchronous integrations, data platforms, security, reliability, and production operations. Mention cross-functional and cross-country collaboration, turning requirements into deployable designs, and explaining technical trade-offs clearly.

Do not restate the full résumé verbatim.

### 7.3 Selected impact / expertise

Present four concise cards, each with a short title and outcome-focused description:

- **Secure financial platforms** — Backend services, APIs, data-ingestion and data-export integrations, and privacy-aware workflows in regulated environments.
- **Cloud and data architecture** — Cross-cloud, cross-project, and cross-region data workflows with operational reliability, governance, and cost efficiency in mind.
- **Distributed systems** — Event-driven services, messaging, idempotency, stateful workflows, and production diagnostics.
- **Practical AI integration** — PII-supporting workflows, retrieval-augmented applications, embeddings, vector search, constrained tools, and observability.

Add a small, factual impact callout beneath the cards:

> Delivered architecture and implementation improvements that reduced a major data-transfer workflow’s operating cost by approximately 40% (about $20,000 CAD per month).

### 7.4 Experience timeline

Use a vertical, easy-to-scan timeline. Each role has dates, location, 2–4 concise bullets, and a technology line. Do not include sensitive customer-specific product information beyond the approved summaries below.

#### Samsung Research Canada — Senior Software Engineer (Contract)

`Aug 2025 – Present · Vancouver, BC`

- Build and maintain .NET backend services, REST APIs, and data workflows in a regulated financial-services environment.
- Own architecture, implementation, operation, and continuous improvement of business-critical cross-project and cross-region data-transfer workflows.
- Design and develop privacy-aware data services for PII detection, encryption, and tagging, and enable compliant processing of encrypted customer data.
- Architected and delivered 25 production data-ingestion pipelines designed for encryption, scalability, fail-safe processing, idempotency, and recoverability.
- Designed and implemented secure high-volume data-export workflows with encryption, controlled access, validation, monitoring, and failure handling.
- Improved reliability and governance through schema-change and policy-tag safeguards, structured logging, monitoring, operational diagnostics, and design documentation.
- Identified security risks across data workflows and integrations, proposed mitigations, and helped stakeholders make informed technical decisions.

Technology line: `C#, .NET, Python, PostgreSQL, Docker, Airflow, AWS, Google Cloud, BigQuery, Cloud KMS, Kafka, Redis, LangChain, RAG, MCP, Pinecone`

#### Questrade Financial Group — Senior Software Engineer

`Jul 2021 – Nov 2024 · Toronto, ON`

- Designed and delivered backend services and REST APIs for investment, banking, trading, and insurance workflows.
- Built asynchronous integrations, state machines, rules engines, and event-driven components.
- Strengthened security, maintainability, and production reliability through design reviews, monitoring, diagnostics, and privacy-aware practices.

Technology line: `C#, .NET, Python, TypeScript, PostgreSQL, MongoDB, Docker, Google Cloud, Redis`

#### Konnected Technology Inc. — Software Engineer

`Oct 2018 – Jun 2021 · Penticton, BC`

- Built backend services for an IoT-based factory automation platform.
- Developed APIs and event-driven components for device communication, telemetry processing, and automation workflows.
- Supported production stability through troubleshooting, diagnostics, code reviews, and cross-functional collaboration.

Technology line: `C#, .NET, Docker, PostgreSQL, event-driven messaging, AWS`

#### Oversea Security — Software Engineer

`2014 – 2018 · Seattle, WA`

- Developed and maintained software for an IoT-based marina monitoring system.
- Built backend functionality with C#, ASP.NET, SQL Server, AWS S3, and IIS.

### 7.5 Selected projects

Use project cards or expandable panels. Each project must include its domain, a concise problem/context statement, Mir’s contribution, and technologies. Never claim sole ownership where the source says “contributed.”

1. **Privacy-Aware Data Processing**  
   Domain: Data privacy and security  
   Designed and developed a service to identify sensitive PII in BigQuery, protect data using managed encryption, and apply governance tags.  
   Technologies: `Python · BigQuery · BigQuery UDFs · Google Cloud KMS`

2. **Cross-Cloud Data Transfer Workflows**  
   Domain: Data engineering and cloud infrastructure  
   Owned the operation and improvement of repeatable, monitored workflows for moving data across cloud providers, projects, and regions. Identified inefficiencies, presented an optimization plan, and implemented an approved change that reduced a major workflow’s operating cost by approximately 40% (about $20,000 CAD per month).  
   Technologies: `Python · Apache Airflow · Amazon S3 · Google Cloud Storage · Storage Transfer Service · BigQuery Data Transfer Service`

3. **Reliable Financial-Data Ingestion and Exchange**  
   Domain: Regulated financial services  
   Architected and implemented 25 production ingestion pipelines with encryption, idempotency, recoverability, fault tolerance, and scalable processing as core design requirements. Also designed a secure external data-export workflow with validation, controlled access, monitoring, and failure handling.  
   Technologies: `C# · ASP.NET Core · Python · Kafka · Redis · PostgreSQL · Kubernetes · Amazon S3 · Google Cloud Storage · Google Cloud KMS`

4. **Financial Document Lifecycle Platform**  
   Domain: Secure financial-document processing  
   Contributed to a platform for customer document uploads, metadata, permissioned access, retention, quarantine and security scanning, secure downloads, traceability, and report generation.  
   Technologies: `C# · ASP.NET Core · Java · Spring · Apache Camel · Redis · Google Cloud Storage · Google Cloud Pub/Sub · MongoDB`

5. **Investment Recommendation Platform**  
   Domain: Trading and investment  
   Helped design and develop distributed services that supported portfolio-based investment recommendations and asynchronous financial workflows.  
   Technologies: `C# · ASP.NET Core · TypeScript · NestJS · Java · Spring · MongoDB · Redis · PostgreSQL · Kubernetes · Google Cloud Pub/Sub`

6. **Real-Time Factory Monitoring**  
   Domain: Industrial IoT and manufacturing  
   Designed and contributed to real-time machine-data ingestion and processing components that improved visibility into production activity and interruptions.  
   Technologies: `C# · ASP.NET · Python · Kafka · Redis · DynamoDB · PostgreSQL · AWS`

### 7.6 Technical strengths

Organize skills into compact groups. No proficiency bars or self-assigned percentages.

- **Backend:** C#, .NET, ASP.NET Core, Python, TypeScript, REST APIs, microservices
- **Architecture:** distributed systems, event-driven architecture, CQRS, outbox/inbox, state machines, rules engines, DDD, API design
- **Cloud & DevOps:** AWS, Google Cloud, Docker, Kubernetes, CI/CD, GitHub Actions, Jenkins
- **Data:** PostgreSQL, SQL Server, MongoDB, DynamoDB, Redis, BigQuery, Google Cloud Storage, Airflow / Cloud Composer
- **Security & privacy:** OAuth 2.0, OpenID Connect, IAM, encryption, PII handling, GDPR, CCPA, PIPEDA
- **AI engineering:** Amazon Bedrock, SageMaker, LangChain, RAG, AI agents, MCP servers, Pinecone, Hugging Face embeddings
- **Observability & quality:** Datadog, Grafana, Prometheus, structured logging, xUnit, Moq, NSubstitute, Fluent Assertions

### 7.7 Certifications

Show two certification cards:

- AWS Certified Solutions Architect – Associate
- AWS Certified Security – Specialty

Provide a subtle `Verify AWS certifications` external link to `https://cp.certmetrics.com/amazon/en/public/verify/credential/N3MBYZEJKBV41JWS`.

### 7.8 Writing and external sites

Create a small section titled `Beyond the résumé`:

- **WhyWhyWhy** — `whywhywhy.ca` — “Practical engineering conversations that start with ‘Why?’”
- **Cloudynix Technology Inc.** — `cloudynix.ca` — “Company and consulting presence.”

Use external-link indicators. Keep this section secondary to the portfolio itself.

### 7.9 Contact

Headline: `Let’s build something reliable.`

Include:

- `hello@mirrahman.ca` as the primary email address and mailto link
- LinkedIn: `https://linkedin.com/in/axixur`
- GitHub: `https://github.com/microservices-dotnetcore`
- Location: `Vancouver, BC, Canada`

Do not show Mir’s phone number on the public site by default. Do not build a form in version one; mailto is enough and avoids spam/operational overhead.

### 7.10 Footer

`© {current year} Mir Rahman. Built with care in Vancouver, BC.`

Include concise links to LinkedIn, GitHub, WhyWhyWhy, and Cloudynix.

## 8. Content, privacy, and accuracy rules

- Keep content aligned to the supplied resume, project notes, and compensation-impact report.
- Do not name Samsung internal platforms, external data recipients, internal reports, customer data, exact operational topology, proprietary implementation details, or unreleased product information. Cost impact may be shared only at the rounded level approved here: approximately 40% / about $20,000 CAD per month.
- Prefer “designed and contributed to” unless the approved material clearly establishes ownership such as “designed and developed.”
- Ensure all job titles, dates, technology names, capitalization, and certification names are accurate.
- Make all project descriptions readable to a non-technical hiring manager while retaining enough technical substance for engineering leaders.

## 9. SEO and metadata

Use title:

`Mir Rahman | Solutions Architect & Senior Software Engineer`

Use description:

`Portfolio of Mir Rahman, an AWS-certified Solutions Architect and Senior Software Engineer building secure, scalable cloud systems, distributed services, data workflows, and AI-assisted applications.`

Add JSON-LD structured data for a `Person` with name, job title, location, LinkedIn, GitHub, and personal website. Do not include a personal phone number.

## 10. Accessibility, performance, and quality checklist

- Keyboard-accessible navigation and visible focus states
- Correct heading hierarchy and landmark elements
- Sufficient color contrast in light and dark themes
- Semantic links and buttons; accessible labels for icons
- Responsive from 320px-wide mobile screens through desktop
- No layout shift caused by fonts or images
- High Lighthouse scores, especially performance, accessibility, and SEO
- Build successfully with `npm run build`
- Run lint/type checks before handoff

## 11. Suggested repository structure

```text
app/
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  globals.css
components/
  header.tsx
  hero.tsx
  section-heading.tsx
  experience-timeline.tsx
  project-card.tsx
  skill-groups.tsx
  footer.tsx
data/
  profile.ts
public/
  resume.pdf                 # add final résumé PDF before deployment
  og-image.png               # create a simple branded image
README.md
```

Keep all editable profile content in `data/profile.ts` so future résumé updates can be made without hunting through UI components.

## 12. Definition of done

The finished site is a refined, responsive one-page portfolio that accurately represents Mir’s background; is safe to share publicly; makes the résumé and contact details obvious; links clearly to WhyWhyWhy and Cloudynix; builds cleanly; and is ready to push to GitHub and deploy to Vercel.
