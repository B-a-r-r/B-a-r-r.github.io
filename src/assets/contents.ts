import { skillsIcons, projectsImages, coreImages, documents } from "./index";
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
  },
  {
    label: "CustomTK",
    icon: skillsIcons.customtkinter_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://github.com/TomSchimansky/CustomTkinter'
  },
  {
    label: "Matplotlib",
    icon: skillsIcons.matplotlib_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://matplotlib.org/'
  },
  {
    label: "CUDA",
    icon: skillsIcons.cuda_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://developer.nvidia.com/cuda-toolkit'
  },
  {
    label: "PyTorch",
    icon: skillsIcons.pytorch_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://pytorch.org/'
  }, 
  {
    label: "Transformers",
    icon: skillsIcons.hugging_face_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://huggingface.co/docs/transformers/index'
  },
  {
    label: "JUnit",
    icon: skillsIcons.junit_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://junit.org/junit5/'
  },
  {
    label: "SQL Server",
    icon: skillsIcons.sqlserver_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15'
  },
  {
    label: "Twig",
    icon: skillsIcons.twig_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://twig.symfony.com/doc/3.x/'
  },
  {
    label: "PL/SQL",
    icon: skillsIcons.sql_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://www.oracle.com/database/technologies/appdev/plsql.html'
  },
  {
    label: "Axios",
    icon: skillsIcons.axios_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://axios-http.com/docs/intro'
  },
  {
    label: "Unittest",
    icon: skillsIcons.unittest_icon,
    category: skillCategories.find((category) => category.context === AvailableSkillCategories.LIBRARY)!,
    link: 'https://docs.python.org/3/library/unittest.html'
  }
];

/** All the uploaded projects with all the displayed information, rather for the overviews
 * or the retex. */
