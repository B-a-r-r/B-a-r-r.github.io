
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
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
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
}

export enum Errors {
  NOT_FOUND = 404,
}

/**
 * Data structure to represent a retex
 * @param id - unique identifier
 * @param projet - project to which the retex is related
 * @param specs - specifications of the project
 * @param notions - notions used in the project
 * @param tools - list of tools used in the project
 * @param img - list of image urls to display in the retex 
 */
export interface Retex {
  id: number;
  relatedProject: string | null;
  specs: string;
  notions: string;
  tools: Skill[];
  img: string[];
}

/**
 * Data strcuture to represent a project
 * @param id - unique identifier*
 * @param title - title of the project
 * @param content - description of the project
 * @param tags - list of tags to categorize the project
 * @param img - image url to display in the project card
 */
export interface Project {
  id: number;
  title: string;
  content: string;
  tags: string[];
  img: string | null;
  date: Date;
  retex: Retex | null;
}

/**
 * Data structure to represent a navigation link
 * @param id - unique identifier
 * @param label - text to display in the link
 * @param link - url to redirect to
 */
export interface NavLink {
  id: number;
  label: string;
  link: string;
}

/**
 * Data structure to represent a country
 * @param id - unique identifier
 * @param symbol - abreaviation of the country
 * @param label - name of the country
*/
export interface Country {
  id: number;
  symbol: string;
  label: string;
}

/**
 * Data structure to represent a language
 * @param id - unique identifier
 * @param country - country where the language is spoken, null if the language is not assigned to a country
 * @param label - name of the language, null if the language is already assigned to a country
 */
export interface Language {
  id: number;
  country: Country;
}

/**
 * Data structure to represent a country phone code
 * @param id - unique identifier
 * @param symbol - abreaviation of the country
 * @param code - phone code of the country
 */
export interface PhoneCode {
  id: number;
  country: Country;
  code: string;
}

/**
 * Data structure to represent a social media share link
 * @param id - unique identifier
 * @param label - name of the social media
 * @param icon - icon to display
 * @param link - url to share
 * @param at - username or account name on the social media
 */
export interface SocialMedia {
  id: number;
  label: string;
  icon: string;
  link: string;
  at: string;
}

/**
 * Data structure to represent the message displayed under the main title
 * @param id - unique identifier
 * @param content - message to display
 */
export interface SubtitleMessage {
  id: number;
  content: string;
}

/**
 * Data structure to represent the biography to display in the about section
 * @param id - unique identifier
 * @param title - title of the biography text
 * @param content - biography text
 */
export interface Biography {
  id: number;
  title: string;
  content: string;
}

/**
 * Data structure to represent a skill
 * @param id - unique identifier
 * @param label - name of the skill
 * @param icon - icon to display
 * @param category - category of the skill (Language, Tool, Library)
 * @param subcategory - subcategory of the skill
 * @param framework - if the skill is a framework, the name of the original techno, else null
 */
export interface Skill {
  id: number;
  label: string;
  icon: string;
  category: SkillCategorie;
  subcategory: SkillSubcategorie | null;
  framework: Skill | null;
}

/**
 * Data structure to represent a credit mention message
 * @param id - unique identifier
 * @param label - text to display
 * @param contentRef - reference to the content that is being credited
 * @param author - author of the content, null if the author is not known
 * @param link - link to the content
 */
export interface CreditMention {
  id: number;
  label: string | null;
  contentRef: string | string[];
  author: string | null;
  link: string | null;
}

export interface sharedLink {
  id: number;
  label: string;
  link: string;
}

/**
 * Data structure to represent a copyrigth message
 * @param label - message to display
 * @param link - link to the copyrigth policy
 */
export interface Copyrigth {
  label: string;
  link: string;
}

/**
 * Data structure to represent an email API used by a form
 * @param id - unique identifier
 * @param apiName - name of the email API
 * @param serviceId - service id of the email API
 * @param templateId - template id of the email API
 * @param publicKey - public key of the email API
 */
export interface EmailAPI {
  id: number;
  apiName: string;
  serviceId: string;
  templateId: string;
  publicKey: string;
}

/**
 * Data structure to represent a form pattern
 * @param id - unique identifier
 * @param title - title of the form
 * @param contentMinLength - minimum length of the message field
 * @param button - properties of the submit button
 * @param mendatoryFields - list of the names for the mendatory fields
 */
export interface Form {
  id: number | string;
  title: string;
  messageMinLength: number;
  fields: string[];
  mendatoryFields: string[];
  emailAPI: EmailAPI; 
}

/**
 * Data structure to represent a navbar pattern
 * @param id - unique identifier
 * @param route - route for which the navbar is displayed
 * @param links - list of the links to display in the navbar
 */
export interface NavbarPattern {
  id: number;
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
  content: string;
}