import { socialsIcons, documents, coreImages, menuIcons } from "../assets";
import { 
  Language, 
  SocialMedia, 
  Copyrigth, 
  PhoneCode, 
  CreditMention, 
  Form, 
  NavbarPattern, 
  Author,
  Country,
  ErrorMessage,
  Errors,
  EmailAPI,
} from "./dataTypes";


console.log('hello from constants.tsx');

export const cardTitleMaxLength = 30;
export const cardContentMaxLength = 150;

export const previewTitleMaxLength = 50;
export const previewContentMaxLength = 500;

/**
 * Store all the navigation links for each navbar patterns
 */
export const navLinks: Array<NavbarPattern> = [
  {
    id: 1,
    route: '',
    links: [
      {
        id: 1,
        label: "About",
        link: "/#about",
      },
      {
        id: 2,
        label: "Projects",
        link: "/projects",
      },
      {
        id: 3,
        label: "Contact",
        link: "/#contact",
      }, 
      {
        id: 4,
        label: "CV",
        link: documents.cv,
      },
    ],
  },
  {
    id: 2,
    route: ['projects', 'project'],
    links: [
      {
        id: 1,
        label: "Home",
        link: "/",
      },
      {
        id: 2,
        label: "Projects",
        link: "/projects",
      },
      {
        id: 3,
        label: "Contact",
        link: "/#contact",
      }, 
      {
        id: 4,
        label: "CV",
        link: documents.cv,
      },
    ],
  },
];

/**
 * Store all the countries related to an available language or phone code
 */
export const countries: Array<Country> = [
  {
    id: 1,
    symbol: "fr",
    label: "France",
  },
  {
    id: 2,
    symbol: "en",
    label: "United States",
  },
  {
    id: 3,
    symbol: "gb",
    label: "United Kingdom",
  },
  {
    id: 4,
    symbol: "de",
    label: "Germany",
  },
  {
    id: 5,
    symbol: "es",
    label: "Spain",
  },
  {
    id: 6,
    symbol: "it",
    label: "Italy",
  },
  {
    id: 7,
    symbol: "be",
    label: "Belgium",
  },
  {
    id: 8,
    symbol: "nl",
    label: "Netherlands",
  },
  {
    id: 9,
    symbol: "ch",
    label: "Switzerland",
  },
  {
    id: 10,
    symbol: "dk",
    label: "Denmark",
  },
  {
    id: 11,
    symbol: "ru",
    label: "Russia",
  },
  {
    id: 12,
    symbol: "jp",
    label: "Japan",
  }
];

/**
 * Store all the languages available for the app
 */
export const languages: Array<Language> = [
  {
    id: 1,
    country: countries.filter((country) => country.label === "France")[0],
  },
  {
    id: 2,
    country: countries.filter((country) => country.label === "United States")[0],
  }
];

/**
 * Store all the social media links available for the app
 */
export const socialMedia: Array<SocialMedia> = [
  {
    id: 1,
    label: "mail",
    icon: socialsIcons.mail_icon,
    link: "mailto:clementbarriere64@gmail.com",
    at: "clementbarriere64@gmail.com",
  },
  {
    id: 2,
    label: "github",
    icon: socialsIcons.github_icon,
    link: "https://github.com/B-a-r-r",
    at: "@B-a-r-r",
  },
  {
    id: 3,
    label: "linkedin",
    icon: socialsIcons.linkedin_icon,
    link: "https://www.linkedin.com/in/clement-barriere",
    at: "@clement-barriere",
  },
];

/**
 * Store all the phone code available for the app
 */
export const countryPhoneCodes: Array<PhoneCode> = [
    {
        id: 1,
        country: countries.filter((country) => country.label === "France")[0],
        code: "+33",
    },
    {
        id: 2,
        country: countries.filter((country) => country.label === "United States")[0],
        code: "+1",
    },
    {
        id: 3,
        country: countries.filter((country) => country.label === "United Kingdom")[0],
        code: "+44",
    },
    {
        id: 4,
        country: countries.filter((country) => country.label === "Germany")[0],
        code: "+49",
    },
    {
        id: 5,
        country: countries.filter((country) => country.label === "Spain")[0],
        code: "+34",
    },
    {
        id: 6,
        country: countries.filter((country) => country.label === "Italy")[0],
        code: "+39",
    },
    {
        id: 7,
        country: countries.filter((country) => country.label === "Belgium")[0],
        code: "+32",
    },
    {
        id: 8,
        country: countries.filter((country) => country.label === "Netherlands")[0],
        code: "+31",
    },
    {
        id: 9,
        country: countries.filter((country) => country.label === "Switzerland")[0],
        code: "+41",
    },
    {
        id: 10,
        country: countries.filter((country) => country.label === "Denmark")[0],
        code: "+45",
    },
    {
        id: 11,
        country: countries.filter((country) => country.label === "Russia")[0],
        code: "+7",
    },
    {
        id: 12,
        country: countries.filter((country) => country.label === "Japan")[0],
        code: "+81",
    },
];

/**
 * Store all the credits mentions for the assets used in the app
 */
export const creditsMentions: Array<CreditMention> = [
  {
    id: 1,
    label: "Original Sisyphus sketch",
    contentRef: coreImages.sysiphus,
    author: null,
    link: "https://www.google.com/search/about-this-image?img=H4sIAAAAAAAAAFMy5NLnePr3nIoAkwSjkoq5hZlJomlysm6KSWqyrolZkqWuhbllmm6SiamRpUmymZFxUgoAWMCsSTMAAAA&sa=X&ved=2ahUKEwjA-qCj4dqKAxUoVaQEHYJXNngQs6gLegQIDBAB",
  },
  {
    id: 2,
    label: "Original Hephaistos sketch",
    contentRef: coreImages.hephaistos,
    author: null,
    link: "https://fr.pinterest.com/pin/1080582504340139757/",
  },
  {
    id: 3,
    label: "Menu and social medias icons",
    contentRef: [
      menuIcons.arrow_up, 
      menuIcons.burger_menu_icon, 
      menuIcons.chevron_icon, 
      menuIcons.close_menu_icon, 
      menuIcons.double_chevrons_icon,
      socialsIcons.github_icon, 
      socialsIcons.linkedin_icon, 
      socialsIcons.mail_icon
    ],
    author: null,
    link: "https://boxicons.com/",
  },

];

/**
 * Store the copyrigth mention for the app
 */
export const copyrigthText: Copyrigth = {
  label: `clemnarr.dev © 2025,<br/>by Clément Barrière,<br/>under CC BY 4.0`,
  link: "https://creativecommons.org/licenses/by/4.0/",
};

const emailAPI: EmailAPI = {
  id: 1,
  apiName: "emailjs",
  serviceId: "clembarr.dev_1234",
  templateId: "clembarr.dev_contact",
  publicKey: "XhGuv8Ll1Znl6NEuG",
};

/**
 * Store all the form patterns available for the app
 */
export const formStructures: Array<Form> = [
  {
    id: "contact",
    title: "Feel free<br/>to contact me",
    messageMinLength: 80,
    fields: [ "firstname", "lastname", "email", "phone", "message" ],
    mendatoryFields: [ "name", "email", "message" ],
    emailAPI: emailAPI,
  }
];

/**
 * Store information on the author of the app
 */ 
export const author: Author = {
  firstName: "Clément",
  lastName: "Barrière",
};

/**
 * Store all the error messages for the app
 */
export const errorMessages: Array<ErrorMessage> = [
  {
    error: Errors.NOT_FOUND,
    content: "The page you are trying to access does not exist.<br/>",
  }
];