export const projects: Array<Retex> = [
  {
    title: 
    {
      0: "GPGtool"
    },
    description: 
    {
      fr:
      "GPGtool est un gestionnaire de clés PGP 100% Python. Il embarque une interface graphique accessible, et facilite l'utilisation de la technologie GnuPG. Gérez vos propres paires de clés, et utilisez les pour des messages et fichiers.",
      en:
      "GPGtool is a 100% Python PGP keys manager, which embeds an accessible graphic interface, facilitating the use of the GnuPG technology. Manage your own key pairs, and encrypt/decrypt messages and files.",
    },
    tags: 
    {
      fr: ["POO", "Utilitaire", "Crypto", "PE", "Programmation évenementielle", "Logiciel", "Programmation orientée objet", "Personnel", "IU"],
      en: ["Tool", "OOP", "Crypto", "EP", "Event-driven programming", "Object-oriented programming", "Personnal", "Software"],
      0: ["UI", "UX", "CLI", "Test", "Tests", "Perso", "Testing", "Perso"], /* Common tags to every languages */
    },
    img: [
      projectsImages.gpgtool_home,
      projectsImages.gpgtool_crypto_tool,
      projectsImages.gpgtool_keys_listing,
      projectsImages.gpgtool_pgp_diagram,
    ],    
    date: new Date(2024, 9),
    specs: 
    {
      en:
      "This PGP key manager meets the fundamental need to make <strong>communication and data security accessible</strong>. \
      The application can be used as an encapsulation of the GnuPG library in API mode, or as a complete graphical tool with its \
      CustomTk interface. Two tabs are currently available: data encryption/decryption, and key management. \
      The focus has been on <strong>maintainability and extensibility</strong> to make the development of the application as smooth as its use.",
      fr:
      "Ce gestionnaire de clés PGP répond au besoin fondamental de rendre accessible la <strong>sécurisation des communications et données</strong>.\
      L'application peut être utilisée comme une encapsulation de la bibliothèque GnuPG en mode API, ou comme un outil graphique complet avec\
      son interface sous CustomTK. Deux onglets sont actuellement disponibles: le chiffrement/déchiffrement de données, et la gestion de clés.\
      L'accent a été mis sur <strong>la maintenabilité et l'extensibilité</strong> pour rendre le développement de l'application aussi fluide que son utilisation.",
    },
    notions: 
    {
      en: ["Error handling and log files,", "<strong>MVC</strong> and <strong>SOLID</strong> architecture,", "<strong>User-friendly</strong> client application."],
      fr: ["Gestion d'erreurs et fichiers de logs,", "Architecture <strong>MVC</strong> et principes <strong>SOLID</strong>,", "<strong>Application cliente</strong> ergonomique."],
    },
    tools: [
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'GnuPG')!,
      skills.find((skill) => skill.label === 'CustomTK')!,
    ],
  },
  {
    title: 
    {
      0: "EEW Analyzer"
    },
    date: new Date(2025, 5),
    tools: [
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'PyTorch')!,
      skills.find((skill) => skill.label === 'Numpy')!,
      skills.find((skill) => skill.label === 'Transformers')!,
      skills.find((skill) => skill.label === 'CUDA')!
    ],
    description:
    {
      fr:
      "Une application dédiée au modèle EEW, permettant de lancer des expérience et analyser les résultats à travers différentes métriques.",
      en:
      "A dedicated application for the EEW model, allowing to run experiments and analyze the results through different metrics.",
    },
    specs:
    {
      fr: 
      "J'ai conçu une application dédiée pour le modèle Evolutionary Ecology of Words (EEW), refactorisant \
      une base de scripts en une architecture structurée en deux modules Python. Le premier module, centré \
      sur l'exécution des \"simulations\", intègre des <strong>classes spécialisées</strong> pour les acteurs de l'expérience, un <strong>système de \
      logging</strong> complet, et une <strong>intégration flexible de LLM</strong>. Un fichier de configuration centralisé permet à \
      l'utilisateur de <strong>personnaliser tous les paramètres</strong>. Le second module se concentre sur la valorisation \
      des données (graphiques, animations) et l'analyse de métriques clés comme <strong>l'émergence de nouveauté</strong> \
      et <strong>les dynamiques de dérivation sémantique</strong>, essentielles pour la recherche sur l'open-endedness. \
      Un <strong>outil d'analyse complet</strong> pour d'optimiser la collaboration future sur ce sujet.",
      en:
      "I designed a dedicated application for the Evolutionary Ecology of Words (EEW) model, refactoring \
      a base of scripts into a structured architecture with two Python modules. The first module, focused \
      on running the \"simulations\", integrates <strong>specialized classes</strong> for the experiment's \
      actors, a <strong>complete logging</strong> system, and a <strong>flexible LLM integration</strong>. \
      A centralized configuration file allows the user to <strong>customize all parameters</strong>. The \
      second module focuses on data valorization (graphics, animations) and the analysis of key metrics such as <strong>the emergence of novelty</strong> \
      and <strong>the dynamics of semantic derivation</strong>, essential for research on open-endedness. \
      A <strong>comprehensive analysis tool</strong> to optimize future collaboration on this topic."
    },
    notions:
    {
      fr: ["Intégration de LLM et prompt engineering", "Conception de métriques spéciales", "Valorisation de datasets JSON"],
      en: ["LLM integration and prompt engineering", "Design of special metrics", "Valorization of JSON datasets"],
    },
    tags:
    {
      fr: ["Data", "LLM", "Stage", "Recherche", "Professionnel", "IA", "POO", "Programmation orientée objet", "Logiciel"],
      en: ["Data", "LLM", "Intern", "Research", "Professional", "OOP", "Object-oriented programming", "Software", "Internship"],
      0: ["AI", "BigData", "Simulation", "Integration", "Data science"]
    },
    img: [
      projectsImages.eew_algo,
      projectsImages.eew_prompts,
      projectsImages.eew_logs_file,
      projectsImages.eew_basic_visuals,
      projectsImages.eew_uml_simulation,
      projectsImages.eew_uml_makegraph
    ],
    additionalRessources: [
      {
        content: 
        {
          fr: "Rapport de stage",
          en: "Internship report",
        },
        link: documents.eew_internship_report,
      },
      {
        content:
        {
          fr: "Rapport d'activité",
          en: "Activity report",
        },
        link: documents.eew_activity_report,
      }
    ]
  },
  {
    title: 
    {
      0: "MStar"
    },
    description: 
    {
      fr:
      "MStar (M*) est un algorithme de pathfinding développé en Java, sur le modèle du Monte Carlo Tree Search, appliqué à une \"IA\" joueuse.",
      en:
      "MStar (M*) is a pathfinding algorithm developed in Java, based on the Monte Carlo Tree Search, applied to an \"AI\" playing bot.",
    },
    tags:
    {
      fr: ["PC", "Machine learning", "POO", "IA", "Académique", "Universitaire", "Programmation concurrente", "Algorithmie", "Programmation fonctionnelle"],
      en: ["CP", "Machine learning", "OOP", "Algorithmic", "AI", "Academic", "University", "Parrallel programming", 'Functionnal programming'],
      0: ["Algo", "Test", "Tests", "Monte Carlo", "Pathfinding"],
    },
    date: new Date(2024, 10),
    specs: 
    {
      en:
      "In pairs, <strong>research and development of a Java algorithm</strong> determining the best move to play for a board game.\
      The goal was to win the <strong>bot tournament</strong>. <strong>Our pathfinder</strong> is inspired by A* and <strong>Monte Carlo Tree Search</strong>, exploring possible outcomes from a given move. A phase of <strong>backpropagation</strong> allows to give more or less\
      <strong>weight</strong> to each possible choice. The main challenge was to find <strong>a balance</strong> between exploration and exploitation\
      of the game tree. Given the size of the board and the limited execution time, we had to <strong>prune strategically</strong>. \
      A maximum of options were still explored, thanks to optimization strategies such as parallelization of the game tree analysis.",
      fr:
      "En binôme, <strong>recherche et élaboration d'un algorithme en Java</strong> determinant le meilleur coup à jouer pour un jeu de plateau.\
      Le but était de remporter <strong>le tournois</strong> des bots. <strong>Notre pathfinder</strong> s'inspire de A* et du <strong>Monte Carlo\
      Tree Search</strong>, explorant les possibles issues à partir d'un coup donné. Une phase de <strong>propagation inverse</strong> permet de donner plus ou moins\
      de <strong>poids</strong> à chaque choix possibles. La principale difficulté était de trouver <strong>un équilibre</strong> entre l'exploration et l'exploitation\
      de l'arbre de jeu. Sachant la taille du plateau et le temps d'exécution limité, il nous aura fallu <strong>élaguer de manière stratégique</strong>. \
      Un maximum d'options été tout de même explorées, grâce à des stratégies d'optimisation telles que la parallélisation de l'analyse de l'arbre de jeu.", 
    },
    notions: 
    {
      en: ["Concurrent programming,", "Machine learning,", "Comparison of existing algorithms,", "Results analysis and adaptation."],
      fr: ["Programmation concurente,", "Machine learning,", "Comparaison d'algorithmes,", "Analyse de résultats et adaptation."],
    },
    tools: [
      skills.find((skill) => skill.label === 'Java')!,
      skills.find((skill) => skill.label === 'JUnit')!,
      skills.find((skill) => skill.label === 'Git')!,
      skills.find((skill) => skill.label === 'Bash')!,
    ],
    img: [
      projectsImages.mstar_tournament_results,
      projectsImages.mstar_mcts_algo,
      projectsImages.mstar_end_board,
    ],
  },
  {
    title: 
    {
      0: "Ecograph"
    },
    description: 
    {
      fr:
      "Ecograph aide les entreprises à se positionner géographiquement, en fonction de données climatiques et d'émission de GES à travers le monde. Cette application permet de visualiser de lourdes masses d'informations, à travers plusieurs vues, telles que des graphiques et des cartes.",
      en:
      "Ecograph helps companies to position themselves geographically, based on climatic and GES emission data around the world. This app allows to visualize heavy masses of information, through several views, such as graphs and maps.",
    },
    tags: 
    {
      fr: ["Visualisation", "BD", "Collab", "Académique", "Universitaire", "Base de données", "POO"],
      en: ["DB", "Visualization",  "Teamwork", "Academic", "University", "DB", "OOP"],
      0: ["ORM", "Graph", "Graphs", "Data", "C#", "CS", "Fullstack"],
    },
    date: new Date(2024, 6),
    specs: 
    {
      en:
      "As part of a team of 5 developers, I co-developed Ecograph, \
      a client application allowing companies to <strong>visualize and analyze \
      climatic and GES emission data</strong>. I participated \
      in the design of the graphical interface in C# and the implementation of the \
      backend in Python (with SQLAlchemy and SQL Server), integrating CSV datasets \
      to feed the database. This project allowed me to strengthen my skills \
      in writing <strong>specification documents</strong> and project management and, \
      planning in a team. The goal was to provide <strong>a \
      decision-making tool</strong> for a strategic positioning of companies facing \
      environmental challenges.",
      fr:
      "Au sein d'une équipe de 5 développeurs, j'ai co-développé Ecograph, \
      une application cliente permettant aux entreprises <strong>de visualiser et \
      d'analyser des données climatiques et d'émissions de GES</strong>. J'ai participé \
      à la conception de l'interface graphique en C# .NET et à l'implémentation du \
      backend en Python (avec SQLAlchemy et SQL Server), en intégrant des datasets \
      CSV pour alimenter la base. Ce projet m'a permis de renforcer mes compétences \
      en rédaction des <strong>dossiers de spécifications</strong> et gestion de projet \
      en équipe. L'objectif était de fournir <strong>un \
      outil décisionnel</strong> pour un positionnement stratégique des entreprises \
      face aux enjeux environnementaux.",
    },
    notions: 
    {
      en: [
        "Filling a database from CSV files",
        "Teamwork and Git management", 
        "Linking interfaces between back and front ends",
        "Writing specifications and requirements documents"
      ],
      fr: [
        "Remplissage d'une BD à partir de fichiers CSV", 
        "Management de projet et gestion du Git", 
        "Liaison entre les différentes technos du projet",
        "Cahier des charges et dossier de spécifications"
      ],
    },
    tools: [
      skills.find((skill) => skill.label === '.NET')!,
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'SQL Server')!,
      skills.find((skill) => skill.label === 'Git')!,
    ],  
    img: [
      projectsImages.ecograph_home,
      projectsImages.ecograph_gestion,
      projectsImages.ecograph_gantt
    ],
  },
  // {
  //   title: 
  //   {
  //     0: "MiniShell"
  //   },
  //   description: 
  //   {
  //     fr:
  //     "MiniShell est une réplique du shell Linux. Écrit en C, il vous permet de gérer des dossier et fichiers, d'éxécuter des commandes, même en arrière plan, et prend en charge les pipes.",
  //     en:
  //     "MiniShell is a replica of the Linux shell. Written in C, it allows you to manage your folders and files, execute commands, even in the background, and supports pipes.",
  //   },
  //   tags:
  //   {
  //     fr: ["PF", "Mémoire", "Processus", "Programmation fonctionnelle", "Académique", "Universitaire"],
  //     en: ["FP", "Memory", "Processes", "Functionnal programming", "Academic", "University"],
  //     0: ["OS", "Unix", "Linux", "Shell", "Makefile"],
  //   },
  //   date: new Date(2024, 11),
  //   specs: 
  //   {
  //     en:
  //     "MiniShell is a Linux shell reproducing the basic functionalities of bash <strong>(system calls, \
  //     job management, signals, pipelines)</strong> in C, under <strong>strict compilation constraints</strong>. \
  //     The focus was thus on optimizing memory management and efficiently processing strings. \
  //     This project allowed me to deepen my understanding of low-level mechanisms <strong>(processes, signals, \
  //     redirections, interruptions)</strong>, resource management, and refine my skills in <strong>parsing</strong> \
  //     and system code optimization and software robustness.",
  //     fr:
  //     "Minishell est un shell Linux reproduisant les fonctionnalités de base de bash <strong>(appels système, gestion \
  //     des jobs, signaux, pipelines)</strong> en C, sous des <strong>contraintes de compilation strictes</strong>. \
  //     L'accent a ainsi été mis sur l'optimisation de la gestion mémoire et le traitement efficace des chaînes de caractères. \
  //     Ce projet m'a permis d'approfondir ma maîtrise des mécanismes bas niveau <strong>(processus, signaux, \
  //     redirections, interruptions)</strong>, de la gestion des ressources, et de perfectionner mes \
  //     compétences en <strong>parsing</strong> et en optimisation de code système et en robustesse logicielle.",
  //   },
  //   notions: 
  //   {
  //     en: ["Signal and error handling", "Quality-aware compilation", "Memory management", "File system"],
  //     fr: ["Gestion des signaux et des erreurs", "Compilation sensible à la qualité", "Allocation mémoire", "Système de fichiers"],
  //   },
  //   tools: [
  //     skills.find((skill) => skill.label === 'C')!,
  //     skills.find((skill) => skill.label === 'Bash')!,
  //     skills.find((skill) => skill.label === 'Git')!,
  //   ],
  //   img: [],
  // },
  {
    title: 
    {
      0: "Dummy Arrays"
    },
    date: new Date(2025, 0),
    tools: [
      skills.find((skill) => skill.label === 'Rust')!,
      skills.find((skill) => skill.label === 'Go')!,
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'Matplotlib')!,
    ],
    description:
    {
      fr:
      "La Dummy Array est une structure de données associative. Implémenter en Rust et en Go, nous avons \
      réaliser un benchmark sur leurs performances et optimiser leur conception pour une meilleure efficacité.",
      en:
      "The Dummy Array is an associative data structure. Implemented in Rust and Go, we conducted a \
      benchmark on their performance and optimized their design for better efficiency.",
    },
    specs:
    {
      fr: 
      "En binôme, <strong>conception et implémentation d'une structure de données associative</strong> (Dummy Arrays) en Rust et \
      en Go, avec pour objectif de comparer leurs performances via <strong>un benchmark</strong>. En charge de la version \
      Rust, j'ai exploité les spécificités du langage — gestion stricte de la mémoire, compilateur exigeant \
      et bas niveau — pour <strong>optimiser l'efficacité et la complexité algorithmique</strong>. \
      Ce travail m'a permis d'analyser finement les structures natives de Rust (comme HashMap ou Vec), \
      <strong>d'évaluer leurs trade-offs</strong>, et de présenter une comparaison rigoureuse des performances entre les deux \
      implémentations. Une expérience formatrice en optimisation système, benchmarking et collaboration \
      technique.",
      en:
      "In pairs, <strong>Design and implementation of an associative data structure</strong> (Dummy Arrays) in Rust and \
      Go, with the aim of comparing their performance through <strong>a benchmark</strong>. In charge of the Rust version, \
      I leveraged the language's specificities — strict memory management, demanding compiler \
      and low-level — to <strong>optimize efficiency and algorithmic complexity</strong>. \
      This work allowed me to finely analyze Rust's native structures (such as HashMap or Vec), \
      <strong>evaluate their trade-offs</strong>, and present a rigorous comparison of the performance between the two \
      implementations. A formative experience in system optimization, benchmarking, and collaboration \
      techniques.",
    },
    notions:
    {
      fr: ["Conception de structures de données", "Analyse des performances", "Gestion mémoire rigoureuse"],
      en: ["Data structures design", "Performance analysis", "Strict memory management"],
    },
    tags:
    {
      en: ["Structures", "Optimization", "Benchmarking", "Academic", "Systems", "FP"],
      fr: ["Structures", "Optimisation", "Benchmarking", "Académique", "Systèmes", "FP"],
      0: ["Rust", "Go", "OS", "Algo"],
    },
    img: [
      projectsImages.dummy_arrays_code
    ],
    additionalRessources: [
      {
        content: 
        {
          fr: "Répo GitHub",
          en: "GitHub Repo",
        },
        link: "https://github.com/labian0/dummy-array",
      },
    ]
  },
  // {
  //   title: 
  //   {
  //     0: "Robot Cup",
  //   },
  //   date: new Date(2025, 2),
  //   tools: [
  //     skills.find((skill) => skill.label === 'Symfony')!,
  //     skills.find((skill) => skill.label === 'Tailwind')!,
  //     skills.find((skill) => skill.label === 'PL/SQL')!,
  //     skills.find((skill) => skill.label === 'Twig')!,
  //     skills.find((skill) => skill.label === 'Git')!,
  //   ],
  //   description:
  //   {
  //     fr:
  //     "Cette application de gestion permet une utilisation accessible et une mise en place des \
  //     tournois intuitive. En étroite collaboration avec le client, nous sommes arrivé à un produit \
  //     final répondant à ses besoins.",
  //     en:
  //     "This management application allows for accessible use and intuitive tournament setup. \
  //     In close collaboration with the client, we arrived at a final product that meets their needs."
  //   },
  //   specs:
  //   {
  //     fr:
  //     "En équipe de 5 développeurs, j'ai participé à la conception d'une application de gestion \
  //     et visualisation de tournois en appliquant une <strong>méthodologie Scrum</strong>. Nous avons développé une \
  //     base de données Oracle PL/SQL avec des <strong>scripts d'automatisation</strong>, une architecture MVC sous \
  //     PHP Symfony (avec ORM Doctrine), et un front en Twig/TailwindCSS. Au fil des sprints, j'ai contribué  \
  //     à des <strong>fonctionnalités importantes</strong>: inscription des équipes, génération de rencontres en round-robin, \
  //     planification des matchs, et gestion de l'arbitrage via des données JSON. Ce projet m'a permis de \
  //     renforcer mes compétences en <strong>développement full-stack, en collaboration Agile</strong> (rituels quotidiens, \
  //     échanges avec le PO), et en optimisation de processus métiers pour livrer un outil fonctionnel et \
  //     évolutif.",
  //     en:
  //     "In a team of 5 developers, I participated in the design of a tournament management and \
  //     visualization application by applying a <strong>Scrum methodology</strong>. We developed \
  //     an Oracle PL/SQL database with <strong>automation scripts</strong>, an MVC architecture \
  //     under Symfony (with ORM Doctrine), and a front end in Twig/TailwindCSS. Over the sprints, \
  //     I contributed to key features: team registration, round-robin match generation, match scheduling, \
  //     and refereeing management via JSON data. This project allowed me to strengthen my skills \
  //     in <strong>full-stack development, Agile collaboration</strong> (daily rituals, exchanges with \
  //     the PO), and business process optimization to deliver a functional and scalable tool.",
  //   },
  //   notions:
  //   {
  //     fr: ["Plannification et priorisation des tâches", "Traitement de données automatisé", "Optimisation de processus métiers"],
  //     en: ["Task planning and prioritization", "Automated data processing", "Business process optimization"],
  //   },
  //   tags:
  //   {
  //     en: ["Management", "AGILE", "MVC", "Academic"],
  //     fr: ["Management", "AGILE", "MVC", "Académique"],
  //     0: ["PHP", "Symfony", "SQL", "Scrum", "PL", "Oracle"],
  //   },
  //   img: [
  //   ]
  // },
  {
    title: 
    {
      0: "Votator",
    },
    date: new Date(2025, 2),
    tools: [
      skills.find((skill) => skill.label === 'React')!,
      skills.find((skill) => skill.label === 'Typescript')!,
      skills.find((skill) => skill.label === 'Axios')!,
      skills.find((skill) => skill.label === 'Tailwind')!,
    ],
    description:
    {
      fr: "Votator est une application front-end React qui permet aux utilisateurs de se connecter, suivre et participer à des tournois de vote sur diverses thématiques.",
      en: "Votator is a front-end application built with React that allows users to log in, track, and participate in voting tournaments on various topics."
    },
    specs:
    {
      fr: 
      "Votator est un front en React permettant aux utilisateurs de <strong>se connecter, suivre et \
      participer</strong> à des tournois de vote sur diverses thématiques. En m'appuyant sur <strong>la documentation \
      de l'API REST du serveur distant</strong> et sur la bibliothèque <strong>Axios</strong>, j'ai mis en place la \
      gestion des <strong>requêtes asynchrones</strong> et l'adaptation des interfaces selon les évennements utilisateurs et le \
      le calendrier des tournois. Il était important de <strong>prévoir les possibles actions</strong> des utilisateurs pour gérer \
      l'ensemble des cas et des retours du serveur. Ce qui amène à se soucier de <strong>l'accesibilité</strong>, et notamment \
      l'importance de tenir l'utilisateur informé, en cas d'erreur par exemple. Des concepts clés du développement \
      avec React ont dû être appliqués, tels que la gestion d'états, de contextes, des effets et autres <strong>hooks fondamentaux</strong>.",
      en:
      "Votator is a front-end application built with React that allows users to <strong>log in, track, \
      and participate</strong> in voting tournaments on various topics. Relying on <strong>the documentation \
      of the REST API of the remote server</strong> and the <strong>Axios</strong> library, I implemented \
      the management of <strong>asynchronous requests</strong> and the adaptation of interfaces according \
      to user events and the tournament schedule. It was important to <strong>anticipate possible user \
      actions</strong> to handle all cases and server responses. This also raises concerns about \
      <strong>accessibility</strong>, particularly the importance of keeping the user informed, in case of an error for \
      example. Key concepts of development with React had to be applied, such as state management, context, \
      effects, and other <strong>fundamental hooks</strong>."
    },
    notions:
    {
      fr: ["Gestion de sessions utilisateur", "Communication via API REST", "Requêtes asynchrones et codes HTTP", "Architecture modulaire et microservices"],
      en: ["User session management", "Communication via REST API", "Asynchronous requests and HTTP codes", "Modular architecture and microservices"],
    },
    tags:
    {
      en: ["Front", "API", "EP", "Asynchronous", "Event programming", "Academic"],
      fr: ["Front", "API", "PE", "Asynchrone", "Programmation événementielle", "Académique"],
      0: ["Axios", "Async", "Web"],
    },
    img: [
      projectsImages.votator_home,
      projectsImages.votator_closed_ones,
      projectsImages.votator_active_bracket,
      projectsImages.votator_past_round,
      projectsImages.votator_swagger,
    ],
    additionalRessources: [
      {
        content: 
        {
          fr: "Répo GitHub",
          en: "GitHub Repo",
        },
        link: "https://github.com/B-a-r-r/Votator",
      },
    ]
  },
  // {
  //   title: 
  //   {
  //     0: "MiniRSA",
  //   },
  //   date: new Date(2024, 12),
  //   tools: [
  //     skills.find((skill) => skill.label === 'Python')!,
  //     skills.find((skill) => skill.label === 'Unittest')!,
  //     skills.find((skill) => skill.label === 'Numpy')!,
  //     skills.find((skill) => skill.label === 'Pandas')!,
  //   ],
  //   description:
  //   {
  //     fr:
  //     "Cette simulation illustre le chiffrement des données sur Internet par la réimplémentation du protocole asymétrique RSA en Python.",
  //     en:
  //     "This simulation illustrates the encryption of data on the Internet by re-implementing the asymmetric RSA protocol in Python.",
  //   },
  //   specs:
  //   {
  //     fr: 
  //     "MiniRSA est une simulation du <strong>protocole RSA</strong> pour sécuriser les communications. Le code y est \
  //     structuré en classes Python (<strong>autorité de certification</strong>, <strong>interlocuteurs</strong>) pour clarifier les responsabilités. \
  //     J'ai développé les algorithmes de génération de clés, chiffrement/déchiffrement, vérification \
  //     d'empreintes et gestion de certificats, tout en appliquant des principes mathématiques comme <strong>la \
  //     conversion texte-binaire et l'exponentiation modulaire</strong>. Ce projet m'a permis d'approfondir ma \
  //     compréhension de la cryptographie asymétrique, et de <strong>l'application concrète de concepts théoriques \
  //     en sécurité informatique</strong>.",
  //     en:
  //     "MiniRSA is a simulation of the <strong>RSA protocol</strong> for securing communications. \
  //     The code is structured into Python classes (<strong>certificate authority</strong>, <strong>participants</strong>) \
  //     to clarify responsibilities. I developed the key generation, encryption/decryption, fingerprint \
  //     verification, and certificate management algorithms, while applying mathematical principles such \
  //     as <strong>text-binary conversion and modular exponentiation</strong>. This project allowed me to \
  //     deepen my understanding of asymmetric cryptography and the concrete application of theoretical \
  //     concepts in computer security."
  //   },
  //   notions:
  //   {
  //     fr: ["Mathématiques discrètes", "Reverse engineering", "Tests unitaires"],
  //     en: ["Discrete mathematics", "Reverse engineering", "Testing"],
  //   },
  //   tags:
  //   {
  //     fr: ["Maths", "Crypto", "PF", "Académique", "POO", "Programmation fonctionnelle"],
  //     en: ["Math", "Crypto", "FP", "Academic", "OOP", "Functional programming"],
  //   },
  //   img: [
  //   ],
  // },
  {
    title: 
    {
      fr: "Étude de EEW",
      en: "Study of EEW",
    },
    date: new Date(2025, 5),
    tools: [
      skills.find((skill) => skill.label === 'Python')!,
      skills.find((skill) => skill.label === 'Matplotlib')!,
      skills.find((skill) => skill.label === 'Latex')!,
    ],
    description:
    {
      fr:
      "Cette étude de cas explore les propriétés de dérivation sémantique via le modèle EEW selon le langage employé.",
      en:
      "This case study explores the properties of semantic derivation through the EEW model according to the language used."
    },
    specs:
    {
      fr: 
      "J'ai contribué à l'étude du modèle <strong>Evolutionary Ecology of Words</strong> (EEW), une expérience de <strong>vie artificielle</strong> \
      où <strong>des écosystèmes de mots</strong>, générés par un LLM, entrent en compétition pour dominer l'environnement. Mon rôle a \
      été de mener une étude linguistique analysant <strong>l'impact de la langue sur les dynamiques de \
      dérivation sémantique</strong>. J'ai mis en évidence un biais linguistique : la langue initiale influence \
      fortement la créativité du LLM, avec des comportements distincts selon les idiomes. En combinant \
      plusieurs langues dans une même expérience, j'ai démontré <strong>une émergence accrue de nouveauté</strong>. \
      Un résultat pertinent pour <strong>la recherche sur l'open-endedness</strong>, que j'ai eu la chance de présenter \
      lors de <strong>la conférence JSAI</strong> à Osaka. Ma participation s'inscrit dans le travail de recherche du <strong>Pr. Reiji Suzuki</strong>.",
      en:
      "I contributed to the study of the <strong>Evolutionary Ecology of Words</strong> (EEW) model, an experiment in <strong>artificial life</strong> \
      where <strong>word ecosystems</strong>, generated by an LLM, compete to dominate the environment. My role was \
      to conduct a linguistic study analyzing <strong>the impact of language on the dynamics of semantic derivation</strong>. \
      I highlighted a linguistic bias: the initial language strongly influences the creativity of the LLM, with distinct behaviors \
      depending on the idioms. By combining multiple languages in a single experiment, I demonstrated <strong>an increased emergence of novelty</strong>. \
      A relevant result for <strong>research on open-endedness</strong>, which I had the chance to present at <strong>the JSAI conference</strong> in Osaka. \
      My participation is part of the research work of <strong>Pr. Reiji Suzuki</strong>."
    },
    notions:
    {
      fr: ["Étude comportementale sur des LLM", "Analyse de données et interprétation", "Présentation de la recherche"],
      en: ["Behavioral study on LLMs", "Data analysis and interpretation", "Research presentation"],
    },
    tags:
    {
      fr: ["ALife", "Data", "Recherche", "IA", "Professionnel", "Sémantique", "Vie artificielle"],
      en: ["ALife", "Data", "Research", "AI", "Professional", "Semantic", "Artificial life"],
      0: ["LLM"]
    },
    img: [
      projectsImages.eew_basic_visuals,
      projectsImages.eew_algo,
      projectsImages.eew_lang_behaviors,
      projectsImages.eew_lang_bias,
    ],
    additionalRessources: [
      {
        content: 
        {
          fr: "Rapport de stage",
          en: "Internship report",
        },
        link: documents.eew_internship_report,
      },
      {
        content:
        {
          fr: "Rapport d'activité",
          en: "Activity report",
        },
        link: documents.eew_activity_report,
      }
    ]
  },
];

/** The messages displayed under the main title in the Hero section
 * (with the writting machine effect). */
export const subtitleMessages: Array<Message> = [
    {
      content:
      {
        fr: "Développeur et créateur.",
        en: "Developer and creator.",
      }
    },
    {
      content:
      {
        fr: "De nouveaux projets arrivent !",
        en: "New projects are coming!",
      }
    },
    {
      content: 
      {
        fr: "Bienvenue sur mon portfolio.",
        en: "Welcome to my portfolio.",
      }
    },
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

/**
 * EMPTY RETEX TEMPLATE:
 * ---------------------
 * 
  {
    title: 
    {
      fr: "",
      en: "",
    },
    date: new Date(2025, 6),
    tools: [
    ],
    description:
    {
      fr:
      "",
    },
    specs:
    {
      fr: 
      "",
    },
    notions:
    {
      fr: [],
    },
    tags:
    {
      en: [],
    },
    img: [
    ],
    additionalRessources: [
      {
        content: 
        {
          fr: "",
          en: "",
        },
        link: "",
      },
    ]
  },
 */