export interface Milestone {
  id: string;
  year: string;
  type: "education" | "award" | "project";
  title: string;
  organization: string;
  badge: string;
  description: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "AI / Machine Learning" | "Desktop App" | "Web Platform";
  description: string;
  techStack: string[];
  role?: string;
  badge?: string;
  githubUrl: string;
}

export const BIO_DATA = {
  name: "Sipra Sanghamitra Dash",
  titles: [
    "Aspiring Software Engineer",
    "Full-Stack Developer",
    "AI & Computer Vision Builder",
    "Python & React Developer",
    "B.Tech CSE Student @ LPU",
  ],
  university: "Lovely Professional University (LPU)",
  degree: "B.Tech in Computer Science & Engineering",
  cgpa: "8.76 CGPA",
  email: "siprasanghamitra.dash@example.com",
  githubUsername: "siprasanghamitradash",
  github: "https://github.com/siprasanghamitradash",
  linkedin: "https://linkedin.com/in/sipra-sanghamitra-dash",
  location: "Punjab, India",
  hobbies: [
    { name: "Sketching & UI Art", icon: "🎨" },
    { name: "Chess & Strategy", icon: "♟️" },
    { name: "Badminton", icon: "🏸" },
    { name: "Open-Source & Tech Exploration", icon: "💻" },
  ],
  personalStatement:
    "I build software that bridges complex backend systems with clean, intuitive user experiences. From earning an international Platinum Award to engineering real-time deepfake detection systems, my journey in computer science is driven by taking challenging technical problems and elevating them into simple, high-impact solutions.",
  stats: [
    {
      label: "B.Tech CSE",
      value: "8.76",
      subtitle: "Lovely Professional Univ.",
    },
    { label: "Class X", value: "91.2%", subtitle: "Deepti Convent" },
    { label: "Class XII", value: "83.6%", subtitle: "LSPS School" },
    {
      label: "Global Recognition",
      value: "Platinum",
      subtitle: "CyberFair International",
    },
  ],
  coreTech: [
    { name: "Python", role: "AI & Scripting", color: "#facc15" },
    { name: "React", role: "Frontend UI", color: "#22d3ee" },
    { name: "React Native", role: "Mobile Apps", color: "#60a5fa" },
    { name: "Node.js", role: "Backend APIs", color: "#34d399" },
    { name: "Tkinter", role: "Desktop GUI", color: "#fb923c" },
    { name: "Tailwind CSS", role: "Styling", color: "#fb7185" },
  ],
};

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    year: "2019",
    type: "award",
    title: "IT Genius 3.0 Winner",
    organization: "State Level Tech Competition",
    badge: "🏆 1st Place Champion",
    description: [
      "Won 1st prize among hundreds of student competitors across schools.",
      "Showcased rapid problem-solving in algorithmic logic and computer science trivia.",
      "Early catalyst that ignited my passion for computer science.",
    ],
    tags: ["Algorithms", "Logic Puzzles", "Competitive IT"],
  },
  {
    id: "m2",
    year: "2021",
    type: "education",
    title: "Class X (Secondary School)",
    organization: "Deepti Convent School",
    badge: "★ 91.2% CGPA",
    description: [
      "Graduated with 91.2% CGPA and distinction in Mathematics and Science.",
      "Active leadership in school science club and technology activities.",
    ],
    tags: ["Mathematics", "Science Distinction", "Foundations"],
  },
  {
    id: "m3",
    year: "2023",
    type: "award",
    title: "Global CyberFair Platinum Award",
    organization: "Global SchoolNet (International)",
    badge: "👑 Web Dev Team Lead",
    description: [
      'Conferred the highest international Platinum Category Award for the "Chaiti" festival web platform.',
      "Dev Team Lead: Built with Wix and custom JavaScript additions for interactive elements and media showcase.",
      "Recognized internationally for clean digital presentation and cultural impact.",
    ],
    tags: ["Wix", "JavaScript", "Web Development", "Team Leadership"],
  },
  {
    id: "m4",
    year: "2023",
    type: "education",
    title: "Class XII (Senior Secondary)",
    organization: "LSPS School",
    badge: "★ 83.6% CGPA",
    description: [
      "Graduated with 83.6% CGPA specializing in Computer Science, Mathematics, and Physics.",
      "Built strong core foundations in Python, C++, and database concepts.",
    ],
    tags: ["Python", "C++", "Computer Science", "Mathematics"],
  },
  {
    id: "m5",
    year: "Sept 2024",
    type: "project",
    title: "D-FEND Deepfake Detection",
    organization: "AI & Computer Vision Platform",
    badge: "⚡ React + Python",
    description: [
      "Built an interactive web interface with React and a machine learning backend in Python.",
      "Analyzes video frames in real-time to detect manipulated facial artifacts and anomalies.",
      "Provides instant visual feedback and confidence scoring for media verification.",
    ],
    tags: ["React", "Python", "OpenCV", "Deep Learning", "Computer Vision"],
  },
  {
    id: "m6",
    year: "Oct 2024 – Jan 2025",
    type: "project",
    title: "Library Management System",
    organization: "CS Final Project (Full CRUD)",
    badge: "⚡ Python + Tkinter",
    description: [
      "Engineered a complete desktop GUI management application using Python and Tkinter.",
      "Full CRUD implementation for book cataloging, student issuance, returns, and fine calculation.",
      "Integrated lightweight database management for fast book queries and transaction history.",
    ],
    tags: ["Python", "Tkinter", "SQLite", "Full CRUD", "Desktop GUI"],
  },
  {
    id: "m7",
    year: "Present",
    type: "education",
    title: "B.Tech Computer Science & Engineering",
    organization: "Lovely Professional University (LPU)",
    badge: "★ 8.76 CGPA",
    description: [
      "Currently pursuing B.Tech in CSE with a consistent 8.76 CGPA.",
      "Focusing on Full-Stack Development, Applied Machine Learning, and Core CS Fundamentals.",
      "Active builder participating in projects, hackathons, and collaborative engineering.",
    ],
    tags: ["B.Tech CSE", "Full-Stack", "Applied AI", "Algorithms"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "dfend-deepfake",
    title: "D-FEND Deepfake Detection",
    category: "AI / Machine Learning",
    description:
      "A deepfake detection platform combining an interactive React web frontend with a Python machine learning backend to identify facial manipulation artifacts in real time.",
    techStack: ["React", "Python", "OpenCV", "Flask/FastAPI"],
    role: "Full-Stack & AI Builder",
    badge: "Real-time Detection",
    githubUrl:
      "https://github.com/siprasanghamitradash/D-FEND-Deepfake-Detection",
  },
  {
    id: "library-system",
    title: "Library Management System",
    category: "Desktop App",
    description:
      "A comprehensive desktop GUI application engineered with Python and Tkinter providing full CRUD operations for book cataloging, student issuance, search queries, and fine management.",
    techStack: ["Python", "Tkinter", "SQLite", "File I/O"],
    role: "Sole Developer (CS Final Project)",
    badge: "Full CRUD GUI",
    githubUrl:
      "https://github.com/siprasanghamitradash/Library-Management-System",
  },
  {
    id: "chaiti-cyberfair",
    title: "Chaiti Cultural Web Platform",
    category: "Web Platform",
    description:
      'The international Platinum Award-winning website for the "Chaiti" festival built on Wix with custom JavaScript additions for responsive interactivity, multimedia galleries, and cultural showcase.',
    techStack: ["Wix", "JavaScript (Velo)", "HTML/CSS", "UI/UX"],
    role: "Web Dev Team Lead",
    badge: "🏆 Platinum Award Winner",
    githubUrl:
      "https://github.com/siprasanghamitradash/Chaiti-Website-Cyberfair",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "HTML5 / CSS3",
      "SQL",
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "React",
      "React Native",
      "Tkinter (Python GUI)",
      "Node.js",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Wix & Velo (JS)",
      "SQLite / PostgreSQL",
      "Postman",
    ],
  },
  {
    name: "Core CS Foundations",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management (DBMS)",
      "REST APIs",
    ],
  },
];
