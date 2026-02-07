import { Project, Experience, SkillCategory, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: "Agrim Garg",
  role: "Software Engineer",
  // Standard local reference. Save your photo as 'profile.jpg' in the project root.
  profilePicture: "profile.jpg", 
  tagline: "Building scalable AI-driven solutions and high-impact software.",
  summary: "Computer Science undergraduate with strong proficiency in data structures, algorithms, and object-oriented programming, and hands-on experience building scalable, production-ready applications. Demonstrated ability to solve complex problems through innovative projects, clean system design, and performance-focused implementations, experienced in vibe coding. Experienced in leading technical initiatives and collaborating across teams, with a growth mindset and a strong drive to build reliable, high-impact software at scale.",
  impactStatement: "Passionate about leadership, mathematical rigor, and rapid, high-precision problem solving. Building scalable digital systems and intelligent products through disciplined execution.",
  email: "agrimgrg06@gmail.com",
  phone: "+91 8130137674",
  location: "Gurugram, India (Open to Remote)",
  resumeUrl: "#resume-section",
  socials: {
    github: "https://github.com/coderhash-sketch",
    linkedin: "https://www.linkedin.com/in/agrim-garg-925241331/",
    instagram: "https://www.instagram.com/agrimraghav?igsh=bXRhdW9zanFheXc0",
    leetcode: "https://leetcode.com/u/mlbyte_21/",
    codechef: "https://www.codechef.com/users/mlbyte_21"
  }
};

