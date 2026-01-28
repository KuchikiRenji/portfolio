import type { Project } from "@/types/project";

// Placeholder data for 24 projects – replace with real details later
export const projects: Project[] = [
  {
    title: "Multi-Tenant Analytics Dashboard with Real-Time KPIs",
    slug: "multi-tenant-analytics-dashboard-with-real-time-kpis",
    impact: "+18% executive reporting efficiency",
    description:
      "Built a SaaS-style analytics dashboard for internal business units, consolidating metrics from disparate systems into a single pane of glass. Implemented real-time KPI streaming and access control per tenant. Helped stakeholders make faster, data-driven decisions with less manual Excel work.",
    defaultImage: "/projects/project-1/hero.webp",
    gallery: [
      "/projects/project-1/overview.webp",
      "/projects/project-1/filters.webp",
      "/projects/project-1/charts.png",
    ],
    technicalHighlights: [
      "Designed multi-tenant architecture with row-level security for shared storage",
      "Implemented real-time metric updates over WebSockets using a Node.js backend",
      "Created reusable chart components with Next.js and Tailwind CSS for rapid iteration",
    ],
    challengesSolutions: [
      "Complex permission model across tenants → Introduced a role/tenant mapping layer with SQL policies",
      "Slow legacy reports → Pre-aggregated heavy queries and cached results at the API layer",
    ],
    links: [{ label: "Internal Demo", url: "#" }],
    categories: ["Full-Stack Application"],
    techStack: ["Node.js", "Next.js", "Tailwind CSS", "SQL/NoSQL", "Git/GitHub"],
    year: 2018,
  },
  {
    title: "Operational Task Management Platform for Field Teams",
    slug: "operational-task-management-platform-for-field-teams",
    impact: "+14% on-time task completion",
    description:
      "Developed a responsive web app for coordinating field operations, replacing spreadsheet-based workflows. Added real-time status tracking and route-level summaries so managers could quickly resolve bottlenecks. Reduced manual coordination and improved SLA adherence.",
    defaultImage: "/projects/project-2/hero.webp",
    gallery: [
      "/projects/project-2/kanban.webp",
      "/projects/project-2/map.png",
    ],
    technicalHighlights: [
      "Built RESTful APIs in Flask powering a Next.js front-end with server-side rendering",
      "Implemented optimistic UI updates and WebSocket push notifications for status changes",
      "Introduced role-based views tailored to dispatchers, supervisors, and field staff",
    ],
    challengesSolutions: [
      "Unreliable network in the field → Added local caching and automatic sync with conflict resolution",
      "High variation in device sizes → Adopted a mobile-first Tailwind CSS design system",
    ],
    links: [{ label: "Product Walkthrough", url: "#" }],
    categories: ["Full-Stack Application"],
    techStack: ["Python", "Flask", "Next.js", "Tailwind CSS", "SQL/NoSQL"],
    year: 2018,
  },
  {
    title: "Customer Feedback Aggregator with NLP Tagging",
    slug: "customer-feedback-aggregator-with-nlp-tagging",
    impact: "+20% faster insight discovery",
    description:
      "Centralized feedback from surveys, app stores, and support tickets into a unified dashboard. Added lightweight NLP tagging to automatically surface themes like performance, pricing, or UX issues. Helped product managers prioritize roadmap items with more signal and less manual reading.",
    defaultImage: "/projects/project-3/hero.webp",
    gallery: [
      "/projects/project-3/ingestion.webp",
      "/projects/project-3/themes.png",
      "/projects/project-3/timeline.webp",
    ],
    technicalHighlights: [
      "Built ingestion pipelines in Python to normalize heterogeneous feedback formats",
      "Exposed a FastAPI microservice that tagged text using pre-trained embeddings",
      "Created a faceted search UI in Next.js for filtering by theme, product, and region",
    ],
    challengesSolutions: [
      "No labeled data for themes → Bootstrapped weak labels via keyword heuristics, then refined using manual review",
      "Slow full-text searches → Added text indexes and denormalized key fields into a search-optimized schema",
    ],
    links: [{ label: "GitHub Repo", url: "#" }],
    categories: ["Full-Stack Application", "NLP/Chatbots"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "SQL/NoSQL", "Git/GitHub"],
    year: 2019,
  },
  {
    title: "Order Tracking Portal with Real-Time Shipment Updates",
    slug: "order-tracking-portal-with-real-time-shipment-updates",
    impact: "+16% reduction in support tickets",
    description:
      "Created a self-service order tracking portal that surfaces shipment events and delivery ETAs directly to customers. Integrated carrier webhooks and consolidated status logic in a single backend. Lowered inbound 'Where is my order?' contacts while improving transparency.",
    defaultImage: "/projects/project-4/hero.webp",
    gallery: [
      "/projects/project-4/timeline.webp",
      "/projects/project-4/mobile.png",
    ],
    technicalHighlights: [
      "Normalized inconsistent carrier event payloads in a Python service layer",
      "Implemented server-sent events for live UI updates without full refreshes",
      "Designed responsive UI in Next.js with Tailwind CSS and reusable status components",
    ],
    challengesSolutions: [
      "Out-of-order carrier events → Added idempotent upserts and event sequence checks in the database",
      "Different SLA rules by region → Encapsulated SLA logic into configuration-driven policy modules",
    ],
    links: [],
    categories: ["Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "SQL/NoSQL", "Docker"],
    year: 2019,
  },
  {
    title: "Internal API Gateway for Legacy Service Consolidation",
    slug: "internal-api-gateway-for-legacy-service-consolidation",
    impact: "+22% faster feature delivery",
    description:
      "Built an internal API gateway that wrapped multiple legacy services behind a modern, typed interface. Provided a consistent authentication and logging layer so front-end teams could integrate more quickly. Simplified the migration path from older monoliths to newer microservices.",
    defaultImage: "/projects/project-5/hero.webp",
    gallery: [
      "/projects/project-5/gateway.png",
      "/projects/project-5/logs.webp",
      "/projects/project-5/diagram.png",
    ],
    technicalHighlights: [
      "Implemented FastAPI gateway endpoints that orchestrated calls to multiple backends",
      "Standardized error handling and structured logging for all upstream services",
      "Added automated OpenAPI generation and client SDKs for Next.js consumers",
    ],
    challengesSolutions: [
      "Inconsistent legacy payloads → Introduced strong pydantic-style validation with safe fallbacks",
      "Debugging across systems → Correlated requests using shared trace IDs pushed into logs",
    ],
    links: [{ label: "Architecture Overview", url: "#" }],
    categories: ["Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Node.js", "Docker", "Git/GitHub"],
    year: 2020,
  },
  {
    title: "Full-Stack Admin Console for Operational Workflows",
    slug: "full-stack-admin-console-for-operational-workflows",
    impact: "+12% reduction in manual ops time",
    description:
      "Designed and implemented an internal admin console that unified various back-office workflows. Replaced ad-hoc SQL scripts with safe, audited operations via web forms and bulk tools. Improved reliability and reduced risky manual database changes.",
    defaultImage: "/projects/project-6/hero.webp",
    gallery: [
      "/projects/project-6/table.webp",
      "/projects/project-6/forms.png",
    ],
    technicalHighlights: [
      "Built a Next.js front-end with reusable table and form components styled via Tailwind CSS",
      "Exposed idempotent admin APIs in FastAPI with fine-grained permissions",
      "Implemented change audit logging with before/after snapshots in SQL/NoSQL storage",
    ],
    challengesSolutions: [
      "Risk of destructive actions → Added guardrails, confirmation flows, and role approval steps",
      "Performance on large tables → Implemented server-side pagination and indexed filter fields",
    ],
    links: [],
    categories: ["Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "SQL/NoSQL", "Git/GitHub"],
    year: 2020,
  },
  {
    title: "E-Commerce Sales Forecasting API for Seasonal Campaigns",
    slug: "e-commerce-sales-forecasting-api-for-seasonal-campaigns",
    impact: "+19% forecasting accuracy improvement",
    description:
      "Delivered a forecasting API that predicted daily demand by product and channel for an e-commerce retailer. Included seasonality and promotion effects so planners could better allocate budget and stock. Reduced stockouts and overstock during peak campaigns.",
    defaultImage: "/projects/project-7/hero.webp",
    gallery: [
      "/projects/project-7/forecast.webp",
      "/projects/project-7/seasonality.png",
      "/projects/project-7/api-docs.webp",
    ],
    technicalHighlights: [
      "Implemented forecasting pipelines in Python combining classical and tree-based models",
      "Wrapped models in a FastAPI service with batch and on-demand endpoints",
      "Created automated backtesting scripts to compare models across multiple horizons",
    ],
    challengesSolutions: [
      "Highly seasonal promotions → Engineered calendar, campaign, and price features per SKU",
      "Data sparsity for long-tail items → Clustered similar products and shared model parameters",
    ],
    links: [{ label: "GitHub Repo", url: "#" }],
    categories: ["AI/ML", "Predictive Modeling", "Forecasting/Time-Series"],
    techStack: ["Python", "FastAPI", "SQL/NoSQL", "Docker", "Git/GitHub"],
    year: 2021,
  },
  {
    title: "Marketing Spend Optimizer with Time-Series Attribution",
    slug: "marketing-spend-optimizer-with-time-series-attribution",
    impact: "+13% ROI on ad budget",
    description:
      "Built a time-series attribution model that linked marketing spend to downstream revenue. Enabled marketing leaders to reallocate budget toward higher-performing channels based on forecasted impact. Provided weekly recommendations via an internal dashboard.",
    defaultImage: "/projects/project-8/hero.webp",
    gallery: [
      "/projects/project-8/channels.webp",
      "/projects/project-8/attribution.png",
    ],
    technicalHighlights: [
      "Modeled channel impact using multivariate forecasting and lagged features in Python",
      "Served optimization recommendations through a FastAPI endpoint consumed by a Next.js UI",
      "Automated data refresh and model retraining on a daily cadence",
    ],
    challengesSolutions: [
      "Delayed revenue realization → Introduced lag structures and decay functions in the model",
      "Noisy spend data → Implemented data quality checks and anomaly filtering before training",
    ],
    links: [],
    categories: ["AI/ML", "Predictive Modeling", "Forecasting/Time-Series"],
    techStack: ["Python", "FastAPI", "SQL/NoSQL", "Docker", "Git/GitHub"],
    year: 2021,
  },
  {
    title: "Production-Grade Demand Forecasting Engine for Retail",
    slug: "production-grade-demand-forecasting-engine-for-retail",
    impact: "+21% reduction in stockouts",
    description:
      "Implemented a demand forecasting engine that generated SKU-level predictions across multiple regions. Integrated the predictions into replenishment workflows, reducing lost sales and excess inventory. Provided planners with visual drill-downs on forecast accuracy.",
    defaultImage: "/projects/project-9/hero.webp",
    gallery: [
      "/projects/project-9/sku-chart.webp",
      "/projects/project-9/regions.png",
      "/projects/project-9/error-metrics.webp",
    ],
    technicalHighlights: [
      "Used Python forecasting libraries to capture weekly seasonality and holiday effects",
      "Exposed forecasts via a FastAPI microservice consumed by internal tools",
      "Logged model runs and accuracy metrics to support continuous improvement",
    ],
    challengesSolutions: [
      "Intermittent demand patterns → Adopted specialized models for slow-moving items",
      "Stakeholder trust in forecasts → Added transparent feature importance and scenario comparisons",
    ],
    links: [{ label: "Case Study Summary", url: "#" }],
    categories: ["AI/ML", "Predictive Modeling", "Forecasting/Time-Series"],
    techStack: ["Python", "FastAPI", "SQL/NoSQL", "Docker", "AWS"],
    year: 2022,
  },
  {
    title: "Computer Vision Quality Control for Product Defects",
    slug: "computer-vision-quality-control-for-product-defects",
    impact: "+17% reduction in manual inspection time",
    description:
      "Delivered a computer vision system that flagged potential visual defects on a production line. Operators reviewed highlighted regions instead of scanning full images, speeding up verification. Helped standardize quality checks across shifts.",
    defaultImage: "/projects/project-10/hero.webp",
    gallery: [
      "/projects/project-10/heatmap.webp",
      "/projects/project-10/inspection.png",
      "/projects/project-10/dashboard.webp",
    ],
    technicalHighlights: [
      "Trained PyTorch models for classification and localization of common defect types",
      "Deployed inference behind a FastAPI endpoint with Docker for reproducible environments",
      "Surfaced review queues and metrics in a Next.js dashboard for supervisors",
    ],
    challengesSolutions: [
      "Limited labeled defect data → Augmented examples with synthetic distortions and rotations",
      "Variable lighting conditions → Normalized image inputs and applied augmentation during training",
    ],
    links: [{ label: "Demo Interface", url: "#" }],
    categories: ["AI/ML", "Computer Vision"],
    techStack: ["Python", "PyTorch", "FastAPI", "Docker", "Next.js", "Tailwind CSS"],
    year: 2022,
  },
  {
    title: "Intelligent Ticket Triage with NLP Classification",
    slug: "intelligent-ticket-triage-with-nlp-classification",
    impact: "+15% faster first-response time",
    description:
      "Introduced an NLP-based triage layer that auto-routed support tickets to the right teams. Classified priority, topic, and product line from free-text descriptions and metadata. Reduced time to first response and smoothed work distribution.",
    defaultImage: "/projects/project-11/hero.webp",
    gallery: [
      "/projects/project-11/queue.webp",
      "/projects/project-11/classes.png",
    ],
    technicalHighlights: [
      "Fine-tuned text classification models in Python on historical support data",
      "Served predictions from a FastAPI service used by the existing ticket system",
      "Captured feedback from agents to continuously improve label accuracy",
    ],
    challengesSolutions: [
      "Highly imbalanced classes → Applied class weighting and augmentation strategies",
      "Evolving ticket taxonomy → Externalized label configuration and retraining schedules",
    ],
    links: [],
    categories: ["AI/ML", "NLP/Chatbots"],
    techStack: ["Python", "FastAPI", "SQL/NoSQL", "Docker", "Git/GitHub"],
    year: 2022,
  },
  {
    title: "Churn Risk Scoring Service for Subscription Users",
    slug: "churn-risk-scoring-service-for-subscription-users",
    impact: "+12% improvement in retention campaigns",
    description:
      "Built a churn risk scoring pipeline that combined product usage, billing history, and support interactions. Exposed scores to marketing tools so targeted offers could be triggered proactively. Improved efficiency of retention campaigns and reduced blind targeting.",
    defaultImage: "/projects/project-12/hero.webp",
    gallery: [
      "/projects/project-12/risk-tiers.webp",
      "/projects/project-12/features.png",
      "/projects/project-12/campaigns.webp",
    ],
    technicalHighlights: [
      "Engineered time-based features capturing recent product engagement and support sentiment",
      "Trained predictive models in Python and exported them for FastAPI-based serving",
      "Implemented batch scoring jobs and on-demand APIs for CRM integrations",
    ],
    challengesSolutions: [
      "Label leakage in historical data → Carefully defined churn windows and feature cutoffs",
      "Complex integration with marketing tools → Standardized outbound payloads and built retry logic",
    ],
    links: [{ label: "Architecture Diagram", url: "#" }],
    categories: ["AI/ML", "Predictive Modeling"],
    techStack: ["Python", "FastAPI", "SQL/NoSQL", "Docker", "AWS"],
    year: 2023,
  },
  {
    title: "Computer Vision OCR Pipeline for Document Automation",
    slug: "computer-vision-ocr-pipeline-for-document-automation",
    impact: "+23% improvement in extraction accuracy",
    description:
      "Developed an OCR pipeline that converted scanned invoices and forms into structured data. Combined pre-processing, text extraction, and layout-aware parsing for higher fidelity. Automated a large portion of manual data entry in back-office workflows.",
    defaultImage: "/projects/project-13/hero.webp",
    gallery: [
      "/projects/project-13/input.webp",
      "/projects/project-13/boxes.png",
      "/projects/project-13/results.webp",
    ],
    technicalHighlights: [
      "Orchestrated image cleanup and segmentation using Python-based CV libraries",
      "Wrapped OCR and post-processing logic in a FastAPI service deployed with Docker",
      "Exposed a configurable rules engine so business teams could tune field mappings",
    ],
    challengesSolutions: [
      "Skewed and noisy scans → Implemented de-skewing, denoising, and contrast enhancement steps",
      "Varied document templates → Combined template-based rules with machine-learned field detection",
    ],
    links: [{ label: "GitHub Repo", url: "#" }],
    categories: ["AI/ML", "Computer Vision"],
    techStack: ["Python", "FastAPI", "Docker", "AWS", "SQL/NoSQL"],
    year: 2023,
  },
  {
    title: "Real-Time Anomaly Detection for Time-Series Metrics",
    slug: "real-time-anomaly-detection-for-time-series-metrics",
    impact: "+18% reduction in undetected incidents",
    description:
      "Shipped an anomaly detection service that monitored key product and infrastructure metrics. Flagged unusual patterns in real time and pushed alerts into on-call workflows. Helped teams respond earlier to regressions and outages.",
    defaultImage: "/projects/project-14/hero.webp",
    gallery: [
      "/projects/project-14/anomalies.webp",
      "/projects/project-14/thresholds.png",
    ],
    technicalHighlights: [
      "Implemented streaming anomaly detection models in Python for multiple time-series",
      "Built a FastAPI API that evaluated new points on ingestion and emitted alerts",
      "Created visualization components in Next.js for investigating anomaly windows",
    ],
    challengesSolutions: [
      "High false-positive rate at launch → Tuned thresholds and added seasonality-aware baselines",
      "Scaling to many metrics → Introduced per-metric configuration and batched scoring paths",
    ],
    links: [],
    categories: ["AI/ML", "Forecasting/Time-Series"],
    techStack: ["Python", "FastAPI", "Docker", "SQL/NoSQL", "Git/GitHub"],
    year: 2023,
  },
  {
    title: "NLP-Powered Knowledge Base Search and FAQ Assistant",
    slug: "nlp-powered-knowledge-base-search-and-faq-assistant",
    impact: "+20% self-service resolution rate",
    description:
      "Created an NLP assistant that let users search documentation and FAQs in natural language. Combined semantic search with intent-specific templates to answer common questions quickly. Reduced load on human support agents for repetitive queries.",
    defaultImage: "/projects/project-15/hero.webp",
    gallery: [
      "/projects/project-15/search.webp",
      "/projects/project-15/answer.png",
      "/projects/project-15/analytics.webp",
    ],
    technicalHighlights: [
      "Indexed articles using Python-based embedding models with storage in SQL/NoSQL backends",
      "Exposed a FastAPI endpoint consumed by a chat-style Next.js widget",
      "Tracked click-through and resolution metrics to refine ranking logic over time",
    ],
    challengesSolutions: [
      "Ambiguous queries → Blended keyword and semantic search signals",
      "Stale content → Added freshness scoring and content-owner alerts for outdated articles",
    ],
    links: [{ label: "Live Demo", url: "#" }],
    categories: ["AI/ML", "NLP/Chatbots"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "SQL/NoSQL", "Git/GitHub"],
    year: 2024,
  },
  {
    title: "LLM-Powered Customer Support Chatbot with Escalation",
    slug: "llm-powered-customer-support-chatbot-with-escalation",
    impact: "+22% deflection of Tier-1 tickets",
    description:
      "Rolled out an LLM-backed chatbot that handled routine inquiries and collected structured information before human handoff. Added clear guardrails and escalation paths to maintain quality. Increased support capacity without sacrificing customer satisfaction.",
    defaultImage: "/projects/project-16/hero.webp",
    gallery: [
      "/projects/project-16/conversation.webp",
      "/projects/project-16/flow.png",
      "/projects/project-16/escalation.webp",
    ],
    technicalHighlights: [
      "Orchestrated prompt and context management in a Python service around external LLM APIs",
      "Built a FastAPI backend that integrated with ticketing systems for seamless escalation",
      "Implemented a Next.js chat front-end with streaming responses and typing indicators",
    ],
    challengesSolutions: [
      "Risk of off-brand responses → Introduced strict system prompts and answer templates",
      "Data privacy concerns → Redacted sensitive fields before sending to external LLMs",
    ],
    links: [{ label: "GitHub Repo", url: "#" }],
    categories: ["LLM Integration", "NLP/Chatbots", "Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Docker", "Git/GitHub"],
    year: 2024,
  },
  {
    title: "End-to-End MLOps Pipeline for Forecasting Models",
    slug: "end-to-end-mlops-pipeline-for-forecasting-models",
    impact: "+25% faster model deployment cycles",
    description:
      "Led the design of an MLOps pipeline that automated training, evaluation, and deployment of forecasting models. Standardized how new models were pushed to production while preserving rollback safety. Empowered data scientists to ship improvements with minimal engineering friction.",
    defaultImage: "/projects/project-17/hero.webp",
    gallery: [
      "/projects/project-17/pipeline.webp",
      "/projects/project-17/ci.png",
      "/projects/project-17/monitoring.webp",
    ],
    technicalHighlights: [
      "Packaged Python forecasting code into Docker images for consistent environments",
      "Exposed FastAPI inference services behind load-balanced endpoints on AWS",
      "Integrated CI/CD workflows in Git/GitHub for automated tests and promotion gates",
    ],
    challengesSolutions: [
      "Manual, error-prone deployments → Codified promotion steps into pipelines with approvals",
      "Lack of visibility into model health → Added monitoring dashboards and alert thresholds for drift",
    ],
    links: [{ label: "Internal Docs", url: "#" }],
    categories: ["MLOps/Deployment", "Forecasting/Time-Series", "AI/ML"],
    techStack: ["Python", "FastAPI", "Docker", "AWS", "Git/GitHub", "SQL/NoSQL"],
    year: 2024,
  },
  {
    title: "Real-Time Recommendation Engine for On-Site Personalization",
    slug: "real-time-recommendation-engine-for-on-site-personalization",
    impact: "+24% uplift in on-site engagement",
    description:
      "Implemented a recommendation service that surfaced personalized products and content on key pages. Combined short-term session signals with longer-term user history. Delivered measurable gains in click-through and time-on-site metrics.",
    defaultImage: "/projects/project-18/hero.webp",
    gallery: [
      "/projects/project-18/grid.webp",
      "/projects/project-18/ranking.png",
    ],
    technicalHighlights: [
      "Engineered feature pipelines in Python for user, item, and context features",
      "Hosted a FastAPI ranking service with low-latency response times",
      "Integrated with a Next.js front-end for dynamic, A/B-testable recommendation slots",
    ],
    challengesSolutions: [
      "Cold-start users → Backfilled recommendations using popularity and content similarity",
      "Latency-sensitive placements → Cached top candidates and applied lightweight re-ranking at request time",
    ],
    links: [],
    categories: ["AI/ML", "Predictive Modeling", "Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Docker", "AWS"],
    year: 2025,
  },
  {
    title: "LLM Integration Layer for Internal Tools and Workflows",
    slug: "llm-integration-layer-for-internal-tools-and-workflows",
    impact: "+20% productivity in operations teams",
    description:
      "Designed a centralized LLM integration layer that exposed reusable building blocks for summarization, drafting, and data extraction. Internal tools consumed these capabilities without each team managing prompts or providers separately. Enabled consistent governance and observability for AI usage.",
    defaultImage: "/projects/project-19/hero.webp",
    gallery: [
      "/projects/project-19/endpoints.webp",
      "/projects/project-19/monitoring.png",
      "/projects/project-19/usage.webp",
    ],
    technicalHighlights: [
      "Created a Python and FastAPI service that abstracted prompts, providers, and retries",
      "Implemented request logging, cost tracking, and safety filters for all LLM calls",
      "Published a typed client library consumed by multiple Next.js and Node.js applications",
    ],
    challengesSolutions: [
      "Fragmented experimentation across teams → Consolidated patterns into shared, versioned endpoints",
      "Need for governance → Centralized audit logs and rate limits at the integration layer",
    ],
    links: [{ label: "Developer Guide", url: "#" }],
    categories: ["LLM Integration", "MLOps/Deployment", "Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Node.js", "Next.js", "Docker", "Git/GitHub"],
    year: 2025,
  },
  {
    title: "End-to-End Computer Vision Pipeline for Visual Search",
    slug: "end-to-end-computer-vision-pipeline-for-visual-search",
    impact: "+18% increase in product discovery",
    description:
      "Launched a visual search feature that let users find similar products by uploading images. Built a full pipeline from feature extraction to nearest-neighbor retrieval and a polished UI. Improved discovery for visually-driven product categories.",
    defaultImage: "/projects/project-20/hero.webp",
    gallery: [
      "/projects/project-20/upload.webp",
      "/projects/project-20/results.png",
      "/projects/project-20/embedding.webp",
    ],
    technicalHighlights: [
      "Extracted embeddings with PyTorch-based CNN models and stored them in a vector-friendly layout",
      "Served similarity search from a Python FastAPI service packaged with Docker",
      "Implemented an intuitive Next.js interface with drag-and-drop uploads and responsive grids",
    ],
    challengesSolutions: [
      "Large embedding sets → Implemented approximate nearest neighbor indexing",
      "Inconsistent user images → Normalized input aspect ratios and brightness before encoding",
    ],
    links: [{ label: "Visual Demo", url: "#" }],
    categories: ["AI/ML", "Computer Vision", "Full-Stack Application"],
    techStack: ["Python", "PyTorch", "FastAPI", "Docker", "Next.js", "Tailwind CSS"],
    year: 2025,
  },
  {
    title: "Forecasting-Driven Inventory Dashboard for Planners",
    slug: "forecasting-driven-inventory-dashboard-for-planners",
    impact: "+14% reduction in excess stock",
    description:
      "Delivered a planning dashboard that combined forecast outputs with current inventory, lead times, and constraints. Planners could simulate what-if scenarios before committing purchase orders. Helped balance service levels against carrying costs.",
    defaultImage: "/projects/project-21/hero.webp",
    gallery: [
      "/projects/project-21/inventory.webp",
      "/projects/project-21/scenario.png",
    ],
    technicalHighlights: [
      "Aggregated forecast and inventory data into planner-friendly SQL/NoSQL views",
      "Exposed simulation endpoints from a Python FastAPI backend",
      "Developed interactive charts and tables in Next.js with Tailwind CSS styling",
    ],
    challengesSolutions: [
      "Complex business rules → Encapsulated constraints into configurable policy modules",
      "Skepticism toward new tooling → Added side-by-side views of historical plan vs. actual outcomes",
    ],
    links: [],
    categories: ["Forecasting/Time-Series", "Full-Stack Application", "AI/ML"],
    techStack: ["Python", "FastAPI", "SQL/NoSQL", "Next.js", "Tailwind CSS"],
    year: 2025,
  },
  {
    title: "Interactive AI-Enhanced Portfolio with 3D Scenes",
    slug: "interactive-ai-enhanced-portfolio-with-3d-scenes",
    impact: "+11% increase in visitor engagement",
    description:
      "Built a personal portfolio highlighting AI and full-stack work with immersive visuals. Integrated subtle AI-generated content and interactions to demonstrate capabilities. Delivered a polished experience that loads quickly while showcasing advanced UI.",
    defaultImage: "/projects/project-22/hero.webp",
    gallery: [
      "/projects/project-22/hero.webp",
      "/projects/project-22/projects.png",
      "/projects/project-22/details.webp",
    ],
    technicalHighlights: [
      "Implemented 3D scenes using Three.js and animated transitions with Framer Motion",
      "Structured content as reusable components in Next.js with Tailwind CSS styling",
      "Optimized images and code-splitting to maintain fast performance scores",
    ],
    challengesSolutions: [
      "Balancing visuals with performance → Used selective hydration and deferred heavy components",
      "Ensuring accessibility → Added semantic markup and keyboard-friendly navigation",
    ],
    links: [{ label: "Live Site", url: "#" }],
    categories: ["Full-Stack Application"],
    techStack: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "Git/GitHub"],
    year: 2025,
  },
  {
    title: "MLOps Monitoring Dashboard for Deployed Models",
    slug: "mlops-monitoring-dashboard-for-deployed-models",
    impact: "+19% faster incident detection for models",
    description:
      "Created a monitoring dashboard focused on production ML services, tracking latency, error rates, and data drift. Provided unified views across forecasting, NLP, and CV models. Helped teams catch quality issues earlier and prioritize remediation.",
    defaultImage: "/projects/project-23/hero.webp",
    gallery: [
      "/projects/project-23/overview.webp",
      "/projects/project-23/drift.png",
    ],
    technicalHighlights: [
      "Ingested metrics and feature summaries from Python services into a central SQL/NoSQL store",
      "Exposed a FastAPI backend for aggregations consumed by a Next.js dashboard",
      "Built reusable chart components and alert configuration panels in Tailwind CSS",
    ],
    challengesSolutions: [
      "Fragmented logging formats → Standardized log schemas and added structured logging adapters",
      "Unclear ownership of incidents → Added model ownership metadata and on-call routing fields",
    ],
    links: [{ label: "Internal Demo", url: "#" }],
    categories: ["MLOps/Deployment", "AI/ML", "Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "SQL/NoSQL", "Git/GitHub"],
    year: 2025,
  },
  {
    title: "LLM-Assisted Code Search and Documentation Helper",
    slug: "llm-assisted-code-search-and-documentation-helper",
    impact: "+13% faster onboarding for engineers",
    description:
      "Built an internal tool that let engineers search codebases and documentation using natural language. Combined static code search with LLM-based summaries of relevant files. Reduced the ramp-up time for new joiners and improved discoverability of patterns.",
    defaultImage: "/projects/project-24/hero.webp",
    gallery: [
      "/projects/project-24/search.webp",
      "/projects/project-24/summary.png",
      "/projects/project-24/snippets.webp",
    ],
    technicalHighlights: [
      "Indexed repositories with Python workers and stored metadata in SQL/NoSQL",
      "Provided a FastAPI backend that fused lexical code search with LLM-powered explanations",
      "Implemented a Next.js front-end with keyboard-driven navigation and live previews",
    ],
    challengesSolutions: [
      "Large monorepos → Added incremental indexing and repository partitioning",
      "Need to avoid leaking secrets → Integrated basic static analysis and allowlist rules before sending content to LLMs",
    ],
    links: [{ label: "GitHub Repo", url: "#" }],
    categories: ["LLM Integration", "Full-Stack Application"],
    techStack: ["Python", "FastAPI", "Next.js", "Tailwind CSS", "Docker", "Git/GitHub"],
    year: 2025,
  },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Helper function to get projects by category
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.categories.includes(category));
}

// Helper function to get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((p) => p.categories.forEach((c) => categories.add(c)));
  return Array.from(categories).sort();
}

// Helper function to get all unique tech stack items
export function getAllTechStack(): string[] {
  const tech = new Set<string>();
  projects.forEach((p) => p.techStack.forEach((t) => tech.add(t)));
  return Array.from(tech).sort();
}

// Helper function to get projects sorted by year (descending)
export function getProjectsByYear(): Map<number, Project[]> {
  const byYear = new Map<number, Project[]>();
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  
  sortedProjects.forEach((project) => {
    const existing = byYear.get(project.year) || [];
    existing.push(project);
    byYear.set(project.year, existing);
  });
  
  return byYear;
}

// Helper function to get all unique years
export function getAllYears(): number[] {
  const years = new Set<number>();
  projects.forEach((p) => years.add(p.year));
  return Array.from(years).sort((a, b) => b - a);
}
