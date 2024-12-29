import { linkedin_icon, mail_icon, github_icon } from "../assets";
import { language, NavLink, Project, SocialMedia } from "./types";

export const navLinks: Array<NavLink> = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }, 
  {
    id: "cv",
    title: "CV",
  },
];

export const languages: Array<language> = [
  {
    id: "english",
    label: "EN",
  },
  {
    id: "french",
    label: "FR",
  }
]

export const socialMedia: Array<SocialMedia> = [
  {
    id: "mail",
    icon: mail_icon,
    link: "mailto:clement.barriere@etu.u-bordeaux.fr",
  },
  {
    id: "github",
    icon: github_icon,
    link: "https://github.com/B-a-r-r",
  },
  {
    id: "linkedin",
    icon: linkedin_icon,
    link: "https://www.linkedin.com/clement-barriere",
  },
];

export const sliderProjects: Array<Project> = [
  {
    id: 1,
    title: "LEMON",
    content: "Towa is a web application that allows you to create and share your own content. Program a pathfinding algorithm for a bot, in a Java board. ",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Ornag",
    content: "Towa is a web application that allows you to create and share your own content.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Mango",
    content: "Towa is a web application that allows you to create and share your own content.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    title: "Ivory",
    content: "Towa is a web application that allows you to create and share your own content. Program a pathfinding algorithm for a bot, in a Java board.  Program a pathfinding algorithm for a bot, in a Java board.  Program a pathfinding algorithm for a bot, in a Java board.  Program a pathfinding algorithm for a bot, fjspiofsfjsof jshpiofhsipfhishifhi",
    tags: ["React", "Node.js"],
  }
];