export interface Project {
  id: string;
  title: string;
  subtitle: string;
  links: { live: boolean; frontend: boolean; backend: boolean };
  bullets: string[];
  technologies?: string;
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  doi: string;
}

export interface MasterResumeData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    location: string;
    email: string;
    portfolioUrl: string;
    githubUrl: string;
    linkedinUrl: string;
  };
  profileSummary: string;
  skills: {
    expertise: string[];
    comfortable: string[];
    familiar: string[];
  };
  allProjects: Project[];
  education: {
    degree: string;
    institution: string;
    cgpa: string;
    duration: string;
  };
  publications: Publication[];
}

export const masterResume: MasterResumeData = {
  personalInfo: {
    name: "Samiur Rahman Wasi",
    title: "Web Developer",
    phone: "+880-18811-46425",
    location: "4224, Chittagong, Bangladesh",
    email: "samwaseee@gmail.com",
    portfolioUrl: "#",
    githubUrl: "#",
    linkedinUrl: "#",
  },
  profileSummary:
    "Dedicated CS undergrad bridging software engineering and AI. Proven track record of developing responsive full-stack applications, tackling complex algorithms (200+ competitive programming solves), and conducting research in machine learning. Eager to optimize technical processes and build user-centric software.",
  skills: {
    expertise: ["Next.js", "MongoDB", "Git", "Express.js", "Node.js", "React Query", "Redux", "HTML", "JavaScript", "CSS", "REST API"],
    comfortable: ["Python", "TypeScript", "PostgreSQL", "C++", "Tailwind CSS", "framer motion"],
    familiar: ["MUI", "MVP", "Boostrap", "Antd"],
  },
  allProjects: [
    {
      id: "starlight-university",
      title: "Starlight University",
      subtitle: "A School Management System (team project)",
      links: { live: true, frontend: true, backend: false },
      bullets: [
        "Custom authentication system for secure login with encrypted credentials ensures robust data protection.",
        "Different access levels for students, teachers, and admins allowing users to focus on their specific tasks.",
        "Monitor attendance records and patterns for students and teachers with input access of records.",
        "Comprehensive tables display real time records for all students, teachers, and courses."
      ]
    },
    {
      id: "nexus-ai",
      title: "Nexus AI",
      subtitle: "AI Freelance Marketplace",
      links: { live: true, frontend: true, backend: true },
      bullets: [
        "Role-based dashboards (Freelancer, Client, Admin) for gig tracking and profile management via Next.js.",
        "Secured protected routes and backend communication using NextAuth and JWT-backed Axios interceptors.",
        "Integrated AI pitch generators, interactive chats, and Recharts analytics with Zod-validated forms.",
        "Streamlined full-stack integration by generating a comprehensive OpenAPI specification for backend REST routes"
      ]
    },
    {
      id: "promptforge",
      title: "PromptForge",
      subtitle: "An AI Prompt Marketplace",
      links: { live: true, frontend: true, backend: true },
      bullets: [
        "A highly scalable full-stack e-commerce platform using Next.js and React, allowing users to discover, securely purchase, and store production-ready AI prompts in a centralized vault.",
        "Developed comprehensive seller and admin dashboards leveraging Tailwind CSS and Recharts to deliver real-time revenue tracking, analytics, and complex approval workflows.",
        "Implemented secure authentication, protected routes, and role-based access guards using Firebase OAuth paired with a JWT-backed API client."
      ],
      technologies: "Nextjs, TypeScript, MERN, JWT, Material UI, Framer Motion, React Hook Form, TanStack React Query, used Axios, Recharts, emailJS, flowbite, react fast marquee"
    }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "International Islamic University, Chittagong",
    cgpa: "3.5",
    duration: "2022 - present"
  },
  publications: [
    {
      authors: "S. R. Wasi",
      title: "Machine Learning Models for Predictive Maintenance in RMG",
      venue: "IEOM'25",
      doi: "10.46254/BA08.20250158"
    },
    {
      authors: "S. R. Wasi et al.",
      title: "Interpretable Feature-Fused Models for PyPI Malware Detection",
      venue: "IEEE QPAIN'26",
      doi: "10.1109/QPAIN69676.2026.11545547"
    },
    {
      authors: "S. I. Hira, S. R. Wasi et al.",
      title: "Behavioral Generative Augmentation for Network Intrusion Detection under Extreme Data Scarcity",
      venue: "IEEE QPAIN'26",
      doi: "10.1109/QPAIN69676.2026.11545987"
    }
  ]
};