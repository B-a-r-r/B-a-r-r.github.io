import { skillsIcons, projectsImages } from "../assets";
import { 
  Project, 
  SubtitleMessage, 
  Biography, 
  Skill, 
  SkillCategorie, 
  SkillSubcategorie,
  sharedLink,
  Retex
} from "./dataTypes";

export const skills: Array<Skill> = [
  {
    label: "React",
    icon: skillsIcons.react_icon,
    category: SkillCategorie.LANGUAGE,
    subcategory: SkillSubcategorie.FRONTEND,
  },
  {
    label: "Typescript",
    icon: skillsIcons.typescript_icon,
    category: SkillCategorie.LANGUAGE,
    subcategory: SkillSubcategorie.FRONTEND,
  },
  {
    label: "Python",
    icon: skillsIcons.python_icon,
    category: SkillCategorie.LANGUAGE,
    subcategory: SkillSubcategorie.BACKEND,
  },
  {
    label: "Java",
    icon: skillsIcons.java_icon,
    category: SkillCategorie.LANGUAGE,
    subcategory: SkillSubcategorie.BACKEND,
  },
  {
    label: "VSCode",
    icon: skillsIcons.vscode_icon,
    category: SkillCategorie.TOOL,
  },
  {
    label: "Docker",
    icon: skillsIcons.docker_icon,
    category: SkillCategorie.TOOL,
  },
  {
    label: "Git",
    icon: skillsIcons.git_icon,
    category: SkillCategorie.TOOL,
  },
];

export const retex: Array<Retex> = [
  {
    relatedProject: 'GPGtool',
    specs: 
    {
      en:
      "This PGP keys manager aims to make accessibe the use of the GnuPG technology, \
      providing several integration modes, such as an api, a command line user interface \
      and a graphic user interface.<br/>As for the encryption/decryption tool, ",
      fr:
      "Ce gestionnaire de clés PGP a pour but de rendre accessible l'utilisation de la \
      technologie GnuPG, en proposant plusieurs modes d'intégration, tels qu'une api, une \
      interface en ligne de commande et une interface graphique.<br/>Quant à l'outil de \
      chiffrement/déchiffrement, "
    },
    notions: 
    {
      en: ["Learning better", "Learning faster", "Learning more"],
      fr: ["Apprendre mieux et développer des compétences techniques", "Apprendre plus vite", "Apprendre plus"],
    },
    tools: [
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'Git')!,
      skills.find((skill) => skill.label === 'Typescript')!,
      skills.find((skill) => skill.label === 'Docker')!,
      skills.find((skill) => skill.label === 'Java')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
    ],
    img: [
      projectsImages.gpgtool_home,
      projectsImages.gpgtool_crypto_tool,
      projectsImages.gpgtool_code
    ],    
  },
  {
    relatedProject: 'MStar',
    specs: 
    {
      en:
      "This pathfinding algorithm is based on the Monte Carlo Tree Search model, and is designed to find the best move to play in a board game, \
      by simulating games from the current state of the game.",
      fr:
      "En binôme, <strong>recherche et élaboration d'un algorithme</strong> determinant le meilleur coup à jouer, pour un jeu de plateau. \
      Chaque soirs, les bots de chaque équipe s'affrontaient dans <strong>un tournois</strong>, dont les résultats étaient présentés le lendemain. \
      Mon binôme et moi nous sommes tournés vers un algorithme de pathfinding qui s'inspire de A* et du Monte Carlo Tree Search : le M*. \
      Le principal dilemme était de trouver <strong>un équilibre</strong> entre l'exploration et l'exploitation de l'arbre de jeu; sachant <strong>certaines contraintes \
      imposées</strong>, telles que le temps d'éxécution par coup ou encore l'immensité de l'arbre des possibilités.<br/> ",
    },
    notions: 
    {
      en: ["Learning better", "Learning faster", "Learning more"],
      fr: ["Processus d'actualisation des poids des noeuds d'un arbre", "Gestion de threads et calculs parralèlles en Java,", "Compromis stratégiques (<ins>ex:</ins> élagage)"],
    },
    tools: [
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'Git')!,
      skills.find((skill) => skill.label === 'Typescript')!,
      skills.find((skill) => skill.label === 'Docker')!,
      skills.find((skill) => skill.label === 'Java')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
      skills.find((skill) => skill.label === 'VSCode')!,
    ],
    img: [
      projectsImages.gpgtool_code,
      projectsImages.gpgtool_crypto_tool,
    ],
  },

];

