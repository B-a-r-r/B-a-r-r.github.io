import { skillsIcons, projectsImages, coreImages } from "./index";
import { skillCategories, skillSubcategories } from "./constants";
import { 
  Message,
  Biography, 
  Skill,
  Retex,
  AvailableSkillCategories,
  AvailableSkillSubcategories,
  Hyperlink,
} from "./dataTypes";

/** All the skill to display and their related information. */
export const skills: Array<Skill> = [
  {
    label: "React",
    icon: skillsIcons.react_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.WEB)!,
    framework: "Javascript",
    link: 'https://react.dev/',
    weight: 8
  },
  {
    label: "Typescript",
    icon: skillsIcons.typescript_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.WEB)!,
    framework: "Javascript",
    link: 'https://www.typescriptlang.org/',
    weight: 8
  },
  {
    label: "Python",
    icon: skillsIcons.python_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.SOFTWARE)!,
    link: "https://www.python.org/",
    weight: 9
  },
  {
    label: "Java",
    icon: skillsIcons.java_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.SOFTWARE)!,
    link: 'https://www.java.com/',
    weight: 8
  },
  {
    label: "VSCode",
    icon: skillsIcons.vscode_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.TOOL)!,
    link: 'https://code.visualstudio.com/',
    weight: 8
  },
  {
    label: "Docker",
    icon: skillsIcons.docker_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.TOOL)!,
    link: 'https://www.docker.com/'
  },
  {
    label: "Git",
    icon: skillsIcons.git_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.TOOL)!,
    link: 'https://git-scm.com/',
    weight: 9
  },
  {
    label: "GnuPG",
    icon: skillsIcons.gnupg_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://www.gnupg.org/'
  },
  {
    label: "Tailwind",
    icon: skillsIcons.tailwind_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.WEB)!,
    link: 'https://tailwindcss.com/'
  },
  {
    label: "Markdown",
    icon: skillsIcons.markdown_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.FORMATING)!,
    link: 'https://www.markdownguide.org/'
  },
  {
    label: "SQL",
    icon: skillsIcons.sql_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.DATABASE)!,
    link: 'https://fr.wikipedia.org/wiki/Structured_Query_Language'
  },
  {
    label: "Pandas",
    icon: skillsIcons.pandas_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.BIGDATA)!,
    link: 'https://pandas.pydata.org/'
  },
  {
    label: "Numpy",
    icon: skillsIcons.numpy_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.BIGDATA)!,
    link: 'https://numpy.org/'
  },
  {
    label: "Symfony",
    icon: skillsIcons.symfony_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.WEB)!,
    framework: "PHP",
    link: 'https://symfony.com/'
  },
  {
    label: "PHP",
    icon: skillsIcons.php_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.WEB)!,
    link: 'https://www.php.net/'
  },
  {
    label: "Debian",
    icon: skillsIcons.debian_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.TOOL)!,
    link: 'https://www.debian.org/'
  },
  {
    label: "Rust",
    icon: skillsIcons.rust_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.SOFTWARE)!,
    link: 'https://www.rust-lang.org/'
  },
  {
    label: "Latex",
    icon: skillsIcons.latex_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.FORMATING)!,
    link: 'https://www.latex-project.org/'
  },
  {
    label: "MySQL",
    icon: skillsIcons.mysql_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.TOOL)!,
    link: 'https://www.mysql.com/'
  },
  {
    label: "Bash",
    icon: skillsIcons.bash_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    link: 'https://www.gnu.org/software/bash/'
  },
  {
    label: ".NET",
    icon: skillsIcons.dotnet_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.SOFTWARE)!,
    framework: "C#",
    link: 'https://dotnet.microsoft.com/'
  },
  {
    label: "Javascript",
    icon: skillsIcons.js_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.WEB)!,
    link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript'
  },
  {
    label: "C",
    icon: skillsIcons.c_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.SOFTWARE)!,
    link: 'https://fr.wikipedia.org/wiki/C_(langage)'
  },
  {
    label: "Cpp",
    icon: skillsIcons.cplusplus_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.SOFTWARE)!,
    framework: "C",
    link: 'https://fr.wikipedia.org/wiki/C%2B%2B'
  },
  {
    label: "Figma",
    icon: skillsIcons.figma_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.TOOL)!,
    link: 'https://www.figma.com/'
  },
  {
    label: "Go",
    icon: skillsIcons.go_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.WEB)!,
    link: 'https://golang.org/'
  },
  {
    label: "C#",
    icon: skillsIcons.csharp_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LANGUAGE)!,
    subcategory: skillSubcategories.find((subcategory) => subcategory.context === AvailableSkillSubcategories.SOFTWARE)!,
    framework: "C",
    link: 'https://docs.microsoft.com/fr-fr/dotnet/csharp/'
  }
];

