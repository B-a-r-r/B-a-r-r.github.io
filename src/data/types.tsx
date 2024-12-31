interface Project {
    id: number;
    title: string;
    content: string;
    tags: string[];
  }
  
  interface NavLink {
    id: string;
    title: string;
  }
  
  interface Language {
    id: string;
    label: string;
  }
  
  interface SocialMedia {
    id: string;
    icon: string;
    link: string;
  }

  interface SubtitleMessage {
    id: number;
    content: string;
  }

  interface Bio {
    id: number;
    title: string;
    content: string;
  }

  interface Skill {
    id: number;
    label: string;
    icon: string;
    category: string;
    subcategory: string | null;
    framework: string | null;
  }

  export type { Project, NavLink, Language, SocialMedia, SubtitleMessage, Bio, Skill };