export interface Project {
  id: string;
  title: string;
  subtitle: string;
  liveUrl?: string;
  frontendRepo?: string;
  backendRepo?: string;
  bullets: string[];
  technologies: string[];
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
  allTechnicalSkills: string[];
  allSoftSkills: string[];
  allProjects: Project[];
  education: {
    degree: string;
    institution: string;
    cgpa: string;
    duration: string;
  };
  languages: { name: string; proficiency: string }[];
}

export const masterResume: MasterResumeData = {
  personalInfo: {
    name: "Samiur Rahman Wasi",
    title: "Fullstack Developer",
    phone: "+880-18811-46425",
    location: "4224, Chittagong, Bangladesh",
    email: "samwaseee@gmail.com",
    portfolioUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
  profileSummary:
    "As a dedicated computer science undergrad, I've developed a strong foundation in web development. My passion for competitive programming has honed my problem-solving skills and, combined with my development expertise, enabled me to create user-centric, responsive full-stack applications. I aspire to excel as a software engineer, innovating and optimizing technical processes. I thrive in diverse environments and am eager to contribute to a team that values innovation and continuous improvement.",
  allTechnicalSkills: [
    "React", "Next.js", "Express.js", "Node.js", "MySQL", "MongoDB", "Git",
    "JavaScript", "TypeScript", "C++", "CSS", "HTML", "Tailwind CSS", "MUI", "REST API"
  ],
  allSoftSkills: [
    "Problem solving", "Patience", "Adaptability", "Learning curiosity", "Analytical thinking"
  ],
  allProjects: [
    {
      id: "care-camp",
      title: "Care Camp",
      subtitle: "A Medical Camp Management System",
      liveUrl: "https://example.com",
      frontendRepo: "https://github.com/example/frontend",
      backendRepo: "https://github.com/example/backend",
      bullets: [
        "Enabled participants to track their camp participation, view payment history, and activity analytics graph.",
        "Equipped organizers with powerful tools to manage camps, track participants, and update camp details.",
        "Integrated secure payment processing for seamless transactions."
      ],
      technologies: ["MERN", "JWT", "Animate.css", "Ant Design", "Material UI", "Next UI", "Framer Motion", "Awesome Reveal", "React Hook Form", "TanStack React Query", "Axios", "React Parallax", "Recharts"]
    },
    {
      id: "booked-inn",
      title: "BookedInn",
      subtitle: "A Hotel Reservation Web Application",
      liveUrl: "https://example.com",
      frontendRepo: "https://github.com/example/frontend",
      backendRepo: "https://github.com/example/backend",
      bullets: [
        "Streamlined room reservations with instant booking modifications and cancellations.",
        "Implemented user review and rating systems for verified stays.",
        "Secured session authentication using JWT tokens."
      ],
      technologies: ["React", "Tailwind CSS", "Node JS", "MongoDB", "Express JS", "Axios", "Firebase", "AOS", "MUI", "Pigeon Map", "DaisyUI"]
    },
    {
      id: "sams-travels",
      title: "SAM's Travels",
      subtitle: "A Collaborative Tourist Spot Management System",
      liveUrl: "https://example.com",
      frontendRepo: "https://github.com/example/frontend",
      backendRepo: "https://github.com/example/backend",
      bullets: [
        "Allowed users to sort tourist spots based on cost, improving discovery and user experience.",
        "Built a dedicated dashboard for users to manage contributed tourist spots.",
        "Structured country-specific profiles highlighting key tourist attractions."
      ],
      technologies: ["React", "Node JS", "MongoDB", "Express JS", "React-typewriter", "React Awesome reveal", "React Tooltip"]
    }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "International Islamic University, Chittagong",
    cgpa: "3.7",
    duration: "2022 - present"
  },
  languages: [
    { name: "Bengali", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Familiar" }
  ]
};