/** All the uploaded projects with all the displayed information, rather for the overviews
 * or the retex. */
export const projects: Array<Retex> = [
  {
    title: "GPGtool",
    description: 
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
      0: ["UI", "Python", "UX", "CustomTkinter", "CLI", "Test"], /* Common tags to every languages */
    },
    img: [
      projectsImages.gpgtool_crypto_tool, /* Main image */
      projectsImages.gpgtool_home,
      projectsImages.gpgtool_crypto_tool,
      projectsImages.gpgtool_code
    ],    
    date: new Date(2024, 9),
    specs: 
    {
      en:
      "This PGP key manager aims to make GnuPG technology accessible. It offers different integration modes, \
      including a CustomTK <strong>graphical interface</strong>. You can either encrypt/decrypt messages or files, or manage a \
      multitude of keys. <br/>This personal project is <strong>100% Python</strong>, and designed to be <strong>easily maintainable and \
      extensible</strong> thanks to its <strong>robust error handling</strong> and object-oriented architecture. The development of \
      the GUI has also been a good opportunity to review <strong>event-driven programming</strong>.",
      fr:
      "Ce gestionnaire de clés PGP vise à rendre la technologie GnuPG accessible. \
      Il propose différents modes d'intégration, dont <strong>une interface graphique</strong> CustomTK. Vous pouvez \
      soit chiffrer/déchiffrer des messages ou des fichiers, soit gérer une multitude de clés.<br/>Ce projet \
      personnel est <strong>100% Python</strong>, et conçu pour être facilement <strong>maintenable et extensible</strong> \
      grâce à sa <strong>gestion d'erreurs robuste</strong> et son architecture orientée objet. Le développement de l'IG, \
      aura aussi été une bonne occasion de réviser la <strong>programmation événementielle</strong>.",
    },
    notions: 
    {
      en: ["Errors handling and tests bench,", "Design following SOLID principles of OOP,", "Release and launch a software."],
      fr: ["Gestion des erreurs et banc de tests,", "Conception d'après les principes SOLID,", "Lancement d'un logicielle en production."],
    },
    tools: [
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'Git')!,
      skills.find((skill) => skill.label === 'GnuPG')!,
    ],
  },
  {
    title: "Towa",
    description: 
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
    specs: 
    {
      en:
      "In pairs, <strong>research and development of an algorithm in Java</strong> to determine the best move to play, for a board game. \
      The goal: to win <strong>the bots tournament</strong>.<br/> \
      <strong>Our pathfinder</strong> is inspired by <strong>A*</strong> and the <strong>Monte Carlo Tree Search</strong>, exploring the possible outcomes from a given move. A phase of \
      reverse propagation allows to give more or less weight to each possible choice. The main difficulty was to find <strong>a \
      balance</strong> between the exploration and exploitation of the game tree. Knowing the size of the board and the limited execution time, \
      it was necessary to <strong>prune strategically</strong>.",
      fr:
      "En binôme, <strong>recherche et élaboration d'un algorithme en Java</strong> determinant le meilleur coup à jouer, pour un jeu de plateau. \
      L'objectif : remporter <strong>le tournois</strong> des bots.<br/> \
      <strong>Notre pathfinder</strong> s'inspire de <strong>A*</strong> et du <strong>Monte Carlo Tree Search</strong>, explorant les possibles issues à partir d'un coup donné. Un phase de \
      propagation inverse permet de donner plus ou moins de poid à chaque choix possible. La principale difficulté était de trouver <strong>un \
      équilibre</strong> entre l'exploration et l'exploitation de l'arbre de jeu. Sachant la taille du plateau et le temps d'exécution limité, \
      il nous a fallu <strong>élaguer de manière stratégique</strong>.", 
    },
    notions: 
    {
      en: ["Concurrent programming,", "Machine learning,", "Comparison of existing algorithms,", "Results analysis and adaptation."],
      fr: ["Programmation concurente en Java,", "Machine learning,", "Comparaison d'algorithmes existants,", "Analyse de résultats et adaptation."],
    },
    tools: [
      skills.find((skill) => skill.label === 'Java')!,
      skills.find((skill) => skill.label === 'Git')!,
      skills.find((skill) => skill.label === 'Git')!,
    ],
    img: [
      coreImages.portrait,
      projectsImages.mstar_tournament_results,
      projectsImages.mstar_tree,
    ],
  },
  {
    title: "Ecograph",
    description: 
    {
      fr:
      "Ecograph aide les entreprises à se positionner géographiquement, en fonction de données climatiques et d'émission \
      à travers le monde.<br/>Une interface graphique intuitive permet de visualiser de lourdes masses d'informations, \
      à travers plusieurs vues, telles que des graphiques et des cartes.",
      en:
      "Ecograph helps companies to position themselves geographically, based on climatic and emission data \
      around the world. An intuitive graphic interface allows to visualize heavy masses of information, \
      through several views, such as graphs and maps.",
    },
    tags: 
    {
      fr: ["BDD", "Visualisation"],
      en: ["Database", "Visualization"],
      0: ["ORM"],
    },
    date: new Date(2024, 6),
    specs: 
    {
      en:
      "This project <strong>helps companies to position themselves geographically</strong>, based on climatic and emission data around the world. \
      An intuitive graphic interface allows to visualize heavy masses of information, through several views, such as graphs and maps. \
      <br/>In my team of five developers, I was in charge of the database management. I discovered SQLAlchemy, <strong>an ORM in \
      Python</strong>. I had to learn a whole new technology <strong>in just a few days</strong>.",
      fr:
      "Ce projet <strong>aide les entreprises à se positionner géographiquement</strong>, en fonction de données climatiques et d'émission à travers le monde. \
      Une interface graphique intuitive permet de visualiser de lourdes masses d'informations, à travers plusieurs vues, telles que des graphiques et des cartes.\
      <br/>Dans mon équipe de cins développeur, j'étais chargé de la gestion de la base de données. J'ai fait la découverte de SQLAlchemy, <strong>un ORM en \
      Python</strong>. J'ai donc dû apprendre une toute nouvelle technologie <strong>en l'espace de quelques jours</strong>",
    },
    notions: 
    {
      en: [
        "Filling a database from CSV files,", 
        "Quick start of a new tool,", 
        "Teamwork and Git management,", 
        "Link between the different project technologies."
      ],
      fr: [
        "Remplissage d'une BD à partir de fichiers CSV,", 
        "Prise en main éclaire d'un nouvel outils,", 
        "Travail d'équipe et gestion du Git,", 
        "Liaison entre les différentes technos du projet."
      ],
    },
    tools: [
      skills.find((skill) => skill.label === 'C#')!,
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'SQL')!,
      skills.find((skill) => skill.label === '.NET')!,
      skills.find((skill) => skill.label === 'Git')!,
    ],  
    img: [
      coreImages.portrait,
      projectsImages.ecograph_home,
      projectsImages.ecograph_gestion,
    ],
  },
  {
    title: "MiniShell",
    description: 
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
    specs: 
    {
      en:
      "This project is <strong>a replica of the Linux shell</strong>. Written in C, it allows you to manage your folders and files, \
      execute commands, even in the background, and supports pipes. <br/>An excellent opportunity to practice <strong>process management</strong>, \
      between interception of <strong>signals</strong> and instantiation of new children. Knowing the <strong>strict compilation flags</strong> imposed in the Makefile, \
      it was also an opportunity to work on <strong>memory management</strong>, minimizing segmentation errors. This project will also have \
      served as an introduction to <strong>functional programming in C</strong>.",
      fr:
      "Ce projet est <strong>une réplique du shell Linux</strong>. Écrit en C, il permet de gérer des dossier et fichiers, d'éxécuter des commandes, \
      même en arrière plan, et prend en charge les pipes. <br/>Une excellente opportunité de s'exercer à la <strong>gestion des processus</strong>, \
      entre interception de <strong>signaux</strong> et instanciation de nouveaux fils. Sachant les <strong>flags de compilation strictes</strong> imposés dans le Makefile, \
      c'était aussi l'occasion de travaller la <strong>gestion mémoire</strong>, en minimisant les erreurs de segmentation. Ce projet m'aura également \
      servi d'introduction à la <strong>programmation fonctionnelle en C</strong>.",
    },
    notions: 
    {
      en: ["Processes management,", "Memory allocation,", "File system,", "Signals and errors management."],
      fr: ["Gestion de struct", "Allocation mémoire,", "Système de fichiers,", "Gestion des signaux et des erreurs."],
    },
    tools: [
      skills.find((skill) => skill.label === 'C')!,
      skills.find((skill) => skill.label === 'Bash')!,
    ],
    img: [],
  },
  {
    title: "clembarr.dev",
    description:
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
    img: [projectsImages.portfolio],
    date: new Date(2025, 1),
    specs: {},
    notions: {},
    tools: [],
  },
  {
    title: "MStar",
    description:
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
    specs: {},
    notions: {},
    tools: [],
  }
];

