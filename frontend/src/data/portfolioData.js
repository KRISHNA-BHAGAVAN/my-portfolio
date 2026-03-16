// Portfolio data for Krishna Bhagavan Karri

export const portfolioData = {
  personal: {
    name: "KRISHNA BHAGAVAN KARRI",
    title: "Full Stack Web Developer • Generative AI • Agentic AI",
    email: "krishnabhagavan910@gmail.com",
    phone: "+91-7569048553",
    github: "https://github.com/KRISHNA-BHAGAVAN?tab=repositories",
    linkedin: "https://www.linkedin.com/in/krishnabhagavan/",
    careerObjective: "Aspiring Full Stack Developer (MERN) with hands-on experience in Generative AI, seeking to build scalable, real-world applications and intelligent AI-driven solutions.",
    resumePdf: "/Krishna Bhagavan Karri Resume.pdf"
  },

  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "Microservices"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Generative AI",
      items: ["Python", "LangChain", "LangGraph", "Pydantic", "LangSmith", "Agentic AI"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Linux", "Supabase", "Redis", "Cloudinary", "Nginx"]
    }
  ],
  
  projects: [
    {
      id: 1,
      name: "UniPilot – University Management System",
      link: "https://github.com/gspavan07/UniPilot",
      summary: "Comprehensive university administration platform featuring RBAC, academic management, HR/Payroll, and student services. Built with a robust full-stack architecture and AWS S3 storage.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize", "Redis", "AWS S3", "Tailwind CSS"],
      image: "/unipilot_project_mockup_1773678907320.png",
      tags: ["Full-Stack", "Education", "Management"]
    },
    {
      id: 2,
      name: "Bajaj Hackrx 6.0 IQRS – Intelligent Query & Reasoning System",
      link: "https://github.com/KRISHNA-BHAGAVAN/Bajaj-Hackrx-6.0-Entity",
      summary: "AI-powered Python backend service using LangGraph, RAG, and LLMs to answer complex queries from multi-format documents (PDF, DOCX, PPTX, images via OCR). Features autonomous agent workflows and scalable FastAPI architecture.",
      tech: ["Python", "LangGraph", "RAG", "FastAPI", "FAISS", "OpenAI", "Gemini"],
      image: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f",
      tags: ["AI", "Backend", "Python"]
    },
    {
      id: 3,
      name: "Mobster Merch – An Ecommerce Site",
      link: "https://github.com/KRISHNA-BHAGAVAN/Mobster-Merch",
      summary: "Production-ready ecommerce with React+TS, Express, MySQL, JWT auth, PhonePe payments, admin dashboard, Redis caching, Cloudinary, and Nginx deployment.",
      tech: ["React 18", "TypeScript", "Node.js", "Express.js", "MySQL", "Redis", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1758522484646-c8694d1784fa",
      tags: ["Full-Stack", "Ecommerce", "TypeScript"]
    },
    {
      id: 4,
      name: "Entity – Smart Documentation System",
      link: "https://github.com/KRISHNA-BHAGAVAN/Entity",
      summary: "AI-powered document management system that automates variable extraction from .docx templates. Features native Word-quality previews, event-based organization, and secure BYOK architecture.",
      tech: ["LangChain", "OpenAI", "Google Gemini", "Groq", "FastAPI", "React", "Docker"],
      image: "/entity_project_mockup_1773678889756.png",
      tags: ["AI", "Automation", "SaaS"]
    },
    {
      id: 5,
      name: "Multi-Modal AI Agent with Voice Assistance",
      link: "https://github.com/KRISHNA-BHAGAVAN/Multimodal_AI_Agent_with_voice",
      summary: "Voice assistant integrating Groq, Gemini, and Faster Whisper; processes voice commands, images, and clipboard data with context-aware responses and LangGraph workflows.",
      tech: ["Groq", "Gemini", "Whisper", "LangGraph", "Python"],
      image: "https://images.unsplash.com/photo-1761311984112-ce2c5db45984",
      tags: ["AI", "Voice", "Multi-Modal"]
    }
  ],

  experience: [
    {
      id: 1,
      role: "In-House Intern",
      org: "Aditya University",
      period: "Mar. 2025 – Jun. 2025",
      details: "Developed 'Automated Reporting System' to automate College Report Generation processes, streamlining administrative workflows and reducing manual effort. Implemented highly secured Authentication system."
    }
  ],

  achievements: [
    "Selected for Finals in Bajaj Hackrx 6.0 - National level Indian Hackathon"
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech, AIML | CGPA: 7.62 (68.7%)",
      school: "Aditya Engineering College (AEC), Surampalem, Andhra Pradesh, India",
      years: "2022 – 2026"
    },
    {
      id: 2,
      degree: "Class XII (Intermediate - MPC) | 91%",
      school: "Vaishnavi Junior College, Tuni, Andhra Pradesh, India",
      years: "2020 – 2022"
    },
    {
      id: 3,
      degree: "Class X (SSC) | 95.83%",
      school: "Loyola E.M School, Tuni, Andhra Pradesh, India",
      years: "2019 – 2020"
    }
  ]
};
