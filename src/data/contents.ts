import { skillsIcons, projectsImages, coreImages } from "../assets";
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
      "GPGtool est un gestionnaire de clés PGP 100% Python, qui intègre une interface graphique accessible, et filite l'utilisation de la technologie GnuPG. Gérez vos propres paires de clés, et cryptez/décryptez des messages et fichiers.",
      en:
      "GPGtool is a 100% Python PGP keys manager, which embeds an accessible graphic interface, facilitating the use of the GnuPG technology. Manage your own key pairs, and encrypt/decrypt messages and files.",
    },
    tags: 
    {
      fr: ["Logiciel", "POO", "Cryptographie", "PE", "Programmation évenementielle", "Programmation orientée objet", "Personnel"],
      en: ["Software", "OOP", "Cryptography", "EP", "Event-driven programming", "Object-oriented programming", "Personnal"],
      0: ["UI", "Python", "UX", "CustomTkinter", "CLI", "Test", "Tests", "Perso"], /* Common tags to every languages */
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
      "This PGP key manager aims to make GnuPG technology accessible. \
      It offers different integration modes, including <strong>a CustomTK GUI</strong>. You can either encrypt/decrypt messages or files, or manage a multitude of keys. \
      This personal <strong>pythonic</strong> project is designed to be easily <strong>maintainable and extensible</strong> thanks to its <strong>robust error handling</strong> and <strong>Model View Controller</strong> architecture. The development of the GUI was also a good opportunity to review <strong>event-driven programming</strong>.",
      fr:
      "Ce gestionnaire de clés PGP vise à rendre la technologie GnuPG accessible. \
      Il propose différents modes d'intégration, dont <strong>une interface graphique</strong> CustomTK. Vous pouvez soit chiffrer/déchiffrer des messages ou des fichiers, soit gérer une multitude de clés. \
      Ce projet personnel est <strong>100% Python</strong>, et conçu pour être facilement <strong>maintenable et extensible</strong> grâce à sa <strong>gestion d'erreurs robuste</strong> et son architecture <strong>Modèle Vue Contrôlleur</strong>. Le développement de l'IG, aura aussi été une bonne occasion de réviser la <strong>programmation événementielle</strong>.",
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
    additionalRessources: [
      {
        content: 
        {
          fr: "GPGtool sur Github",
          en: "GPGtool on Github",
        },
        link: "",
      },
    ]
  },
  {
    title: "MStar",
    description: 
    {
      fr:
      "MStar (M*) est un algorithme de pathfinding développé en Java, sur le modèle du Monte Carlo Tree Search, appliqué à un \"IA\" joueuse.",
      en:
      "MStar (M*) is a pathfinding algorithm developed in Java, based on the Monte Carlo Tree Search, applied to an \"AI\" playing bot.",
    },
    tags:
    {
      fr: ["PC", "Algorithmie", "IA", "POO", "Académique", "Universitaire", "PF", "Programmation concurrente", "Programmation fonctionnelle"],
      en: ["CP", "Algorithmic", "AI", "OOP", "Academic", "University", "FP", "Parrallel programming", 'Functionnal programming'],
      0: ["Java", "Algo", "Test", "Tests", "Monte Carlo", "Machine learning"],
    },
    date: new Date(2024, 11),
    specs: 
    {
      en:
      "In pairs, <strong>research and development of a Java algorithm</strong> to determine the best move to make for a board game. The goal was to win <strong>the tournament</strong> of bots.<br/> \
      <strong>Our pathfinder</strong> is inspired by <strong>A*</strong> and the <strong>Monte Carlo Tree Search</strong>, exploring possible outcomes from a given move. An inverse propagation phase allows to give more or less weight to each possible choice. The main difficulty was to find a <strong>balance</strong> between exploration and exploitation of the game tree. Knowing the size of the board and the limited execution time, we had to <strong>prune strategically</strong>.",
      fr:
      "En binôme, <strong>recherche et élaboration d'un algorithme en Java</strong> determinant le meilleur coup à jouer pour un jeu de plateau. Le but était de remporter <strong>le tournois</strong> des bots.<br/> \
      <strong>Notre pathfinder</strong> s'inspire de <strong>A*</strong> et du <strong>Monte Carlo Tree Search</strong>, explorant les possibles issues à partir d'un coup donné. Une phase de propagation inverse permet de donner plus ou moins de poid à chaque choix possibles. La principale difficulté était de trouver <strong>un équilibre</strong> entre l'exploration et l'exploitation de l'arbre de jeu. Sachant la taille du plateau et le temps d'exécution limité, il nous aura fallu <strong>élaguer de manière stratégique</strong>.", 
    },
    notions: 
    {
      en: ["Concurrent programming,", "Machine learning,", "Comparison of existing algorithms,", "Results analysis and adaptation."],
      fr: ["Programmation concurente en Java,", "Machine learning,", "Comparaison d'algorithmes,", "Analyse de résultats et adaptation."],
    },
    tools: [
      skills.find((skill) => skill.label === 'Java')!,
      skills.find((skill) => skill.label === 'Git')!,
      skills.find((skill) => skill.label === 'Git')!,
    ],
    img: [
      projectsImages.mstar_tournament_results,
      projectsImages.mstar_mcts_algo,
      projectsImages.mstar_tree,
    ],
  },
  {
    title: "Ecograph",
    description: 
    {
      fr:
      "Ecograph aide les entreprises à se positionner géographiquement, en fonction de données climatiques et d'émission de GES à travers le monde.<br/>Cette application permet de visualiser de lourdes masses d'informations, à travers plusieurs vues, telles que des graphiques et des cartes.",
      en:
      "Ecograph helps companies to position themselves geographically, based on climatic and GES emission data around the world.<br/>This app allows to visualize heavy masses of information, through several views, such as graphs and maps.",
    },
    tags: 
    {
      fr: ["BDD", "Visualisation", "Académique", "Universitaire"],
      en: ["Database", "Visualization", "Academic", "University"],
      0: ["ORM", "Graph", "Graphs", "Python", "C#", "CS", "Fullstack"],
    },
    date: new Date(2024, 6),
    specs: 
    {
      en:
      "The first step of this project was to search for the necessary <strong>csv datasets</strong> to create the visuals (graphs, maps ...). Then, my team and I were able to start developing the <strong>C# .NET graphic interface</strong> from our mockups. \
      I was personally in charge of the database management. I discovered the <strong>SQLAlchemy ORM</strong> in Python, a whole new technology that I had to learn <strong>in a few days</strong>.",
      fr:
      "La première étape de ce projet aura été la recherche des <strong>datasets csv</strong> nécessaires à l'élaboration des visuels (graphiques, carte ...). Ensuite, mon équipe et moi même avons pu commencer à développer <strong>l'interface graphique en C# .NET</strong> à partir de nos maquettes. \
      J'étais personnellement chargé de la gestion de la base de données. J'ai fait la découverte de l'<strong>ORM</strong> SQLAlchemy en Python, une toute nouvelle technologie qu'il m'a fallu apprendre <strong>en l'espace de quelques jours</strong>. ",
    },
    notions: 
    {
      en: [
        "Filling a database from CSV files",
        "Teamwork and Git management", 
        "Linking interfaces between back and front ends"
      ],
      fr: [
        "Remplissage d'une BD à partir de fichiers CSV", 
        "Management de projet et gestion du Git", 
        "Liaison entre les différentes technos du projet"
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
      projectsImages.ecograph_home,
      projectsImages.ecograph_home,
      projectsImages.ecograph_gestion,
    ],
  },
  {
    title: "MiniShell",
    description: 
    {
      fr:
      "MiniShell est une réplique du shell Linux. Écrit en C, il vous permet de gérer des dossier et fichiers, d'éxécuter des commandes, même en arrière plan, et prend en charge les pipes.",
      en:
      "MiniShell is a replica of the Linux shell. Written in C, it allows you to manage your folders and files, execute commands, even in the background, and supports pipes.",
    },
    tags:
    {
      fr: ["PF", "Mémoire", "Processus", "Programmation fonctionnelle", "Académique", "Universitaire"],
      en: ["FP", "Memory", "Processes", "Functionnal programming", "Academic", "University"],
      0: ["OS", "C", "Unix", "Linux", "Shell", "Makefile", "Bash"],
    },
    date: new Date(2024, 11),
    specs: 
    {
      en:
      "This project is <strong>a replica of the Linux shell</strong>. Written in C, it allows to manage folders and files, execute commands, even in the background, and supports pipes. <br/> \
      A great opportunity to practice <strong>process management</strong>, between <strong>signals</strong> interception and instantiation of new threads. Knowing the <strong>strict compilation flags</strong> imposed in the Makefile, it was also an opportunity to work on <strong>memory management</strong>, minimizing segmentation errors. This project also served as an introduction to <strong>functional programming in C</strong>.",
      fr:
      "Ce projet est <strong>une réplique du shell Linux</strong>. Écrit en C, il permet de gérer des dossier et fichiers, d'éxécuter des commandes, même en arrière plan, et prend en charge les pipes. \
      Une excellente opportunité de s'exercer à la <strong>gestion des processus</strong>, entre interception de <strong>signaux</strong> et instanciation de nouveaux threads. Sachant les <strong>flags de compilation strictes</strong> imposés dans le Makefile, c'était aussi l'occasion de travaller la <strong>gestion mémoire</strong>, en minimisant les erreurs de segmentation. Ce projet m'aura également servi d'introduction à la <strong>programmation fonctionnelle en C</strong>.",
    },
    notions: 
    {
      en: ["Processes management", "Memory allocation", "Signals and errors management"],
      fr: ["Gestion des signaux et des erreurs", "Compilation sensible à la qualité", "Allocation mémoire", "Système de fichiers"],
    },
    tools: [
      skills.find((skill) => skill.label === 'C')!,
      skills.find((skill) => skill.label === 'Bash')!,
    ],
    img: [
      
    ],
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
        fr: "Développer un futur<br/>libre et équitable.",
        en: "Develop the future,<br/>free and fair.",
      },
      content:
      {
        fr: 
        "Principalement intéressé par le développement d'outils intelligents, je cherche avant tout à lier <strong>utilité</strong> et <strong>accessibilité</strong> dans mes projets. \
        Mon objectif est de permettre au plus grand nombre de profiter des technologies utilitaires avancées. \
        <br/><br/> \
        La programmation est un art, nous permettant de matérialiser nos idées. J'en suis passionné depuis plusieurs années, \
        et mes nombreuses inspirations ont forgées <strong>ma polyvalence</strong>, qui fait aujourd'hui ma force. \
        <br/><br/>   \
        Je prépare actuellement un Bachelor Universitaire de Technologie (<strong>BUT</strong>) \
        en informatique, à l'Institut Universitaire de Technologie (IUT) de Bordeaux, France.",
        en: 
        "Mainly interested in the development of <strong>intelligent</strong> tools, I seek to link <strong>utility</strong> and <strong>accessibility</strong> in my projects. \
        My goal is to allow as many people as possible to benefit from advanced utility technologies.\
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
      en: "Mathieu, engénieur data",
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