export const EDUCATION = [
  {
    institution: "SRM University AP",
    degree: "B.Tech in CSE",
    period: "2024 - present",
    grade: "CGPA: 9.82/10.00"
  },
  {
    institution: "Green Valley International School",
    degree: "Class 12 (PCM) at Green Valley International School",
    period: "2022 - 2024",
    grade: "Percentage : 86%"
  },
  {
    institution: "Rockford Convent High School(CBSE)",
    degree: "Class 10",
    period: "2020 - 2022",
    grade: "Percentage : 94.8%"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 }
    ]
  },
  {
    name: "Relevant Coursework",
    skills: [
      { name: "Data Structures & Algorithms", level: 95 },
      { name: "OOPs", level: 90 },
      { name: "DBMS", level: 85 },
      { name: "Gen AI", level: 80 }
    ]
  },
  {
    name: "Core Competencies",
    skills: [
      { name: "AI/ML", level: 85 },
      { name: "Problem Solving", level: 98 },
      { name: "Fast Calculations", level: 95 },
      { name: "Logical Thinking", level: 95 },
      { name: "Quantitative Aptitude", level: 92 },
      { name: "Power BI", level: 75 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "ShadowFox",
    role: "Web Development Intern",
    period: "Feb 2026 - Present",
    description: [
      "Working on real-world web development projects using modern frontend technologies while following industry best practices.",
      "Collaborating in a virtual team environment and participating in domain meetings, code reviews and enhancing problem solving skills."
    ],
    skills: ["React", "Virtual Intern", "Problem Solving"]
  },
  {
    company: "Math Club",
    role: "Convenor",
    period: "May 2025 - Present",
    description: [
      "Responsible for organizing academic events, workshops, and interactive mathematical activities.",
      "It includes a recent interactive session showcasing mathematical magic tricks to make numbers fun and fascinating for young learners."
    ],
    skills: ["SRM University AP", "Leadership", "Event Strategy"]
  },
  {
    company: "GeeksforGeeks SRMUAP",
    role: "Events Lead",
    period: "Oct 2024 - Present",
    description: [
      "Organizing technical events, coding competitions, and workshops to enhance student engagement in competitive programming.",
      "Coordinating with industry experts and mentors to deliver high-quality educational content and career development sessions."
    ],
    skills: ["Amaravati, India", "Competitive Programming", "Technical Events"]
  },
  {
    company: "Amdox Technologies",
    role: "Web Developer",
    period: "Jan 2025 - Present",
    description: [
      "Developed responsive and interactive web interfaces using modern JavaScript frameworks and optimized CSS architectures.",
      "Improved site performance and accessibility scores by implementing lazy loading and semantic HTML structures.",
      "Collaborated with UI/UX designers to translate complex wireframes into functional, high-fidelity web components."
    ],
    skills: ["Web Development", "Performance Tuning", "UI/UX Translation"]
  },
  {
    company: "Open Source Connect",
    role: "Open Source Contributor",
    period: "Jul 2025 - Sep 2025",
    description: [
      "Contributed to production-level open source projects, collaborating with global developers on scalable codebases.",
      "Implemented version control workflows using Git, managing tasks and progress through NexFellow Platform.",
      "Enhanced collaborative development skills through peer code reviews and collective intelligence practices."
    ],
    skills: ["Remote", "Git", "NexFellow", "Global Collaboration"]
  },
  {
    company: "SRM University AP - Directorate of Innovation and Entrepreneurship",
    role: "Chief Executive Officer, CESE Program",
    period: "Feb 2025 - Present",
    description: [
      "Leading community engagement initiatives and social innovation programs, bridging purpose-driven entrepreneurship with real-world impact.",
      "Designing and executing entrepreneurship programs addressing social challenges, collaborating with NGOs and government bodies."
    ],
    skills: ["Amaravati, India", "NGO Collaboration", "Social Innovation"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "atomoracq",
    title: "AtomoraCQ",
    tagline: "TypeScript, Next.js, Quantum Computing - VQE, ML , Data Visualization",
    problem: "Developed a hybrid AI-quantum simulation platform to model CO2-material interactions at the atomic scale for advanced carbon-capture research.",
    solution: "Implemented the Variational Quantum Eigensolver (VQE) algorithm to estimate molecular energy states and support quantum-assisted evaluation of candidate materials.",
    techStack: ["TypeScript", "Next.js", "VQE", "ML"],
    impact: "Built an interactive analysis pipeline to compare material performance and visualize simulation outputs for data-driven material selection.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://demo-gold-three-67.vercel.app/"
  },
  {
    id: "founderpilotai",
    title: "FounderPilotAI",
    tagline: "HTML, CSS (Tailwind), JavaScript, Node.js, AI/LLM APIs, Vercel",
    problem: "Built an AI-powered founder co-pilot that guides early-stage startups from idea validation to execution using structured decision-making frameworks.",
    solution: "Designed intelligent workflows to break down complex startup problems into actionable roadmaps, improving clarity and execution speed.",
    techStack: ["Node.js", "AI APIs", "Tailwind"],
    impact: "Integrated real-world startup thinking into AI prompts to simulate mentor-level guidance for founders.",
    imageUrl: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://founder-pilot-ai-eta.vercel.app/"
  },
  {
    id: "skillspresso",
    title: "SkillSpresso",
    tagline: "Microlearning Platform | Founder & CEO",
    problem: "Founding and leading SkillSpresso, a 10-minute microlearning platform teaching practical skills like Excel, Canva, and Finance.",
    solution: "Designing curriculum and content strategy to deliver bite-sized, high-impact learning experiences for students and professionals.",
    techStack: ["Microlearning", "EdTech", "Curriculum Design"],
    impact: "Driving user acquisition and engagement through innovative product features and community-building initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://skill-sprinter--agrimgarganuj.replit.app/"
  },
  {
    id: "kb-ganitpati",
    title: "Kaun Banega Ganitpati",
    tagline: "Mathematical Game Platform",
    problem: "It is a web-based quiz application that allows students to attempt up to 20 questions within a fixed time limit of 100 seconds.",
    solution: "The project showcases skills in algorithm design, user-centric application development, and mathematical concept implementation through gamification.",
    techStack: ["JavaScript", "HTML5", "Game Logic"],
    impact: "Created an engaging competitive environment for learning math concepts.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/coderhash-sketch/kb-ganitpati"
  }
];

export const ACHIEVEMENTS = [
  "Achieved AIR 335 in AINCAT 2025 - A national-level aptitude test assessing aptitude skills among 4.6L+ participants.",
  "DSA Excellence - Recognized for exceptional performance in Data Structures and Algorithms assessments.",
  "SRM Maths Olympiad (UG Category) - Secured 3rd position demonstrating strong analytical and problem-solving skills."
];

export const CERTIFICATIONS = [
  "Salesforce 100K AgentBlazer Champion Course",
  "AI Volution Entrepreneurship Challenge Semi-Finalist by IIT Kharagpur",
  "Certified for completing Entrepreneurship Bootcamp 3.0, where I started my idea SkillSpresso.",
  "Generative AI Workshop at IIT Delhi(Speaker:Adarsh Rai)",
  "be10X AI Tools Workshop by IIT Kharagpur Alumni",
  "Deloitte Australia Job Simulation Course"
];

export const BLOG_POSTS: (BlogPost & { content: string })[] = [
  {
    id: "1",
    title: "Quantum Simulation: The Next Frontier",
    excerpt: "Exploring molecular energy states using VQE and AI algorithms to revolutionize carbon capture research.",
    date: "Jan 2026",
    readTime: "7 min read",
    category: "Quantum Computing",
    content: `## The Convergence of Physics and Code
Quantum computing is moving from a scientific curiosity to a practical engineering discipline. At the heart of this transition is the ability to simulate quantum systems—molecules, materials, and chemical reactions—at a level of detail that classical supercomputers can never hope to reach. For engineers today, this represents a shift from binary logic to probability-based computation.

### Why Classical Computing Fails in Material Science
In classical computing, representing the state of an atom requires an exponential increase in memory as you add more particles. A simple caffeine molecule would require a memory bank larger than any existing supercomputer to simulate accurately. This "exponential wall" has hindered progress in areas like battery chemistry, drug discovery, and specifically, carbon capture.

### Enter the Variational Quantum Eigensolver (VQE)
The VQE is a hybrid quantum-classical algorithm designed for the "Noisy Intermediate-Scale Quantum" (NISQ) era. It works by using a quantum computer to calculate the expectation value of a molecule's Hamiltonian (its energy state) while a classical optimizer adjusts the parameters to find the minimum energy—the ground state.

### Bridging the Gap: The AtomoraCQ Pipeline
In the AtomoraCQ project, we developed a pipeline that integrates quantum simulations with a modern web-based visualization stack.
- **Quantum Core**: Utilizing Python-based quantum libraries, we modeled CO2-material interactions.
- **Hybrid Optimization**: The VQE algorithm narrow down the search space for efficient catalysts.
- **Data Visualization**: Built using TypeScript and Next.js, the dashboard allows researchers to interact with 3D atomic models and see real-time energy convergence graphs.

### The Future of Sustainable Engineering
The ultimate goal of this research is \"Inverse Design.\" Instead of testing existing materials, we use quantum-assisted ML to define the properties we need (e.g., \"capture CO2 at 30°C with 90% efficiency\") and let the algorithm design the molecule. This is the future of engineering: moving from trial-and-error to high-precision design at the atomic scale.`
  },
  {
    id: "2",
    title: "FounderPilotAI: Scaling Early-Stage Mentorship",
    excerpt: "How structured AI decision-making frameworks can bridge the gap for first-time founders through LLM workflows.",
    date: "Feb 2026",
    readTime: "6 min read",
    category: "AI & Startups",
    content: `## The Founder's Dilemma
Building a startup is essentially a sequence of decisions made under extreme uncertainty. For first-time founders, the "blank page" problem is the primary killer of innovation. They have a vision but lack the roadmap to validate it. FounderPilotAI was conceived to solve this by providing an AI-driven "co-pilot" that applies professional-grade strategic frameworks to raw ideas.

### Beyond the Chatbot: Structured Decision Workflows
Most people view AI as a chat interface. However, for startup mentorship, a chat interface is often too open-ended. To be useful, AI must lead the user through structured logical steps.
- **Framework Integration**: We embedded frameworks like the Lean Canvas, SWOT analysis, and the TAM/SAM/SOM market sizing methodology into the LLM's prompt architecture.
- **Iterative Validation**: The system doesn't just "generate" a business plan; it challenges the founder. If a user suggests a target market, the AI asks, "Why this market? How will you reach them with zero budget?"

### Technical Architecture: The Vercel & Node.js Stack
Building an AI co-pilot requires a balance of speed and state management.
- **Prompt Engineering**: We utilized "Chain of Thought" prompting to ensure the AI explains its reasoning before providing a strategic recommendation.
- **Edge Functions**: By leveraging Vercel Edge Functions, we reduced the latency of LLM streaming, making the interaction feel like a real-time conversation with a human mentor.
- **Context Preservation**: One of the biggest hurdles was ensuring the AI remembered the "core vision" of the startup while diving deep into specific technical modules.

### The Impact of AI on Innovation Velocity
Our data shows that founders using structured AI workflows reach "Product-Market Fit" signals 40% faster than those navigating blindly. By automating the boilerplate of startup strategy—the research, the formatting, the logical vetting—we allow founders to focus on what humans do best: building relationships and iterating on the product.

### What's Next?
The next phase of FounderPilotAI involves "Smart Agents" that can perform actual market research by crawling the web, checking competitor pricing, and identifying potential early-adopters on social platforms. We are moving from a co-pilot that thinks with you, to one that executes for you.`
  }
];