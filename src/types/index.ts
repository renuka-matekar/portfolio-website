// src/types/index.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link?: string;
    github?: string;
  }

  export interface EducationItem {
    degree: string;
    university: string;
    location: string;
    duration: string;
    gpa: string;
    coursework: string[];
    gradient: string;
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
  
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }