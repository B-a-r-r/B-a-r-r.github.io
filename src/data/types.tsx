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

  export type { Project, NavLink, Language, SocialMedia, SubtitleMessage };