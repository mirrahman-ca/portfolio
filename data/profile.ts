export const profile = {
  name: "Mir Rahman",
  displayName: "Mir R.",
  initials: "MR",
  location: "Vancouver, BC, Canada",
  map: {
    label: "Vancouver, British Columbia",
    embedUrl:
      "https://www.google.com/maps?q=Vancouver%2C%20British%20Columbia&z=11&output=embed",
    viewUrl:
      "https://www.google.com/maps/search/?api=1&query=Vancouver%2C%20British%20Columbia",
  },
  title: "Solutions Architect & Senior Software Engineer",
  statement:
    "I design and deliver secure, scalable backend systems, cloud platforms, data workflows, and AI-assisted services for regulated and operationally demanding environments.",
  summary:
    "AWS-certified Solutions Architect and Senior Software Engineer with 12+ years of experience building cloud-native systems across financial services, payments, trading, insurance, industrial automation, IoT, and data platforms. Hands-on across C#, .NET, Python, TypeScript, AWS, Google Cloud, distributed systems, privacy engineering, and practical AI integration.",
  availability:
    "Open to senior engineering and solutions architecture opportunities.",
  email: "hello@mirrahman.ca",
  phone: "+15873703794",
  linkedin: "https://linkedin.com/in/axixur",
  recommendationsUrl: "https://www.linkedin.com/in/axixur/details/recommendations/",
  github: "https://github.com/microservices-dotnetcore",
  certificationUrl:
    "https://cp.certmetrics.com/amazon/en/public/verify/credential/N3MBYZEJKBV41JWS",
  about: [
    "I combine software architecture design and systems thinking with hands-on delivery. My work spans solution design, APIs, backend services, asynchronous integrations, data platforms, security controls, reliability engineering, and the realities of operating software in production.",
    "I enjoy turning complex requirements into deployable designs—then staying close enough to the implementation to make sure they work. I have collaborated across disciplines and countries, helping teams make sound decisions by explaining technical trade-offs clearly and documenting the path forward.",
  ],
  impact: [
    {
      title: "Secure financial platforms",
      description:
        "Backend services, APIs, data-ingestion and data-export integrations, and privacy-aware workflows in regulated environments.",
    },
    {
      title: "Cloud and data architecture",
      description:
        "Cross-cloud, cross-project, and cross-region data workflows designed around reliability, governance, and cost efficiency.",
    },
    {
      title: "Distributed systems",
      description:
        "Event-driven services, messaging, idempotency, stateful workflows, and the diagnostics needed to operate them confidently.",
    },
    {
      title: "Practical AI integration",
      description:
        "PII-supporting workflows, retrieval-augmented applications, embeddings, vector search, constrained tools, and observability.",
    },
  ],
  experience: [
    {
      company: "Samsung Research Canada",
      role: "Solutions Architecture Consultant & Senior Software Engineer (Contract)",
      dates: "Aug 2025 – Present",
      location: "Vancouver, BC",
      bullets: [
        "Lead solution design, and build and maintain .NET backend services, REST APIs, and data workflows in a regulated financial-services environment.",
        "Own the architecture, implementation, operation, and continuous improvement of business-critical cross-project and cross-region data-transfer workflows.",
        "Design privacy-aware services for PII detection, encryption, and tagging, and architected 25 production data-ingestion pipelines for scalability, idempotency, and recoverability.",
        "Improve reliability and governance through safeguards, structured logging, monitoring, operational diagnostics, and clear design documentation.",
      ],
      technologies:
        "C#, .NET, Python, PostgreSQL, Docker, Airflow, AWS, Google Cloud, BigQuery, Cloud KMS, Kafka, Redis, LangChain, RAG, MCP, Pinecone",
    },
    {
      company: "Questrade Financial Group",
      role: "Senior Software Engineer",
      dates: "Jul 2021 – Nov 2024",
      location: "Toronto, ON",
      bullets: [
        "Designed and delivered backend services and REST APIs for investment, banking, trading, and insurance workflows.",
        "Built asynchronous integrations, state machines, rules engines, and event-driven components.",
        "Strengthened security, maintainability, and production reliability through design reviews, monitoring, diagnostics, and privacy-aware practices.",
      ],
      technologies:
        "C#, .NET, Python, TypeScript, PostgreSQL, MongoDB, Docker, Google Cloud, Redis",
    },
    {
      company: "Konnected Technology Inc.",
      role: "Software Engineer",
      dates: "Oct 2018 – Jun 2021",
      location: "Penticton, BC",
      bullets: [
        "Built backend services for an IoT-based factory automation platform.",
        "Developed APIs and event-driven components for device communication, telemetry processing, and automation workflows.",
        "Supported production stability through troubleshooting, diagnostics, code reviews, and cross-functional collaboration.",
      ],
      technologies:
        "C#, .NET, Docker, PostgreSQL, event-driven messaging, AWS",
    },
    {
      company: "Oversea Security",
      role: "Software Engineer",
      dates: "2014 – 2018",
      location: "Seattle, WA",
      bullets: [
        "Developed and maintained software for an IoT-based marina monitoring system.",
        "Built backend functionality with C#, ASP.NET, SQL Server, AWS S3, and IIS.",
      ],
      technologies: "C#, ASP.NET, SQL Server, AWS S3, IIS",
    },
  ],
  projects: [
    {
      title: "Privacy-Aware Data Processing",
      domain: "Data privacy and security",
      description:
        "Designed and developed a service to identify sensitive PII in BigQuery, protect data using managed encryption, and apply governance tags.",
      technologies: "Python · BigQuery · BigQuery UDFs · Google Cloud KMS",
    },
    {
      title: "Cross-Cloud Data Transfer Workflows",
      domain: "Data engineering and cloud infrastructure",
      description:
        "Owned repeatable, monitored workflows for moving data across cloud providers, projects, and regions. Identified inefficiencies and implemented an approved change that reduced a major workflow’s operating cost by approximately 40%—about $20,000 CAD per month.",
      technologies:
        "Python · Apache Airflow · Amazon S3 · Google Cloud Storage · Storage Transfer Service · BigQuery Data Transfer Service",
    },
    {
      title: "Reliable Financial-Data Ingestion and Exchange",
      domain: "Regulated financial services",
      description:
        "Architected and implemented 25 production ingestion pipelines with encryption, idempotency, recoverability, fault tolerance, and scalable processing at their core, plus a secure external data-export workflow.",
      technologies:
        "C# · ASP.NET Core · Python · Kafka · Redis · PostgreSQL · Kubernetes · Amazon S3 · Google Cloud Storage · Google Cloud KMS",
    },
    {
      title: "Financial Document Lifecycle Platform",
      domain: "Secure financial-document processing",
      description:
        "Contributed to a platform for uploads, metadata, permissioned access, retention, quarantine and security scanning, secure downloads, traceability, and report generation.",
      technologies:
        "C# · ASP.NET Core · Java · Spring · Apache Camel · Redis · Google Cloud Storage · Google Cloud Pub/Sub · MongoDB",
    },
    {
      title: "Investment Recommendation Platform",
      domain: "Trading and investment",
      description:
        "Helped design and develop distributed services that supported portfolio-based investment recommendations and asynchronous financial workflows.",
      technologies:
        "C# · ASP.NET Core · TypeScript · NestJS · Java · Spring · MongoDB · Redis · PostgreSQL · Kubernetes · Google Cloud Pub/Sub",
    },
    {
      title: "Real-Time Factory Monitoring",
      domain: "Industrial IoT and manufacturing",
      description:
        "Designed and contributed to real-time machine-data ingestion and processing components that improved visibility into production activity and interruptions.",
      technologies:
        "C# · ASP.NET · Python · Kafka · Redis · DynamoDB · PostgreSQL · AWS",
    },
  ],
  skills: [
    ["Backend", "C#, .NET, ASP.NET Core, Python, TypeScript, REST APIs, microservices"],
    ["Architecture", "Distributed systems, event-driven architecture, CQRS, outbox/inbox, state machines, rules engines, DDD, API design"],
    ["Cloud & DevOps", "AWS, Google Cloud, Docker, Kubernetes, CI/CD, GitHub Actions, Jenkins"],
    ["Data", "PostgreSQL, SQL Server, MongoDB, DynamoDB, Redis, BigQuery, Google Cloud Storage, Airflow / Cloud Composer"],
    ["Security & privacy", "OAuth 2.0, OpenID Connect, IAM, encryption, PII handling, GDPR, CCPA, PIPEDA"],
    ["AI engineering", "Amazon Bedrock, SageMaker, LangChain, RAG, AI agents, MCP servers, Pinecone, Hugging Face embeddings"],
    ["Observability & quality", "Datadog, Grafana, Prometheus, structured logging, xUnit, Moq, NSubstitute, Fluent Assertions"],
  ] as const,
  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "AWS Certified Security – Specialty",
  ],
  recommendations: [
    {
      name: "Vahid Mohammadi",
      profileUrl: "https://www.linkedin.com/in/vmohammadi/",
      title: "Solutions Architect at Questrade Financial Group",
      date: "December 17, 2024",
      relationship: "Senior colleague at Questrade",
      quote:
        "I worked with Mir on several projects, and he always stood out for his curiosity, eagerness to learn, and attention to detail. He came up with creative ideas and solutions that improved our work and helped the team. Mir is great at solving problems and always stays positive. I highly recommend him to any company looking for a skilled and thoughtful developer.",
    },
    {
      name: "Todd Leuzinger",
      profileUrl: "https://www.linkedin.com/in/todd-leuzinger-2b341855/",
      title: "Managing Director at TTC Management Solutions Ltd.",
      date: "October 31, 2019",
      relationship: "Worked with Mir on the same team",
      quote:
        "Azizur is one of the best among all the people I have worked with. His diversity and understanding of all aspects of programming constantly astounds me. As a team member, Azizur is a very productive person, he is hardworking, broad-minded and a forward thinking individual. Intelligent, ambitious, energetic and proactive perfectionist. A desire for proficiency and education makes Azizur a valuable asset to the team. It is a pleasure working with Azizur and look forward to working with him on many projects in the years to come.",
    },
    {
      name: "George Speirs",
      profileUrl: "https://www.linkedin.com/in/georgespeirs/",
      title: "President & CEO at Konnected Technology Inc.",
      date: "May 20, 2016",
      relationship: "Managed Mir directly",
      quote:
        "Azizur is extremely detail oriented and highly skilled. He is able to breakdown complex problems into more manageable components and then implement solutions. He is a pleasure to work with and gives well over 100% effort to anything that he does. He fully understands all aspects of programming and the business decisions behind the plan.",
    },
  ],
} as const;
