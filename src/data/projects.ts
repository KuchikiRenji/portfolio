import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Demand Forecasting Engine",
    slug: "demand-forecasting-engine",
    impact: "+20% forecasting accuracy",
    description:
      "Enterprise-grade demand prediction system using temporal fusion transformers. Processes 10K+ SKUs daily with real-time feature engineering and automated retraining pipelines.",
    defaultImage: "/projects/demand-forecasting-engine/hero.webp",
    gallery: [
      "/projects/demand-forecasting-engine/dashboard.webp",
      "/projects/demand-forecasting-engine/architecture.webp",
      "/projects/demand-forecasting-engine/metrics.webp",
    ],
    technicalHighlights: [
      "Temporal Fusion Transformer architecture with attention mechanisms",
      "Real-time feature store with Redis and Apache Kafka",
      "Automated model retraining with MLflow tracking",
      "Sub-100ms inference latency at scale",
    ],
    challengesSolutions: [
      "Challenge: Handling 10K+ SKUs with varying seasonality → Solution: Hierarchical forecasting with cross-learning",
      "Challenge: Cold-start for new products → Solution: Transfer learning from similar product clusters",
      "Challenge: Real-time updates → Solution: Event-driven architecture with Kafka streams",
    ],
    links: [
      { label: "Case Study", url: "/blog/demand-forecasting-deep-dive" },
    ],
    categories: ["AI/ML", "Predictive Modeling", "Data Engineering"],
    techStack: ["PyTorch", "FastAPI", "Kafka", "Redis", "MLflow", "AWS"],
    year: 2025,
  },
  {
    title: "Real-Time OCR Pipeline",
    slug: "real-time-ocr-pipeline",
    impact: "+15% extraction accuracy",
    description:
      "High-throughput document processing system for manufacturing QC. Handles 1M+ documents monthly with multi-language support and custom fine-tuned models.",
    defaultImage: "/projects/real-time-ocr-pipeline/hero.webp",
    gallery: [
      "/projects/real-time-ocr-pipeline/interface.webp",
      "/projects/real-time-ocr-pipeline/accuracy.webp",
      "/projects/real-time-ocr-pipeline/flow.webp",
    ],
    technicalHighlights: [
      "Custom fine-tuned TrOCR models for domain-specific text",
      "Parallel processing with Ray for horizontal scaling",
      "Active learning pipeline for continuous improvement",
      "Multi-language support (JP, EN, CN, KR)",
    ],
    challengesSolutions: [
      "Challenge: Low-quality scanned documents → Solution: Pre-processing pipeline with denoising and deskewing",
      "Challenge: Domain-specific terminology → Solution: Custom vocabulary and fine-tuning on labeled data",
      "Challenge: Processing speed requirements → Solution: GPU batching and async processing",
    ],
    links: [{ label: "GitHub", url: "https://github.com/kuchikirenji/ocr-pipeline" }],
    categories: ["Computer Vision", "AI/ML", "Real-Time Systems"],
    techStack: ["PyTorch", "TrOCR", "Ray", "FastAPI", "PostgreSQL", "Docker"],
    year: 2024,
  },
  {
    title: "Conversational AI Assistant",
    slug: "conversational-ai-assistant",
    impact: "40% reduction in support tickets",
    description:
      "LLM-powered customer support assistant with RAG architecture. Handles complex multi-turn conversations with context-aware responses and seamless human handoff.",
    defaultImage: "/projects/conversational-ai-assistant/hero.webp",
    gallery: [
      "/projects/conversational-ai-assistant/chat.webp",
      "/projects/conversational-ai-assistant/analytics.webp",
      "/projects/conversational-ai-assistant/admin.webp",
    ],
    technicalHighlights: [
      "RAG architecture with hybrid search (dense + sparse)",
      "Fine-tuned LLaMA 2 for domain adaptation",
      "Streaming responses with Server-Sent Events",
      "Guardrails for safe and accurate responses",
    ],
    challengesSolutions: [
      "Challenge: Hallucination in responses → Solution: RAG with citation verification",
      "Challenge: Context window limits → Solution: Hierarchical summarization of conversation history",
      "Challenge: Latency requirements → Solution: Speculative decoding and KV cache optimization",
    ],
    links: [{ label: "Live Demo", url: "https://demo.kuchikirenji.dev/assistant" }],
    categories: ["LLM/GenAI", "NLP", "Full-Stack"],
    techStack: ["LangChain", "LLaMA", "Pinecone", "Next.js", "FastAPI", "Redis"],
    year: 2025,
  },
  {
    title: "Defect Detection System",
    slug: "defect-detection-system",
    impact: "99.2% detection rate",
    description:
      "Computer vision system for real-time manufacturing defect detection. Deployed on edge devices with sub-50ms inference for production line integration.",
    defaultImage: "/projects/defect-detection-system/hero.webp",
    gallery: [
      "/projects/defect-detection-system/detection.webp",
      "/projects/defect-detection-system/dashboard.webp",
      "/projects/defect-detection-system/edge.webp",
    ],
    technicalHighlights: [
      "YOLOv8 with custom anchor optimization",
      "TensorRT optimization for edge deployment",
      "Real-time alerting with WebSocket streaming",
      "Synthetic data augmentation for rare defect types",
    ],
    challengesSolutions: [
      "Challenge: Imbalanced dataset (rare defects) → Solution: Synthetic data generation with GANs",
      "Challenge: Edge compute constraints → Solution: Model pruning and quantization",
      "Challenge: Variable lighting conditions → Solution: Domain randomization in training",
    ],
    categories: ["Computer Vision", "AI/ML", "Real-Time Systems"],
    techStack: ["PyTorch", "YOLOv8", "TensorRT", "NVIDIA Jetson", "FastAPI", "WebSocket"],
    year: 2023,
  },
  {
    title: "Sentiment Analysis API",
    slug: "sentiment-analysis-api",
    impact: "10M+ requests/month",
    description:
      "Production NLP API for multi-language sentiment analysis. Serves 10M+ requests monthly with automatic scaling and 99.9% uptime SLA.",
    defaultImage: "/projects/sentiment-analysis-api/hero.webp",
    gallery: [
      "/projects/sentiment-analysis-api/api.webp",
      "/projects/sentiment-analysis-api/monitoring.webp",
      "/projects/sentiment-analysis-api/docs.webp",
    ],
    technicalHighlights: [
      "Distilled BERT models for fast inference",
      "Multi-language support with language detection",
      "Auto-scaling with Kubernetes HPA",
      "Comprehensive API documentation with OpenAPI",
    ],
    challengesSolutions: [
      "Challenge: Latency at scale → Solution: Model distillation and ONNX optimization",
      "Challenge: Traffic spikes → Solution: Predictive auto-scaling based on historical patterns",
      "Challenge: Multi-language accuracy → Solution: Language-specific fine-tuning with shared backbone",
    ],
    links: [{ label: "API Docs", url: "https://api.kuchikirenji.dev/docs" }],
    categories: ["NLP", "AI/ML", "DevOps/MLOps"],
    techStack: ["Transformers", "ONNX", "FastAPI", "Kubernetes", "Prometheus", "Grafana"],
    year: 2023,
  },
  {
    title: "Inventory Optimization Platform",
    slug: "inventory-optimization-platform",
    impact: "$2.4M annual savings",
    description:
      "ML-powered inventory management system reducing overstock and stockouts. Integrates with ERP systems for automated reorder recommendations.",
    defaultImage: "/projects/inventory-optimization-platform/hero.webp",
    gallery: [
      "/projects/inventory-optimization-platform/dashboard.webp",
      "/projects/inventory-optimization-platform/recommendations.webp",
      "/projects/inventory-optimization-platform/analytics.webp",
    ],
    technicalHighlights: [
      "Multi-objective optimization with genetic algorithms",
      "Integration with SAP and Oracle ERP systems",
      "What-if scenario simulation engine",
      "Automated reorder point calculations",
    ],
    challengesSolutions: [
      "Challenge: Complex supply chain constraints → Solution: Constraint programming with OR-Tools",
      "Challenge: ERP integration complexity → Solution: Adapter pattern with message queues",
      "Challenge: User trust in recommendations → Solution: Explainable AI with feature importance",
    ],
    categories: ["AI/ML", "Predictive Modeling", "Data Engineering"],
    techStack: ["Python", "OR-Tools", "FastAPI", "PostgreSQL", "RabbitMQ", "React"],
    year: 2024,
  },
  {
    title: "Code Review Assistant",
    slug: "code-review-assistant",
    impact: "30% faster reviews",
    description:
      "AI-powered code review tool that identifies bugs, security vulnerabilities, and style issues. Integrates with GitHub and GitLab for seamless workflow.",
    defaultImage: "/projects/code-review-assistant/hero.webp",
    gallery: [
      "/projects/code-review-assistant/review.webp",
      "/projects/code-review-assistant/suggestions.webp",
      "/projects/code-review-assistant/settings.webp",
    ],
    technicalHighlights: [
      "Fine-tuned CodeLLaMA for code understanding",
      "AST parsing for structural analysis",
      "GitHub/GitLab webhook integration",
      "Custom rule engine for team standards",
    ],
    challengesSolutions: [
      "Challenge: False positives frustrating developers → Solution: Confidence scoring with human feedback loop",
      "Challenge: Large codebases → Solution: Incremental analysis with diff-only processing",
      "Challenge: Language coverage → Solution: Tree-sitter for multi-language AST parsing",
    ],
    links: [{ label: "GitHub App", url: "https://github.com/apps/kuchiki-reviewer" }],
    categories: ["LLM/GenAI", "DevOps/MLOps", "Open Source"],
    techStack: ["CodeLLaMA", "Tree-sitter", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    year: 2025,
  },
  {
    title: "Time Series Anomaly Detector",
    slug: "time-series-anomaly-detector",
    impact: "85% fewer false alarms",
    description:
      "Unsupervised anomaly detection for IoT sensor data. Processes millions of data points in real-time with adaptive thresholding and contextual awareness.",
    defaultImage: "/projects/time-series-anomaly-detector/hero.webp",
    gallery: [
      "/projects/time-series-anomaly-detector/dashboard.webp",
      "/projects/time-series-anomaly-detector/alerts.webp",
      "/projects/time-series-anomaly-detector/config.webp",
    ],
    technicalHighlights: [
      "Transformer-based autoencoder for sequence modeling",
      "Adaptive thresholding with seasonal adjustment",
      "Real-time processing with Apache Flink",
      "Multi-variate correlation analysis",
    ],
    challengesSolutions: [
      "Challenge: Concept drift in sensor behavior → Solution: Online learning with sliding window retraining",
      "Challenge: Alert fatigue → Solution: Anomaly clustering and root cause correlation",
      "Challenge: Missing data handling → Solution: Imputation with uncertainty quantification",
    ],
    categories: ["AI/ML", "Real-Time Systems", "Data Engineering"],
    techStack: ["PyTorch", "Apache Flink", "InfluxDB", "Grafana", "Kubernetes", "Go"],
    year: 2022,
  },
  {
    title: "Document Intelligence Suite",
    slug: "document-intelligence-suite",
    impact: "80% automation rate",
    description:
      "End-to-end document processing platform with classification, extraction, and validation. Handles invoices, contracts, and forms with high accuracy.",
    defaultImage: "/projects/document-intelligence-suite/hero.webp",
    gallery: [
      "/projects/document-intelligence-suite/upload.webp",
      "/projects/document-intelligence-suite/extraction.webp",
      "/projects/document-intelligence-suite/validation.webp",
    ],
    technicalHighlights: [
      "LayoutLM for document understanding",
      "Custom NER for entity extraction",
      "Rule-based validation with fuzzy matching",
      "Human-in-the-loop for edge cases",
    ],
    challengesSolutions: [
      "Challenge: Varied document layouts → Solution: Few-shot learning with layout embeddings",
      "Challenge: Handwritten text → Solution: Ensemble of HTR models",
      "Challenge: Data privacy → Solution: On-premise deployment with encryption at rest",
    ],
    links: [{ label: "Product Page", url: "https://kuchikirenji.dev/products/docint" }],
    categories: ["Computer Vision", "NLP", "AI/ML"],
    techStack: ["LayoutLM", "spaCy", "FastAPI", "PostgreSQL", "MinIO", "Docker"],
    year: 2023,
  },
  {
    title: "Recommendation Engine",
    slug: "recommendation-engine",
    impact: "+25% click-through rate",
    description:
      "Personalized recommendation system for e-commerce platform. Combines collaborative filtering with content-based approaches for cold-start handling.",
    defaultImage: "/projects/recommendation-engine/hero.webp",
    gallery: [
      "/projects/recommendation-engine/recommendations.webp",
      "/projects/recommendation-engine/analytics.webp",
      "/projects/recommendation-engine/ab-test.webp",
    ],
    technicalHighlights: [
      "Two-tower neural network architecture",
      "Real-time feature serving with Feast",
      "A/B testing framework integration",
      "Diversity and fairness constraints",
    ],
    challengesSolutions: [
      "Challenge: Cold-start for new users → Solution: Content-based fallback with demographic clustering",
      "Challenge: Filter bubbles → Solution: Exploration-exploitation with Thompson sampling",
      "Challenge: Real-time updates → Solution: Incremental model updates with online learning",
    ],
    categories: ["AI/ML", "Predictive Modeling", "Full-Stack"],
    techStack: ["TensorFlow", "Feast", "FastAPI", "Redis", "Elasticsearch", "Kubernetes"],
    year: 2022,
  },
  {
    title: "Speech-to-Text Pipeline",
    slug: "speech-to-text-pipeline",
    impact: "95% transcription accuracy",
    description:
      "Production speech recognition system for call center analytics. Supports real-time transcription with speaker diarization and emotion detection.",
    defaultImage: "/projects/speech-to-text-pipeline/hero.webp",
    gallery: [
      "/projects/speech-to-text-pipeline/transcription.webp",
      "/projects/speech-to-text-pipeline/analytics.webp",
      "/projects/speech-to-text-pipeline/emotions.webp",
    ],
    technicalHighlights: [
      "Whisper large-v3 with custom fine-tuning",
      "Speaker diarization with pyannote",
      "Emotion detection from voice features",
      "Real-time streaming with WebRTC",
    ],
    challengesSolutions: [
      "Challenge: Background noise in calls → Solution: Noise suppression with RNNoise",
      "Challenge: Domain-specific jargon → Solution: Custom vocabulary and language model fusion",
      "Challenge: Latency requirements → Solution: Streaming ASR with chunked processing",
    ],
    categories: ["AI/ML", "NLP", "Real-Time Systems"],
    techStack: ["Whisper", "pyannote", "FastAPI", "WebRTC", "PostgreSQL", "GCP"],
    year: 2024,
  },
  {
    title: "MLOps Platform",
    slug: "mlops-platform",
    impact: "5x faster deployments",
    description:
      "Internal ML platform enabling data scientists to deploy models with minimal DevOps knowledge. Features one-click deployment, monitoring, and rollback.",
    defaultImage: "/projects/mlops-platform/hero.webp",
    gallery: [
      "/projects/mlops-platform/dashboard.webp",
      "/projects/mlops-platform/deploy.webp",
      "/projects/mlops-platform/monitoring.webp",
    ],
    technicalHighlights: [
      "GitOps-based deployment with ArgoCD",
      "Model registry with versioning and lineage",
      "Automated canary deployments",
      "Drift detection and alerting",
    ],
    challengesSolutions: [
      "Challenge: Heterogeneous model frameworks → Solution: Containerized serving with Triton",
      "Challenge: Resource optimization → Solution: Auto-scaling based on traffic patterns",
      "Challenge: Reproducibility → Solution: DVC for data versioning with experiment tracking",
    ],
    links: [{ label: "Documentation", url: "https://docs.kuchikirenji.dev/mlops" }],
    categories: ["DevOps/MLOps", "Full-Stack", "Data Engineering"],
    techStack: ["Kubernetes", "ArgoCD", "MLflow", "Triton", "Prometheus", "Terraform"],
    year: 2024,
  },
  {
    title: "Image Generation API",
    slug: "image-generation-api",
    impact: "500K+ images/month",
    description:
      "Scalable image generation service using Stable Diffusion. Offers fine-tuned models for specific styles with fast inference and content moderation.",
    defaultImage: "/projects/image-generation-api/hero.webp",
    gallery: [
      "/projects/image-generation-api/gallery.webp",
      "/projects/image-generation-api/styles.webp",
      "/projects/image-generation-api/api.webp",
    ],
    technicalHighlights: [
      "SDXL with LoRA fine-tuning for custom styles",
      "Optimized inference with TensorRT",
      "Content moderation with NSFW detection",
      "Queue-based processing with priority tiers",
    ],
    challengesSolutions: [
      "Challenge: GPU cost optimization → Solution: Spot instances with checkpointing",
      "Challenge: Generation diversity → Solution: Prompt engineering and CFG scheduling",
      "Challenge: Content safety → Solution: Multi-stage moderation pipeline",
    ],
    links: [{ label: "API Docs", url: "https://api.kuchikirenji.dev/image/docs" }],
    categories: ["LLM/GenAI", "Computer Vision", "DevOps/MLOps"],
    techStack: ["Stable Diffusion", "TensorRT", "FastAPI", "Redis", "S3", "Kubernetes"],
    year: 2025,
  },
  {
    title: "Knowledge Graph Builder",
    slug: "knowledge-graph-builder",
    impact: "3x faster research",
    description:
      "Automated knowledge graph construction from unstructured text. Extracts entities, relationships, and builds queryable graph databases for enterprise search.",
    defaultImage: "/projects/knowledge-graph-builder/hero.webp",
    gallery: [
      "/projects/knowledge-graph-builder/graph.webp",
      "/projects/knowledge-graph-builder/extraction.webp",
      "/projects/knowledge-graph-builder/search.webp",
    ],
    technicalHighlights: [
      "LLM-based entity and relation extraction",
      "Neo4j for graph storage and queries",
      "Incremental graph updates",
      "Natural language to Cypher translation",
    ],
    challengesSolutions: [
      "Challenge: Entity disambiguation → Solution: Coreference resolution with entity linking",
      "Challenge: Graph quality → Solution: Human feedback loop with active learning",
      "Challenge: Query complexity → Solution: LLM-powered natural language interface",
    ],
    categories: ["NLP", "LLM/GenAI", "Data Engineering"],
    techStack: ["GPT-4", "Neo4j", "spaCy", "FastAPI", "React", "Docker"],
    year: 2025,
  },
  {
    title: "Video Analytics Platform",
    slug: "video-analytics-platform",
    impact: "Real-time processing at 30fps",
    description:
      "Multi-camera video analytics for retail and security. Supports object tracking, crowd counting, and behavior analysis with privacy-preserving features.",
    defaultImage: "/projects/video-analytics-platform/hero.webp",
    gallery: [
      "/projects/video-analytics-platform/tracking.webp",
      "/projects/video-analytics-platform/heatmap.webp",
      "/projects/video-analytics-platform/alerts.webp",
    ],
    technicalHighlights: [
      "Multi-object tracking with DeepSORT",
      "Privacy-preserving with on-device blur",
      "Heatmap generation for traffic analysis",
      "Edge-cloud hybrid architecture",
    ],
    challengesSolutions: [
      "Challenge: Multi-camera tracking → Solution: Re-identification with appearance features",
      "Challenge: Privacy compliance → Solution: Face/body blur before cloud upload",
      "Challenge: Bandwidth constraints → Solution: Event-triggered cloud sync",
    ],
    categories: ["Computer Vision", "Real-Time Systems", "AI/ML"],
    techStack: ["PyTorch", "DeepSORT", "NVIDIA DeepStream", "Kafka", "ClickHouse", "Grafana"],
    year: 2022,
  },
  {
    title: "Fraud Detection System",
    slug: "fraud-detection-system",
    impact: "$1.2M fraud prevented",
    description:
      "Real-time transaction fraud detection using graph neural networks. Analyzes transaction patterns and network relationships for anomaly detection.",
    defaultImage: "/projects/fraud-detection-system/hero.webp",
    gallery: [
      "/projects/fraud-detection-system/dashboard.webp",
      "/projects/fraud-detection-system/alerts.webp",
      "/projects/fraud-detection-system/investigation.webp",
    ],
    technicalHighlights: [
      "Graph neural networks for relationship modeling",
      "Real-time scoring with sub-100ms latency",
      "Explainable predictions for investigators",
      "Adaptive rules with feedback integration",
    ],
    challengesSolutions: [
      "Challenge: Evolving fraud patterns → Solution: Online learning with concept drift detection",
      "Challenge: False positive costs → Solution: Multi-stage scoring with human review tier",
      "Challenge: Explanation requirements → Solution: GNN attention visualization",
    ],
    categories: ["AI/ML", "Real-Time Systems", "Data Engineering"],
    techStack: ["PyTorch Geometric", "Neo4j", "Kafka", "FastAPI", "PostgreSQL", "Kubernetes"],
    year: 2023,
  },
  {
    title: "A/B Testing Platform",
    slug: "ab-testing-platform",
    impact: "50+ experiments/quarter",
    description:
      "Statistical experimentation platform for product teams. Features automated sample size calculation, real-time monitoring, and causal inference methods.",
    defaultImage: "/projects/ab-testing-platform/hero.webp",
    gallery: [
      "/projects/ab-testing-platform/experiments.webp",
      "/projects/ab-testing-platform/results.webp",
      "/projects/ab-testing-platform/config.webp",
    ],
    technicalHighlights: [
      "Bayesian and frequentist analysis options",
      "Sequential testing with early stopping",
      "Causal inference with CUPED variance reduction",
      "Feature flag integration",
    ],
    challengesSolutions: [
      "Challenge: Multiple comparison problem → Solution: FDR control with Benjamini-Hochberg",
      "Challenge: Long-term effects → Solution: Synthetic control methods",
      "Challenge: Network effects → Solution: Cluster-based randomization",
    ],
    links: [{ label: "Documentation", url: "https://docs.kuchikirenji.dev/experimentation" }],
    categories: ["Data Engineering", "Full-Stack", "AI/ML"],
    techStack: ["Python", "Stan", "FastAPI", "PostgreSQL", "React", "Redis"],
    year: 2021,
  },
  {
    title: "Data Labeling Platform",
    slug: "data-labeling-platform",
    impact: "10x labeling efficiency",
    description:
      "ML-assisted data labeling tool for computer vision and NLP tasks. Features active learning, quality control, and workforce management.",
    defaultImage: "/projects/data-labeling-platform/hero.webp",
    gallery: [
      "/projects/data-labeling-platform/annotation.webp",
      "/projects/data-labeling-platform/queue.webp",
      "/projects/data-labeling-platform/quality.webp",
    ],
    technicalHighlights: [
      "Active learning for sample prioritization",
      "Pre-labeling with model predictions",
      "Inter-annotator agreement metrics",
      "Customizable annotation interfaces",
    ],
    challengesSolutions: [
      "Challenge: Annotator quality variance → Solution: Gold standard tests and agreement metrics",
      "Challenge: Complex annotation types → Solution: Plugin architecture for custom tools",
      "Challenge: Scale management → Solution: Task routing with skill-based assignment",
    ],
    categories: ["Full-Stack", "AI/ML", "Data Engineering"],
    techStack: ["React", "FastAPI", "PostgreSQL", "Redis", "S3", "Docker"],
    year: 2021,
  },
  {
    title: "Semantic Search Engine",
    slug: "semantic-search-engine",
    impact: "+40% search relevance",
    description:
      "Vector-based semantic search for enterprise documents. Combines dense and sparse retrieval with re-ranking for optimal relevance.",
    defaultImage: "/projects/semantic-search-engine/hero.webp",
    gallery: [
      "/projects/semantic-search-engine/search.webp",
      "/projects/semantic-search-engine/results.webp",
      "/projects/semantic-search-engine/admin.webp",
    ],
    technicalHighlights: [
      "Hybrid search with BM25 and dense vectors",
      "Cross-encoder re-ranking for precision",
      "Multi-modal search (text + images)",
      "Incremental indexing for real-time updates",
    ],
    challengesSolutions: [
      "Challenge: Domain vocabulary → Solution: Custom embedding fine-tuning",
      "Challenge: Index freshness → Solution: Streaming updates with change data capture",
      "Challenge: Result diversity → Solution: MMR-based result selection",
    ],
    categories: ["NLP", "AI/ML", "Full-Stack"],
    techStack: ["Sentence Transformers", "Elasticsearch", "Qdrant", "FastAPI", "React", "Kubernetes"],
    year: 2024,
  },
  {
    title: "Model Compression Toolkit",
    slug: "model-compression-toolkit",
    impact: "4x smaller models",
    description:
      "Open-source toolkit for neural network compression. Supports quantization, pruning, and knowledge distillation with minimal accuracy loss.",
    defaultImage: "/projects/model-compression-toolkit/hero.webp",
    gallery: [
      "/projects/model-compression-toolkit/comparison.webp",
      "/projects/model-compression-toolkit/workflow.webp",
      "/projects/model-compression-toolkit/benchmarks.webp",
    ],
    technicalHighlights: [
      "Post-training quantization (INT8, INT4)",
      "Structured and unstructured pruning",
      "Knowledge distillation framework",
      "Benchmark suite for compression evaluation",
    ],
    challengesSolutions: [
      "Challenge: Accuracy degradation → Solution: Quantization-aware training option",
      "Challenge: Hardware compatibility → Solution: Backend-specific optimization paths",
      "Challenge: Usability → Solution: High-level API with sensible defaults",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/kuchikirenji/compress-toolkit" },
      { label: "PyPI", url: "https://pypi.org/project/compress-toolkit" },
    ],
    categories: ["Open Source", "AI/ML", "DevOps/MLOps"],
    techStack: ["PyTorch", "ONNX", "TensorRT", "Python", "GitHub Actions"],
    year: 2022,
  },
  {
    title: "Chatbot Analytics Dashboard",
    slug: "chatbot-analytics-dashboard",
    impact: "360° conversation insights",
    description:
      "Analytics platform for conversational AI monitoring. Tracks user satisfaction, intent coverage, and conversation quality metrics.",
    defaultImage: "/projects/chatbot-analytics-dashboard/hero.webp",
    gallery: [
      "/projects/chatbot-analytics-dashboard/overview.webp",
      "/projects/chatbot-analytics-dashboard/conversations.webp",
      "/projects/chatbot-analytics-dashboard/intents.webp",
    ],
    technicalHighlights: [
      "Real-time conversation streaming",
      "Automatic intent clustering",
      "Sentiment trend analysis",
      "Customizable alerting rules",
    ],
    challengesSolutions: [
      "Challenge: High volume data → Solution: ClickHouse for analytics queries",
      "Challenge: Intent discovery → Solution: Unsupervised clustering with topic modeling",
      "Challenge: Dashboard performance → Solution: Pre-aggregated materialized views",
    ],
    categories: ["Full-Stack", "NLP", "Data Engineering"],
    techStack: ["Next.js", "ClickHouse", "Kafka", "FastAPI", "Recharts", "PostgreSQL"],
    year: 2024,
  },
  {
    title: "AutoML Pipeline",
    slug: "automl-pipeline",
    impact: "80% faster prototyping",
    description:
      "Automated machine learning system for rapid model development. Handles feature engineering, model selection, and hyperparameter tuning automatically.",
    defaultImage: "/projects/automl-pipeline/hero.webp",
    gallery: [
      "/projects/automl-pipeline/workflow.webp",
      "/projects/automl-pipeline/results.webp",
      "/projects/automl-pipeline/explanation.webp",
    ],
    technicalHighlights: [
      "Neural architecture search for deep learning",
      "Automated feature engineering with Featuretools",
      "Bayesian hyperparameter optimization",
      "Model explanation with SHAP",
    ],
    challengesSolutions: [
      "Challenge: Compute costs → Solution: Early stopping with performance prediction",
      "Challenge: Overfitting → Solution: Nested cross-validation with holdout",
      "Challenge: Interpretability → Solution: Automatic report generation with insights",
    ],
    categories: ["AI/ML", "DevOps/MLOps", "Data Engineering"],
    techStack: ["Optuna", "Ray Tune", "scikit-learn", "XGBoost", "FastAPI", "PostgreSQL"],
    year: 2021,
  },
  {
    title: "Real-Time Translator",
    slug: "real-time-translator",
    impact: "Support for 12 languages",
    description:
      "Low-latency translation service for live communications. Supports text, speech, and document translation with context preservation.",
    defaultImage: "/projects/real-time-translator/hero.webp",
    gallery: [
      "/projects/real-time-translator/interface.webp",
      "/projects/real-time-translator/speech.webp",
      "/projects/real-time-translator/documents.webp",
    ],
    technicalHighlights: [
      "NLLB-200 for broad language coverage",
      "Streaming translation for live speech",
      "Domain adaptation with terminology glossaries",
      "Context-aware translation with memory",
    ],
    challengesSolutions: [
      "Challenge: Technical terminology → Solution: Custom glossary injection",
      "Challenge: Streaming latency → Solution: Incremental decoding with word-level output",
      "Challenge: Quality assurance → Solution: Automatic quality estimation with confidence scores",
    ],
    categories: ["NLP", "AI/ML", "Real-Time Systems"],
    techStack: ["NLLB", "FastAPI", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    year: 2024,
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    impact: "Interactive 3D experience",
    description:
      "This very portfolio you're viewing! Built with Next.js 15, Three.js, and Framer Motion. Features 3D scenes, smooth animations, and glassmorphism design.",
    defaultImage: "/projects/portfolio-website/hero.webp",
    gallery: [
      "/projects/portfolio-website/hero-section.webp",
      "/projects/portfolio-website/projects.webp",
      "/projects/portfolio-website/about.webp",
    ],
    technicalHighlights: [
      "React Three Fiber for 3D graphics",
      "Framer Motion for fluid animations",
      "ISR for optimal performance",
      "Glassmorphism design system",
    ],
    challengesSolutions: [
      "Challenge: 3D performance on mobile → Solution: Adaptive quality with device detection",
      "Challenge: Bundle size → Solution: Dynamic imports and code splitting",
      "Challenge: SEO with client components → Solution: Server components with metadata API",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/kuchikirenji/portfolio" },
      { label: "Live Site", url: "https://kuchikirenji.dev" },
    ],
    categories: ["Full-Stack", "Open Source"],
    techStack: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    year: 2026,
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
