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
  
  interface language {
    id: string;
    label: string;
  }
  
  interface SocialMedia {
    id: string;
    icon: string;
    link: string;
  }

  export type { Project, NavLink, language, SocialMedia };