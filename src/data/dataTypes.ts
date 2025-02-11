
/**
 * Data structure to list the available skill categories
 */
export enum SkillCategorie {
  LANGUAGE = "Language",
  TOOL = "Tool",
  LIBRARY = "Library",
}

/**
 * Data structure to list the available skill subcategories
 */
export enum SkillSubcategorie {
  WEB = "Web",
  DATABASE = "Database",
  SOFTWARE = "Software",
  TEXT = "Text",
  BIGDATA = "BigData",
}

/**
 * Data structure to list the available sort options
 */
export enum SortOption {
  ALL = "All",
  WEB = "Web",
  DATABASE = "Database",
  SOFTWARE = "Software",
  ALGORITHMIC = "Algorithmic",
  NEWEST = "Newest",
  OLDEST = "Oldest",
  PC = "ProgConcurrente",
  PE = "ProgEvénementielle",
}

export enum Errors {
  NOT_FOUND = 404,
}

/**
 * Data structure to represent a retex
 * @param relatedProject - project to which the retex is related
 * @param specs - specifications of the project
 * @param notions - notions used in the project
 * @param tools - list of tools used in the project
 * @param img - list of image urls to display in the retex 
 */
export interface Retex {
  relatedProject: string;
  specs: {[lang: string]: string};
  notions: {[lang: string]: string[]};
  tools: Skill[];
  img: string[];
}

/**
 * Data strcuture to represent a project
 * @param title - title of the project
 * @param content - description of the project
 * @param tags - list of tags to categorize the project
 * @param img - image url to display in the project card
 */
export interface Project {
  title: string;
  content: {[lang: string]: string};
  tags: {[lang: string]: string[]};
  img?: string;
  date: Date;
  retex?: Retex;
}

/**
 * Data structure to represent a navigation link
 * @param label - text to display in the link
 * @param link - url to redirect to
 */
export interface NavLink {
  label: {[lang: string]: string};
  link: string;
}

/**
 * Data structure to represent a country
 * @param symbol - abreaviation of the country
 * @param label - name of the country
*/
export interface Country {
  symbol: string;
  label: string;
}

/**
 * Data structure to represent a country phone code
 * @param symbol - abreaviation of the country
 * @param code - phone code of the country
 */
export interface PhoneCode {
  country: Country;
  code: string;
}

/**
 * Data structure to represent a social media share link
 * @param label - name of the social media
 * @param icon - icon to display
 * @param link - url to share
 * @param at - username or account name on the social media
 */
export interface SocialMedia {
  label: string;
  icon: string;
  link: string;
  at: string;
}

/**
 * Data structure to represent the message displayed under the main title
 * @param content - message to display
 */
export interface SubtitleMessage {
  content: {[lang: string]: string};
}

/**
 * Data structure to represent the biography to display in the about section
 * @param title - title of the biography text
 * @param content - biography text
 */
export interface Biography {
  title: {[lang: string]: string};
  content: {[lang: string]: string};
  active: boolean;
}

/**
 * Data structure to represent a skill
 * @param label - name of the skill
 * @param icon - icon to display
 * @param category - category of the skill (Language, Tool, Library)
 * @param subcategory - subcategory of the skill
 * @param framework - if the skill is a framework, the name of the original techno, else null
 * @param link - link to the documentation of the skill
 * @param weight - weight of the skill in the graph, matching affinity 
 */
export interface Skill {
  label: string;
  icon: string;
  category: SkillCategorie;
  subcategory?: SkillSubcategorie;
  framework?: string;
  link?: string;
  weight?: number;
}

/**
 * Data structure to represent a credit mention message
 * @param label - text to display
 * @param contentRef - reference to the content that is being credited
 * @param author - author of the content, null if the author is not known
 * @param link - link to the content
 */
export interface CreditMention {
  label: {[lang: string]: string};
  contentRef: string | string[];
  author?: string;
  link: string;
}

/**
 * Data structure to represent a shared link in the footer
 * @param label - name of the link
 * @param link - url to redirect to
 */
export interface sharedLink {
  label: {[lang: string]: string};
  link: string;
}

/**
 * Data structure to represent a copyrigth message
 * @param label - message to display
 * @param link - link to the copyrigth policy
 */
export interface Copyrigth {
  label: string;
  link?: string;
}

/**
 * Data structure to represent an email API used by a form
 * @param apiName - name of the email API
 * @param serviceId - service id of the email API
 * @param templateId - template id of the email API
 * @param publicKey - public key of the email API
 */
export interface EmailAPI {
  apiName: string;
  serviceId: string;
  templateId: string;
  publicKey: string;
}

/**
 * Data structure to represent a form pattern
 * @param title - title of the form
 * @param contentMinLength - minimum length of the message field
 * @param button - properties of the submit button
 * @param mendatoryFields - list of the names for the mendatory fields
 */
export interface ContactForm {
  title: {[lang: string]: string};
  messageMinLength?: number;
  fields: {[field: string]: {[lang: string]: string}};
  mendatoryFields: string[];
  alert: {[context: string]: {[lang: string]: string}};
  emailAPI: EmailAPI; 
}

/**
 * Data structure to represent a navbar pattern
 * @param route - route for which the navbar is displayed
 * @param links - list of the links to display in the navbar
 */
export interface NavbarPattern {
  route: string | string[];
  links: NavLink[];
}

/**
 * Data structure to represent the author, to display in the hero section
 * @param firstName - first name of the author
 * @param lastName - last name of the author
 */
export interface Author {
  firstName: string;
  lastName: string;
}

/**
 * Data structure to represent an error message
 * @param error - the caught error
 * @param content - message to display
 */
export interface ErrorMessage {
  error: Errors;
  content: {[lang: string]: string};
}

/**
 * Data structure to represent a flash message
 * @param for - the context in which the message is displayed
 * @param message - message to display
 * @param type - type of the message (error, info, ok)
 */
export interface FlashMessage {
  context: string;
  message: {[lang: string]: string};
  type: "error" | "info" | "ok";
}