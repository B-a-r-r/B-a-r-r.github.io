import { skillsIcons, projectsImages } from "../assets";
import { 
  Project, 
  SubtitleMessage, 
  Biography, 
  Skill, 
  SkillCategorie, 
  SkillSubcategorie,
  sharedLink
} from "./dataTypes";

export const projects: Array<Project> = [
    {
      id: 1,
      title: "GPGtool",
      content: "\
        GPGtool is a PGP key manager that allows you to create and manage your own keys, \
        encrypt and decrypt messages, and files.<br/>I programmed this desktop application entirely in \
        Python, it embeds an user-friendly graphic interface powered by CustomTkinter, but has \
        also a command-line and an api interface for advanced users.",
      tags: ["OOP", "UI", "Cryptography"],
      img: projectsImages.gpgtool_crypto_tool,
      date: new Date(2024, 9),
    },
    {
      id: 2,
      title: "Ecograph",
      content: "\
        Ecograph is a data visualizer that helps conpanies to position themselves according to \
        climate and emission data around the world.<br/>We were five developers on this \
        softaware project, using C# with .NET framework for the UI, and Python for data management. \
        Thanks to libraries like Pandas and Matplotlib to create the graphs, but also \
        SQLAlchemy to manage the database.",
      tags: ["ORM", "Database", "Visualization"],
      img: null,
      date: new Date(2024, 6),
    },
    {
      id: 3,
      title: "MiniShell",
      content: "MiniShell is a replica of a Unix shell. Written in C, it allows you to run commands, even in background, manage files, and create scripts.",
      tags: ["OS", "Linux", "FOP"],
      img: null,
      date: new Date(2024, 11),
    },
    {
      id: 4,
      title: "clembarr.dev",
      content: "This website has been developed from scratch by myself, using Vite, React, Tailwind css and Typescript.",
      tags: ["Web", "UX", "EOP"],
      img: projectsImages.portfolio,
      date: new Date(2025, 1),
    }
    
];
  
export const subtitleMessages: Array<SubtitleMessage> = [
    {
      id: 1,
      content: "Junior developer<br/>and creator.",
    },
    {
      id: 2,
      content: "Currently studying<br/>artificial life !",
    },
    {
      id: 3,
      content: "Welcome to my<br/>portfolio.",
    }
];
  
export const bioText: Array<Biography> = [
    {
      id: 1,
      title: "Make it clean,<br/> make it better.",
      content: "I am a 19yo <strong>junior developer</strong> and creator, mainly interest in developing intelligent and helpful tools to specific needs. \
              <br/><br/> \
              <strong>Programming</strong> allows me to express my creativity, I like to make things clean and efficient, but also pleasent to use. \
              I’ve been passionate about programming since I was 14yo, and my interest for various has built my <strong>versatility</strong>, which is my key strength.\
              <br/><br/>   \
              Until 2026, I will be preparing a <strong>bachelor’s degree</strong> in computer science at the University and Technology Institue of Bordeaux, France."
    }
];
  
export const skills: Array<Skill> = [
    {
      id: 1,
      label: "React",
      icon: skillsIcons.react_icon,
      category: SkillCategorie.LANGUAGE,
      subcategory: SkillSubcategorie.FRONTEND,
      framework: null,
    },
    {
      id: 2,
      label: "Typescript",
      icon: skillsIcons.typescript_icon,
      category: SkillCategorie.LANGUAGE,
      subcategory: SkillSubcategorie.FRONTEND,
      framework: null,
    },
    {
      id: 3,
      label: "Python",
      icon: skillsIcons.python_icon,
      category: SkillCategorie.LANGUAGE,
      subcategory: SkillSubcategorie.BACKEND,
      framework: null,
    },
    {
      id: 4,
      label: "Java",
      icon: skillsIcons.java_icon,
      category: SkillCategorie.LANGUAGE,
      subcategory: SkillSubcategorie.BACKEND,
      framework: null,
    },
    {
      id: 5,
      label: "VSCode",
      icon: skillsIcons.vscode_icon,
      category: SkillCategorie.TOOL,
      subcategory: null,
      framework: null,
    },
    {
      id: 6,
      label: "Docker",
      icon: skillsIcons.docker_icon,
      category: SkillCategorie.TOOL,
      subcategory: null,
      framework: null,
    },
    {
      id: 7,
      label: "Git",
      icon: skillsIcons.git_icon,
      category: SkillCategorie.TOOL,
      subcategory: null,
      framework: null,
    },
];

export const sharedLinks: Array<sharedLink> = [
  {
    id: 1,
    label: "Theo, generative AI developer",
    link: "https://tcastillo.me",
  },
];