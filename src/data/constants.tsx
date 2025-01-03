import { socialsIcons } from "../assets";
import { skills } from "./contents";
import { Language, SocialMedia, Copyrigth, CountryPhoneCode, CreditMention, Form, ButtonProps, Skill, NavBarPattern, SortOption } from "./types";

export const navLinks: Array<NavBarPattern> = [
  {
    id: 1,
    route: '/',
    links: [
      {
        id: 1,
        label: "About",
        link: "#about",
      },
      {
        id: 2,
        label: "Projects",
        link: "projects",
      },
      {
        id: 3,
        label: "Contact",
        link: "#contact",
      }, 
      {
        id: 4,
        label: "CV",
        link: "cv.pdf",
      },
    ],
  },
  {
    id: 2,
    route: '/projects',
    links: [
      {
        id: 1,
        label: "Home",
        link: "/",
      },
      {
        id: 2,
        label: "Projects",
        link: "projects",
      },
      {
        id: 3,
        label: "Contact",
        link: "home#contact",
      }, 
      {
        id: 4,
        label: "CV",
        link: "cv.pdf",
      },
    ],
  },
];


export const languages: Array<Language> = [
  {
    id: 1,
    label: "english",
    symbol: "en",
  },
  {
    id: 2,
    label: "french",
    symbol: "fr",
  }
]

export const socialMedia: Array<SocialMedia> = [
  {
    id: "mail",
    icon: socialsIcons.mail_icon,
    link: "mailto:clement.barriere@etu.u-bordeaux.fr",
  },
  {
    id: "github",
    icon: socialsIcons.github_icon,
    link: "https://github.com/B-a-r-r",
  },
  {
    id: "linkedin",
    icon: socialsIcons.linkedin_icon,
    link: "https://www.linkedin.com/clement-barriere",
  },
];

export const countryPhoneCodes: Array<CountryPhoneCode> = [
    {
        id: 1,
        symbol: "fr",
        code: "+33",
    },
];

export const creditsMentions: Array<CreditMention> = [
    {
        id: 1,
        contentRef: "sysiphus",
        label: "Sysiphus, by Unknown",
        link: "https://icons8.com",
    },
];

export const copyrigthText: Array<Copyrigth> = [
    {
        id: 1,
        label: "© 2021 Clément Barrière",
        link: "",
    },
];

export const footerLinks: Array<object> = [
    navLinks,
    creditsMentions,
    copyrigthText,
];

export const formStructure: Array<Form> = [
  {
    id: 1,
    title: "Feel free<br/>to contact me",
    fields: [ "name", "email", "phone", "message" ],
    button: "Send",
    mendatoryFields: [ "name", "email", "message" ],
  },
];

export const skillsButtons: Array<ButtonProps> = [];

export const sortOptions: Array<SortOption> = [
  {
    id: 1,
    label: "All",
    value: "all",
  },
  {
    id: 2,
    label: "Web",
    value: "web",
  },
  {
    id: 5,
    label: "Database",
    value: "database",
  },
  {
    id: 6,
    label: "Software",
    value: "Software",
  },
  {
    id: 7,
    label: "Algorithmic",
    value: "algorithmic",
  },
];