export const projects: Array<Project> = [
    {
      title: "GPGtool",
      content: 
      {
        fr:
        "GPGtool est un gestionnaire de clés PGP 100% Python, qui embarque une interface graphique \
        accessible, facilitant l'utilisation de la technologie GnuPG. Gérez vos propre paires de clés, \
        et chiffrez/déchiffrez des messages et des fichiers.",
        en:
        "GPGtool is a 100% Python PGP keys manager, which embeds an accessible graphic interface, \
        facilitating the use of the GnuPG technology. Manage your own key pairs, and encrypt/decrypt messages and files.",
      },
      tags: 
      {
        fr: ["Logiciel", "POO", "Cryptographie", "PE", "Programmation évenementielle", "Programmation orientée objet"],
        en: ["Software", "OOP", "Cryptography", "EP", "Event-driven programming", "Object-oriented programming"],
        0: ["UI", "Python", "UX", "CustomTkinter", "CLI", "Test"],
      },
      img: projectsImages.gpgtool_crypto_tool,
      date: new Date(2024, 9),
      retex: retex.find((retex) => retex.relatedProject === 'GPGtool')!,
    },
    {
      title: "Ecograph",
      content: 
      {
        fr:
        "Ecograph aide les entreprises à se positionner géographiquement, en fonction de données climatiques et d'émission \
        à travers le monde.<br/>Une interface graphique intuitive permet de visualiser de lourdes masses d'informations, \
        à travers plusieurs vues, telles que des graphiques et des cartes.",
        en:
        "Ecograph helps companies to position themselves geographically, based on climatic and emission data \
        around the world.<br/>An intuitive graphic interface allows to visualize heavy masses of information, \
        through several views, such as graphs and maps.",
      },
      tags: 
      {
        fr: ["BDD", "Visualisation"],
        en: ["Database", "Visualization"],
        0: ["ORM"],
      },
      date: new Date(2024, 6),
    },
    {
      title: "MiniShell",
      content: 
      {
        fr:
        "MiniShell est une réplique du shell Linux. Écrit en C, il vous permet de gérer vos dossier et fichiers, \
        d'éxécuter des commandes, même en arrière plan, et prend en charge les pipes.",
        en:
        "MiniShell is a replica of the Linux shell. Written in C, it allows you to manage your folders and files, \
        to execute commands, even in the background, and supports pipes.",
      },
      tags:
      {
        fr: ["PF"],
        en: ["FP"],
        0: ["OS"],
      },
      date: new Date(2024, 11),
    },
    {
      title: "clembarr.dev",
      content:
      {
        fr:
        "Mon portfolio présente mes réalisations mais aussi, je l'espère, les valeurs que j'incarne dans mon \
        travail. Développé de zéro, sans aucun template ni boilerplate, il est le reflet des mes efforts, dans \
        les petits projets comme dans les plus grands.",
        en:
        "My portfolio showcases my achievements but also, I hope, the values I embody in my work. Developed from scratch, \
        without any template or boilerplate, it reflects my efforts, in small projects as in larger ones.",
      },
      tags:
      {
        fr: ["PE"],
        en: ["EP"],
        0: ["React", "Typescript", "Tailwind", "Web", "UX"],
      },
      img: projectsImages.portfolio,
      date: new Date(2025, 1),
    },
    {
      title: "MStar",
      content:
      {
        fr:
        "MStar (M*) est un algorithme de pathfinding développé en Java, sur le modèle du Monte \
        Carlo Tree Search. Dans le cadre du développement d'un jeu de plateau, cet algorithme permet \
        de trouver le meilleur coup à jouer, en simulant des parties à partir de l'état actuel du jeu.",
        en:
        "MStar (M*) is a pathfinding algorithm developed in Java, based on the Monte Carlo Tree Search model. \
        In the context of developing a board game, this algorithm allows to find the best move to play, \
        by simulating games from the current state of the game.",
      },
      tags:
      {
        fr: ["IA", "Jeu", "PC", "programmation concurrente", "programmation parallèle"],
        en: ["AI", "Game", "CP", "concurrent programming", "parrallel programming"],
        0: ["Java", "Game", "Algo", "Test", "Machine Learning"],
      },
      date: new Date(2024, 8),
      retex: retex.find((retex) => retex.relatedProject === 'GPGtool')!,
    }
];
  
export const subtitleMessages: Array<SubtitleMessage> = [
    {
      content:
      {
        fr: "Développeur junior<br/>et créateur.",
        en: "Junior developer<br/>and creator.",
      }
    },
    {
      content:
      {
        fr: "Étudie actuellement la <br/>vie artificielle !",
        en: "Currently studying<br/>artificial life !",
      }
    },
    {
      content: 
      {
        fr: "Bienvenue sur <br/>mon portfolio.",
        en: "Welcome to my<br/>portfolio.",
      }
    }
];
  
export const bioText: Array<Biography> = [
    {
      title: 
      {
        fr: "Faire propre,<br/>faire mieux.",
        en: "Make it clean,<br/>make it better.",
      },
      content:
      {
        fr: 
        "Je suis un <strong>développeur junior</strong> de 19 ans, principalement intéressé par le développement d'outils intelligents et utiles à des besoins spécifiques. \
        <br/><br/> \
        La <strong>programmation</strong> me permet d'exprimer ma créativité, j'aime faire les choses proprement et efficacement, mais aussi agréables à utiliser. \
        Je suis passionné par la programmation depuis l'âge de 14 ans, et mon intérêt pour divers domaines a forgé ma <strong>polyvalence</strong>, qui est ma principale force.\
        <br/><br/>   \
        Jusqu'en 2026, je préparerai une <strong>licence</strong> en informatique à l'Université et à l'Institut de Technologie de Bordeaux, France.",
        en: 
        "I am a 19yo <strong>junior developer</strong> and creator, mainly interest in developing intelligent and helpful tools to specific needs. \
        <br/><br/> \
        <strong>Programming</strong> allows me to express my creativity, I like to make things clean and efficient, but also pleasent to use. \
        I’ve been passionate about programming since I was 14yo, and my interest for various has built my <strong>versatility</strong>, which is my key strength.\
        <br/><br/>   \
        Until 2026, I will be preparing a <strong>bachelor’s degree</strong> in computer science at the University and Technology Institue of Bordeaux, France."
      },
      active: true,
    }
];

export const sharedLinks: Array<sharedLink> = [
  {
    label: 
    {
      fr: "Théo, développeur d'IA générative",
      en: "Théo, generative AI developer",
    },
    link: "https://tcastillo.me",
  },
];