/** The messages displayed under the main title in the Hero section
 * (with the writting machine effect). */
export const subtitleMessages: Array<Message> = [
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
        fr: "Étudie actuellement la vie artificielle !",
        en: "Currently studying artificial life !",
      }
    },
    {
      content: 
      {
        fr: "Bienvenue sur mon portfolio.",
        en: "Welcome to my portfolio.",
      }
    }
];

/** Store the bigraphy templates, the first one having the property 'active' to 
 * true will be displayed. */
export const bioText: Array<Biography> = [
    {
      title: 
      {
        fr: "Penser,<br/>Développer.",
        en: "Make it clean,<br/>make it better.",
      },
      content:
      {
        fr: 
        "Principalement intéressé par le développement d'outils intelligents, je cherche avant tout à lier \
        <strong>utilité</strong> et <strong>accessibilité</strong> dans mes projets. Mon objectif est de permettre au plus \
        grand nombre de profiter des technologies utilitaires avancées.\
        <br/><br/> \
        La programmation est un art qui donne vie aux abstractions de l'esprit. J'en suis passionné depuis plusieurs années, \
        et mes inspirations ont forgées <strong>ma polyvalence</strong>, qui fait aujourd'hui ma force. \
        <br/><br/>   \
        Je prépare actuellement un Bachelor Universitaire de Technologie (<strong>BUT</strong>) \
        en informatique, à l'Institut Universitaire de Technologie (IUT) de Bordeaux, France.",
        en: 
        "Mainly interested in the development of <strong>intelligent</strong> tools, I seek to link \
        <strong>utility</strong> and <strong>accessibility</strong> in my projects. My goal is to allow as many people as possible \
        to benefit from advanced utility technologies.\
        <br/><br/> \
        Programming is an art that brings abstractions of the mind to life. I have been passionate about it for several years, \
        and my inspirations have forged <strong>my versatility</strong>, one of my key assets today. \
        <br/><br/>   \
        I am currently preparing a University Bachelor of Technology (<strong>BUT</strong>) \
        in computer science, at the University Institute of Technology (IUT) of Bordeaux, France.",
      },
      active: true,
    }
];

/** Shared links, mainly displayed in the footer. */
export const sharedLinks: Array<Hyperlink> = [
  {
    content: 
    {
      fr: "Théo, développeur d'IA génératives",
      en: "Théo, generative AI developer",
    },
    link: "https://tcastillo.me",
  },
  {
    content:
    {
      fr: "Zao, développeur de jeux vidéo",
      en: "Zao, video games developer",
    },
    link: "https://zaofromage.github.io/portfolio",
  },
  {
    content:
    {
      fr: "Antoine, développeur d'API",
      en: "Antoine, API developer",
    },
    link: "https://labian0.github.io",
  },
  {
    content:
    {
      fr: "Alexandre, développeur d'algorithmes",
      en: "Alexandre, algorithms developer",
    },
    link: "https://carcroks.github.io",
  },
  {
    content:
    {
      fr: "Mathieu, data engineer",
      en: "Mathieu, data engineer",
    },
    link: "https://matjay.me",
  },
  {
    content:
    {
      fr: "Rodolphe, développeur de bots",
      en: "Rodolphe, bots developer",
    },
    link: "https://rodolphent.github.io/",
  }
];