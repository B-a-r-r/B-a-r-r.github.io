import { skillsIcons, projectsImages } from "../assets";
import { 
  Project, 
  SubtitleMessage, 
  Biography, 
  Skill, 
  SkillCategorie, 
  SkillSubcategorie 
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
    },
    {
      id: 3,
      title: "MiniShell",
      content: "MiniShell is a replica of a Unix shell. Written in C, it allows you to run commands, even in background, manage files, and create scripts.",
      tags: ["OS", "Linux", "FOP"],
      img: null,
    },
    {
      id: 4,
      title: "clembarr.dev",
      content: "This website has been developed from scratch by myself, using Vite, React, Tailwind css and Typescript.",
      tags: ["Web", "UX", "EOP"],
      img: projectsImages.portfolio,
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
      content: "I am a 19yo <strong>junior developer</strong> and creator, mainly interest in developing clean and intelligent solutions to specific needs. \
              <br/><br/> \
              <strong>Programming</strong> is for me a mean to express my creativity, and enhance my versatility. I’ve been passionate about it since I was 14yo. Today I am developing my own applications and automation tools. \
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