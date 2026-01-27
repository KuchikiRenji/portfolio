export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  type: "work" | "education" | "milestone";
}

export interface Skill {
  name: string;
  icon: string;
  category: "ml" | "backend" | "devops" | "frontend" | "data";
  proficiency: number; // 0-100
}

export const bio = {
  name: "Kuchiki Renji",
  title: "AI Engineer & Full-Stack Developer",
  location: "Fukuoka, Japan",
  tagline:
    "Formerly led AI at Quackshift. I specialize in production MLOps, real-time computer vision, and full-stack AI integration.",
  description: `I'm an AI Engineer passionate about turning cutting-edge research into production systems that actually work. With 8+ years of experience shipping ML models at scale, I've learned that the hardest part isn't building the model—it's making it reliable, fast, and maintainable.

When I'm not optimizing inference latency or debugging data pipelines, you'll find me exploring Fukuoka's ramen scene, practicing kendo, or contributing to open-source ML tools.`,
  email: "renji@kuchikirenji.dev",
  github: "https://github.com/kuchikirenji",
  linkedin: "https://linkedin.com/in/kuchikirenji",
  twitter: "https://twitter.com/kuchikirenji",
};

export const timeline: TimelineEvent[] = [
  {
    year: "2026",
    title: "Independent AI Consultant",
    company: "Self-Employed",
    description:
      "Building custom AI solutions for startups and enterprises. Focus on LLM applications and MLOps.",
    highlights: [
      "Launched 3 production AI products",
      "Advisory roles at 2 AI startups",
    ],
    type: "work",
  },
  {
    year: "2024",
    title: "Head of AI Engineering",
    company: "Quackshift",
    description:
      "Led a team of 8 engineers building demand forecasting and inventory optimization systems.",
    highlights: [
      "Scaled ML platform to 10K+ SKUs",
      "$2.4M annual cost savings",
      "Reduced inference latency by 80%",
    ],
    type: "work",
  },
  {
    year: "2022",
    title: "Senior ML Engineer",
    company: "Quackshift",
    description:
      "Architected the core forecasting pipeline using transformers and real-time feature engineering.",
    highlights: [
      "Built temporal fusion transformer",
      "Implemented MLOps pipeline",
      "20% accuracy improvement",
    ],
    type: "work",
  },
  {
    year: "2020",
    title: "ML Engineer",
    company: "TechCorp Japan",
    description:
      "Computer vision and NLP systems for manufacturing quality control and document processing.",
    highlights: [
      "Real-time defect detection",
      "OCR pipeline processing 1M+ docs",
    ],
    type: "work",
  },
  {
    year: "2018",
    title: "Software Engineer",
    company: "StartupXYZ",
    description:
      "Full-stack development with growing focus on data engineering and early ML projects.",
    highlights: ["First production ML model", "Data pipeline architecture"],
    type: "work",
  },
  {
    year: "2018",
    title: "M.S. Computer Science",
    company: "Kyushu University",
    description: "Focus on machine learning and distributed systems.",
    highlights: ["Thesis on neural architecture search", "Published 2 papers"],
    type: "education",
  },
];

export const skills: Skill[] = [
  // ML
  { name: "PyTorch", icon: "🔥", category: "ml", proficiency: 95 },
  { name: "TensorFlow", icon: "🧠", category: "ml", proficiency: 85 },
  { name: "LangChain", icon: "🔗", category: "ml", proficiency: 90 },
  { name: "Transformers", icon: "🤖", category: "ml", proficiency: 92 },
  { name: "scikit-learn", icon: "📊", category: "ml", proficiency: 90 },

  // Backend
  { name: "Python", icon: "🐍", category: "backend", proficiency: 98 },
  { name: "FastAPI", icon: "⚡", category: "backend", proficiency: 95 },
  { name: "Node.js", icon: "💚", category: "backend", proficiency: 85 },
  { name: "Go", icon: "🐹", category: "backend", proficiency: 70 },

  // DevOps
  { name: "Docker", icon: "🐳", category: "devops", proficiency: 92 },
  { name: "Kubernetes", icon: "☸️", category: "devops", proficiency: 88 },
  { name: "AWS", icon: "☁️", category: "devops", proficiency: 90 },
  { name: "Terraform", icon: "🏗️", category: "devops", proficiency: 82 },

  // Data
  { name: "PostgreSQL", icon: "🐘", category: "data", proficiency: 90 },
  { name: "Redis", icon: "🔴", category: "data", proficiency: 88 },
  { name: "Kafka", icon: "📨", category: "data", proficiency: 85 },

  // Frontend
  { name: "React", icon: "⚛️", category: "frontend", proficiency: 88 },
  { name: "TypeScript", icon: "💙", category: "frontend", proficiency: 90 },
  { name: "Next.js", icon: "▲", category: "frontend", proficiency: 85 },
];

export const currentlyListening = {
  track: "Asterisk",
  artist: "Orange Range",
  album: "musiQ",
  albumArt: "/spotify/asterisk.jpg",
  spotifyUrl: "https://open.spotify.com/track/example",
};
