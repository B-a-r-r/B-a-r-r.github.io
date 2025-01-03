import { coreImages, skillsIcons } from "../assets";
import { Project, SubtitleMessage, Biography, Skill } from "./types";

export const projects: Array<Project> = [
    {
      id: 1,
      title: "LEMON",
      content: "Towa is a lang application that allows you to create and share your own content. Program a pathfinding algorithm for a bot, in a Java board. ",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      img: null,
    },
    {
      id: 2,
      title: "Ornag",
      content: "Towa is a lang application that allows you to create and share your own content.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      img: null,
    },
    {
      id: 3,
      title: "Mango",
      content: "Towa is a lang application that allows you to create and share your own content.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      img: null,
    },
    {
      id: 4,
      title: "Ivory",
      content: "Towa is a lang application that allows you to create and share your own content. Program a pathfinding algorithm for a bot, in a Java board.  Program a pathfinding algorithm for a bot, in a Java board.  Program a pathfinding algorithm for a bot, in a Java board.  Program a pathfinding algorithm for a bot, fjspiofsfjsof jshpiofhsipfhishifhi",
      tags: ["React", "Node.js"],
      img: null,
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
      content: "Guedaguediguedagueda oh.",
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
      category: "lang",
      subcategory: "web",
      framework: null,
    },
    {
      id: 2,
      label: "Docker",
      icon: skillsIcons.docker_icon,
      category: "tools",
      subcategory: null,
      framework: null,
    },
    {
      id: 3,
      label: "Java",
      icon: skillsIcons.java_icon,
      category: "lang",
      subcategory: "software",
      framework: null,
    },
    {
      id: 4,
      label: "TypeScript",
      icon: skillsIcons.typescript_icon,
      category: "lang",
      subcategory: "web",
      framework: null,
    },
    {
      id: 5,
      label: "Git",
      icon: skillsIcons.git_icon,
      category: "tools",
      subcategory: null,
      framework: null,
    },
    {
      id: 6,
      label: "Go",
      icon: skillsIcons.go_icon,
      category: "lang",
      subcategory: "web",
      framework: null,
    },
    {
      id: 7,
      label: "Python",
      icon: skillsIcons.python_icon,
      category: "lang",
      subcategory: "software",
      framework: null,
    },
    {
      id: 8,
      label: "VSCode",
      icon: skillsIcons.vscode_icon,
      category: "tools",
      subcategory: null,
      framework: null,
    },
    {
      id: 9,
      label: "Tailwind",
      icon: skillsIcons.tailwind_icon,
      category: "lang",
      subcategory: "web",
      framework: null,
    },
    {
      id: 10,
      label: "Markdown",
      icon: skillsIcons.markdown_icon,
      category: "lang",
      subcategory: "text",
      framework: null,
    },
];