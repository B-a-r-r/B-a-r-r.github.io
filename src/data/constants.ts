import { socialsIcons, documents, coreImages, menuIcons } from "../assets";
import { 
  SocialMedia, 
  Copyrigth, 
  PhoneCode, 
  CreditMention, 
  ContactForm,
  NavbarPattern, 
  Author,
  Country,
  ErrorMessage,
  Errors,
  EmailAPI,
  FlashMessage,
} from "./dataTypes";

console.log('hello from constants.tsx');

export const CARD_TEXT_MAX_LINES = 5;

/**
 * Store all the navigation links for each navbar patterns
 */
export const navLinks: Array<NavbarPattern> = [
  {
    route: '',
    links: [
      {
        label: 
        {
          fr: "À propos",
          0: "About",
        },
        link: "/#about",
      },
      {
        label: 
        {
          fr: "Projets",
          0: "Projects",
        },
        link: "/projects",
      },
      {
        label: 
        {
          0: "Contact",
        },
        link: "/#contact",
      }, 
      {
        label:
        {
          0: "CV",
        },
        link: documents.cv,
      },
    ],
  },
  {
    route: ['projects', 'project'],
    links: [
      {
        label:
        {
          fr: "Accueil",
          0: "Home",
        },
        link: "/",
      },
      {
        label:
        {
          fr: "Projets",
          0: "Projects",
        },
        link: "/projects",
      },
      {
        label: 
        {
          0: "Contact",
        },
        link: "/#contact",
      }, 
      {
        label: 
        {
          0: "CV",
        },
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
    symbol: "fr",
    label: "France",
  },
  {
    symbol: "en",
    label: "United States",
  },
  {
    symbol: "gb",
    label: "United Kingdom",
  },
  {
    symbol: "de",
    label: "Germany",
  },
  {
    symbol: "es",
    label: "Spain",
  },
  {
    symbol: "it",
    label: "Italy",
  },
  {
    symbol: "be",
    label: "Belgium",
  },
  {
    symbol: "nl",
    label: "Netherlands",
  },
  {
    symbol: "ch",
    label: "Switzerland",
  },
  {
    symbol: "dk",
    label: "Denmark",
  },
  {
    symbol: "ru",
    label: "Russia",
  },
  {
    symbol: "jp",
    label: "Japan",
  }
];

/**
 * Store all the social media links available for the app
 */
export const socialMedia: Array<SocialMedia> = [
  {
    label: "mail",
    icon: socialsIcons.mail_icon,
    link: "mailto:clementbarriere64@gmail.com",
    at: "clementbarriere64@gmail.com",
  },
  {
    label: "github",
    icon: socialsIcons.github_icon,
    link: "https://github.com/B-a-r-r",
    at: "@B-a-r-r",
  },
  {
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
        country: countries.find((country) => country.label === "France")!,
        code: "+33",
    },
    {
        country: countries.find((country) => country.label === "United States")!,
        code: "+1",
    },
    {
        country: countries.find((country) => country.label === "United Kingdom")!,
        code: "+44",
    },
    {
        country: countries.find((country) => country.label === "Germany")!,
        code: "+49",
    },
    {
        country: countries.find((country) => country.label === "Spain")!,
        code: "+34",
    },
    {
        country: countries.find((country) => country.label === "Italy")!,
        code: "+39",
    },
    {
        country: countries.find((country) => country.label === "Belgium")!,
        code: "+32",
    },
    {
        country: countries.find((country) => country.label === "Netherlands")!,
        code: "+31",
    },
    {
        country: countries.find((country) => country.label === "Switzerland")!,
        code: "+41",
    },
    {
        country: countries.find((country) => country.label === "Denmark")!,
        code: "+45",
    },
    {
        country: countries.find((country) => country.label === "Russia")!,
        code: "+7",
    },
    {
        country: countries.find((country) => country.label === "Japan")!,
        code: "+81",
    },
];

/**
 * Store all the credits mentions for the assets used in the app
 */
export const creditsMentions: Array<CreditMention> = [
  {
    label: 
    {
      fr: "Croquis de Sisyphe original",
      en: "Original Sisyphus sketch",
    },
    contentRef: coreImages.sysiphus,
    link: "https://www.google.com/search/about-this-image?img=H4sIAAAAAAAAAFMy5NLnePr3nIoAkwSjkoq5hZlJomlysm6KSWqyrolZkqWuhbllmm6SiamRpUmymZFxUgoAWMCsSTMAAAA&sa=X&ved=2ahUKEwjA-qCj4dqKAxUoVaQEHYJXNngQs6gLegQIDBAB",
  },
  {
    label: 
    {
      fr: "Croquis de Héphaïstos original",
      en: "Original Hephaistos sketch",
    },
    contentRef: coreImages.hephaistos,
    link: "https://fr.pinterest.com/pin/1080582504340139757/",
  },
  {
    label: 
    {
      fr: "Icones de menu et réseaux",
      en: "Menu and social medias icons",
    },
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
    link: "https://boxicons.com/",
  },

];

/**
 * Store the copyrigth mention for the app
 */
export const copyrigthText: Copyrigth = {
  label: `clembarr.dev © 2025,<br/>by Clément Barrière,<br/>under CC BY 4.0`,
  link: "https://creativecommons.org/licenses/by/4.0/",
};

const emailAPI: EmailAPI = {
  apiName: "emailjs",
  serviceId: "clembarr.dev_1234",
  templateId: "clembarr.dev_contact",
  publicKey: "XhGuv8Ll1Znl6NEuG",
};

/**
 * Store all the form patterns available for the app
 */
export const contactForm: ContactForm = {
  title: 
  {
    fr: "N'hésitez pas<br/>à me contacter",
    en: "Feel free<br/>to contact me",
  },
  messageMinLength: 80,
  fields: 
  {
    firstname: 
    {
      fr: "Prénom...",
      en: "Firstname...",
    },
    lastname: 
    {
      fr: "Nom...",
      en: "Lastname...",
    },
    email: 
    {
      fr: "Email...",
      en: "Email...",
    },
    phone: 
    {
      fr: "Téléphone...",
      en: "Phone...",
    },
    message: 
    {
      fr: "Votre message...",
      en: "Your message...",
    },
  },
  mendatoryFields: [ "name", "email", "message" ],
  alert: 
  {
    email: 
    {
      fr: "Veuillez entrer une adresse email valide.",
      en: "Please enter a valid email address.",
    },
    phone:
    {
      fr: "Veuillez entrer un numéro de téléphone valide.",
      en: "Please enter a valid phone number.",
    },
    message:
    {
      fr: "Votre message est trop court. Il doit contenir au moins 80 caractères.",
      en: "Your message is too short. It should contain at least 80 characters.",
    },
    cooldown:
    {
      fr: "Vous avez atteint le nombre maximum de requêtes autorisées. \
        Veuillez réessayer plus tard.",
      en: "You have reached the maximum number of requests allowed. \
        Please try again later.",
    },
    apiError:
    {
      fr: "Oups, quelque chose s'est mal passé... Veuillez réessayer plus tard.",
      en: "Oops, something went wrong... Please try again later.",
    },
    apiOK:
    {
      fr: "Votre message a bien été envoyé !",
      en: "Your message has been sent successfully!",
    },
    mendatory:
    {
      fr: "champs obligatoires.",
      en: "mendatory fields.",
    },
    submit:
    {
      fr: "Envoyer",
      en: "Submit",
    },
  },
  emailAPI: emailAPI,
};

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
    content: 
    {
      fr: "La page à laquelle vous tentez d'accéder n'existe pas.<br/>",
      en: "The page you are trying to access does not exist.<br/>",
    },
  }
];

/** 
 * Store the available languages for the app
 */
export const availableLanguages: Array<Country> = [
  countries.find((country) => country.label === "France")!,
  countries.find((country) => country.label === "United States")!,
];

/**
 * Store the flash messages 
 */
export const flashMessages: Array<FlashMessage> = [
  {
    context: "theme",
    message: 
    {
      fr: "Le theme sombre arrive bientôt..",
      en: "Dark mode comming soon..",
    },
    type: "info",
  },
];