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
  email: "dt.analyst.py@gmail.com",
  github: "https://github.com/kuchikirenji",
  x: "https://x.com/Kuchiki010718",
  telegram: "https://t.me/kuchikirenji",
};

export const timeline: TimelineEvent[] = [
  {
    year: "2026",
    title: "Founder & Lead Developer",
    company: "Zitro.ai",
    description:
      "Building an AI-powered SaaS platform for content creators. Successfully launched MVP of Zitro.ai - an AI creator studio that generates viral video clips from scripts without requiring editing experience.",
    highlights: [],
    type: "work",
  },
  {
    year: "2024-2025",
    title: "AI Engineer / Full-Stack Developer",
    company: "Quackshift Inc",
    description:
      "Led AI model development and optimization, achieving 15% improvement in model accuracy. Integrated AI features into full-stack applications with 20% increase in user engagement.",
    highlights: [],
    type: "work",
  },
  {
    year: "2021-2024",
    title: "Machine Learning Engineer",
    company: "Quackshift Inc",
    description:
      "Designed, trained, and deployed predictive models, increasing sales forecasting accuracy by 20%. Built automated data pipelines and optimized ML algorithms.",
    highlights: [],
    type: "work",
  },
  {
    year: "2020-2021",
    title: "Full-Stack Developer / AI Integrator",
    company: "Hanaprime Inc",
    description:
      "Developed frontend features and backend services using Python with Flask/Django. Integrated AI-powered features like recommendation systems and NLP into web applications.",
    highlights: [],
    type: "work",
  },
  {
    year: "2018-2020",
    title: "Full-Stack Developer",
    company: "Hanaprime Inc",
    description:
      "Developed responsive web pages and dynamic UI components using HTML, CSS, JavaScript, and jQuery. Built RESTful APIs with Node.js and Express.js, integrated with PostgreSQL.",
    highlights: [],
    type: "work",
  },
];

export const skills: Skill[] = [
  // ML & AI
  { name: "PyTorch", icon: "🔥", category: "ml", proficiency: 95 },
  { name: "TensorFlow", icon: "🧠", category: "ml", proficiency: 85 },
  { name: "LangChain", icon: "🔗", category: "ml", proficiency: 90 },
  { name: "Transformers", icon: "🤖", category: "ml", proficiency: 92 },
  { name: "scikit-learn", icon: "📊", category: "ml", proficiency: 90 },
  { name: "OpenAI", icon: "✨", category: "ml", proficiency: 92 },
  { name: "Hugging Face", icon: "🤗", category: "ml", proficiency: 88 },
  { name: "LightGBM", icon: "⚡", category: "ml", proficiency: 85 },
  { name: "FAISS", icon: "🔍", category: "ml", proficiency: 87 },
  { name: "Stable Diffusion", icon: "🎨", category: "ml", proficiency: 82 },
  { name: "Ollama", icon: "🦙", category: "ml", proficiency: 85 },
  { name: "MLflow", icon: "📈", category: "ml", proficiency: 88 },
  { name: "Evidently AI", icon: "📉", category: "ml", proficiency: 80 },

  // Backend
  { name: "Python", icon: "🐍", category: "backend", proficiency: 98 },
  { name: "FastAPI", icon: "⚡", category: "backend", proficiency: 95 },
  { name: "Node.js", icon: "💚", category: "backend", proficiency: 85 },
  { name: "Flask", icon: "🌶️", category: "backend", proficiency: 88 },
  { name: "tRPC", icon: "🔄", category: "backend", proficiency: 82 },

  // Frontend
  { name: "React", icon: "⚛️", category: "frontend", proficiency: 88 },
  { name: "TypeScript", icon: "💙", category: "frontend", proficiency: 90 },
  { name: "Next.js", icon: "▲", category: "frontend", proficiency: 85 },
  { name: "Vite", icon: "⚡", category: "frontend", proficiency: 83 },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend", proficiency: 92 },
  { name: "Framer Motion", icon: "🎬", category: "frontend", proficiency: 85 },
  { name: "Three.js", icon: "🎲", category: "frontend", proficiency: 78 },
  { name: "GSAP", icon: "🎭", category: "frontend", proficiency: 80 },
  { name: "Streamlit", icon: "📊", category: "frontend", proficiency: 85 },
  { name: "Gradio", icon: "🎛️", category: "frontend", proficiency: 82 },

  // DevOps & Cloud
  { name: "Docker", icon: "🐳", category: "devops", proficiency: 92 },
  { name: "Kubernetes", icon: "☸️", category: "devops", proficiency: 88 },
  { name: "AWS", icon: "☁️", category: "devops", proficiency: 90 },
  { name: "Vercel", icon: "▲", category: "devops", proficiency: 85 },
  { name: "Argo CD", icon: "🚀", category: "devops", proficiency: 83 },
  { name: "Databricks", icon: "🧱", category: "devops", proficiency: 82 },
  { name: "Nginx", icon: "🌐", category: "devops", proficiency: 85 },

  // Data & Databases
  { name: "PostgreSQL", icon: "🐘", category: "data", proficiency: 90 },
  { name: "MongoDB", icon: "🍃", category: "data", proficiency: 88 },
  { name: "Redis", icon: "🔴", category: "data", proficiency: 88 },
  { name: "Elasticsearch", icon: "🔎", category: "data", proficiency: 85 },
  { name: "Prisma", icon: "💎", category: "data", proficiency: 87 },
  { name: "PySpark", icon: "⚡", category: "data", proficiency: 83 },
  { name: "Delta Lake", icon: "🏞️", category: "data", proficiency: 80 },
];

export const currentlyListening = {
  track: "Asterisk",
  artist: "Orange Range",
  album: "musiQ",
  albumArt: "/spotify/asterisk.jpg",
  spotifyUrl: "https://open.spotify.com/search/Orange%20Range%20Asterisk",
};
