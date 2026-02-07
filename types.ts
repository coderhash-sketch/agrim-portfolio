
export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}
