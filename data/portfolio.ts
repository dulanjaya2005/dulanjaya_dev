export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  type: "Internship" | "Full-time" | "Part-time" | "Contract" | "Startup Company";
  duration: string;
  start: string;
  end: string | "Present";
  description: string;
  technologies: string[];
  location: string;
  serviceLetter?: string;
}

export interface Certificate {
  id: string;
  title: string;
  pdfPath: string;
  issuedBy: string;
}

export interface Education {
  id: string;
  institution: string;
  logo: string;
  course: string;
  status: "Completed" | "Ongoing";
  duration: string;
  description: string;
  grade?: string;
  hasTranscript?: boolean;
  transcriptPath?: string;
  certificates?: Certificate[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Software Engineering Intern – 99x, Colombo (6 Months Internship)",
    logo: "/companies/99x.png",
    role: "Software Engineering Intern",
    type: "Internship",
    duration: "2024 – Present",
    start: "2024",
    end: "Present",
    description:
      "Gained practical experience in software development and problem solving through various projects. Developed strong coding skills and collaborated with team members to deliver high-quality results.",
    technologies: ["React", "Next.js", "WordPress", "Node.js", "MySQL"],
    location: "Colombo, Sri Lanka",
    serviceLetter: "/service-letters/Dp Education-Dulanjaya Thathsara.pdf",
  },
  {
    id: "3",
    company: "Full-stack Web Developer",
    logo: "/companies/alona.png",
    role: "Alona Web Company",
    type: "Startup Company",
    duration: "2026 – Present",
    start: "2026",
    end: "Present",
    description:
      "Developed and maintained client websites and web applications. Built responsive UIs using React, Next.js, Node.js, Angular and Bootstrap. Collaborated with design teams to implement pixel-perfect interfaces and improve user experience.",
    technologies: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "React", "Bootstrap", "Node.js", "Next.js", "Angular", "Python"],
    location: "Colombo, Sri Lanka",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Moratuwa (CODL)",
    logo: "/education/moratuwa.png",
    course: "Web Programming Training",
    status: "Completed",
    duration: "2024",
    description:
      "Advanced web programming training provided by the University of Moratuwa through CODL. Covering server-side web programming, front-end web development, web design and Python programming.",
    grade: "Completed",
    certificates: [
      {
        id: "cert-1",
        title: "Certificate 1 – Server-Side Web Programming",
        pdfPath: "/certificates/Server-side_Web_Programming_.pdf",
        issuedBy: "University of Moratuwa (CODL)",
      },
      {
        id: "cert-2",
        title: "Certificate 2 – Front-End Web Development",
        pdfPath: "/certificates/Front-End_Web_Development_ .pdf",
        issuedBy: "University of Moratuwa (CODL)",
      },
      {
        id: "cert-3",
        title: "Certificate 3 – Web Design",
        pdfPath: "/certificates/Web_Design_for_Beginners_.pdf",
        issuedBy: "University of Moratuwa (CODL)",
      },
      {
        id: "cert-4",
        title: "Certificate 4 – Python Programming",
        pdfPath: "/certificates/Python_for_Beginners_.pdf",
        issuedBy: "University of Moratuwa (CODL)",
      },
    ],
  },
  {
    id: "2",
    institution: "Diploma in Information Technology",
    logo: "/education/ims-campus.png",
    course: "IMS Campus",
    status: "Completed",
    duration: "2025",
    description:
      "Completed Diploma in Information Technology at IMS Campus, gaining comprehensive knowledge in software development, database management and system integration.",
    grade: "First Class Honors",
    hasTranscript: true,
    transcriptPath: "/transcripts/IMS CAMPUS - 0706.pdf",
  },
  {
    id: "3",
    institution: "Certificate in Information Technology",
    logo: "/education/dp-education.png",
    course: "DP Education Coding School",
    status: "Completed",
    duration: "2024",
    description:
      "Successfully completed all 324 projects at DP Education Coding School, earning qualification as both an app and web developer. Demonstrated strong computer science proficiency through Code.org (USA).",
    grade: "Distinction",
  },
  {
    id: "4",
    institution: "G.C.E. Ordinary Level (O/L)",
    logo: "/education/school.webp",
    course: "MR / Deiyandara National School",
    status: "Completed",
    duration: "2010 – 2024",
    description:
      "Completed Ordinary Level examinations with strong results in Mathematics, Science subjects at MR / Deiyandara National School.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "1",
    title: "POS System",
    description:
      "A full-featured Point of Sale system built with PHP and MySQL. Includes inventory management, sales tracking, billing, and detailed reporting for retail businesses.",
    image: "/projects/pos-system.png",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "https://github.com/dulanjaya2005",
    featured: true,
  },
  {
    id: "2",
    title: "Fuel Track System",
    description:
      "A fuel tracking and management system built with PHP and MySQL. Tracks fuel consumption, vehicle records, and generates analytics reports.",
    image: "/projects/fuel-track.png",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "https://github.com/dulanjaya2005",
    featured: true,
  },
  {
    id: "3",
    title: "Travel Website",
    description:
      "A beautiful travel and tourism website built with HTML, CSS and JavaScript. Features destination showcases, tour packages, booking UI and interactive maps.",
    image: "/projects/travel-website.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "https://github.com/dulanjaya2005",
    featured: true,
  },
  {
    id: "4",
    title: "Campus Website",
    description:
      "A modern campus website built with Next.js. Features course listings, faculty profiles, admission information and a fully responsive design.",
    image: "/projects/campus-website.png",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/dulanjaya2005",
    featured: true,
  },
  {
    id: "5",
    title: "Alona Web Company Website",
    description:
      "Official website for Alona Web Company built with Next.js and MySQL. Showcases services, portfolio, team and includes a client inquiry system.",
    image: "/projects/alona-website.png",
    techStack: ["Next.js", "MySQL", "React", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/dulanjaya2005",
    featured: true,
  },
  {
    id: "6",
    title: "Dansal Tracking Website",
    description:
      "A Dansal (charity food stall) tracking and management website built with Next.js. Helps organizers track locations, volunteers, and distribution in real time.",
    image: "/projects/dansal-tracking.png",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/dulanjaya2005",
    featured: false,
  },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "react" },
    { name: "Next.js", level: 88, icon: "nextjs" },
    { name: "TypeScript", level: 82, icon: "typescript" },
    { name: "JavaScript", level: 88, icon: "javascript" },
    { name: "HTML5", level: 95, icon: "html" },
    { name: "CSS3", level: 90, icon: "css" },
    { name: "Tailwind CSS", level: 92, icon: "tailwind" },
    { name: "Bootstrap", level: 85, icon: "bootstrap" },
    { name: "Angular", level: 65, icon: "angular" },
    { name: "Framer Motion", level: 78, icon: "framer" },
  ],
  backend: [
    { name: "Node.js", level: 75, icon: "nodejs" },
    { name: "PHP", level: 70, icon: "php" },
    { name: "Express.js", level: 72, icon: "express" },
    { name: "REST APIs", level: 80, icon: "api" },
  ],
  database: [
    { name: "MySQL", level: 78, icon: "mysql" },
    { name: "PostgreSQL", level: 70, icon: "postgresql" },
    { name: "MongoDB", level: 65, icon: "mongodb" },
    { name: "Firebase", level: 72, icon: "firebase" },
  ],
  tools: [
    { name: "Git & GitHub", level: 88, icon: "git" },
    { name: "VS Code", level: 95, icon: "vscode" },
    { name: "Docker", level: 55, icon: "docker" },
    { name: "WordPress", level: 82, icon: "wordpress" },
    { name: "Figma", level: 70, icon: "figma" },
    { name: "Vercel", level: 88, icon: "vercel" },
  ],
  ai: [
    { name: "ChatGPT / OpenAI", level: 90, icon: "openai" },
    { name: "GitHub Copilot", level: 88, icon: "copilot" },
    { name: "Claude (Anthropic)", level: 85, icon: "claude" },
    { name: "Google Gemini", level: 80, icon: "gemini" },
    { name: "Midjourney", level: 72, icon: "midjourney" },
    { name: "Cursor AI", level: 82, icon: "cursor" },
    { name: "Vercel v0", level: 78, icon: "v0" },
    { name: "Perplexity AI", level: 75, icon: "perplexity" },
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail",
    "Continuous Learning",
  ],
};