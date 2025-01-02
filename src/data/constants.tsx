import { socialsIcons } from "../assets";
import { NavLink, Language, SocialMedia, Copyrigth, CountryPhoneCode, CreditMention, Form } from "./types";

export const navLinks: Array<NavLink> = [
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