

/** The skill categories supported by the app. */
export enum AvailableSkillCategories {
  LANGUAGE = "LANGUAGE",
  TOOL = "TOOL",
  LIBRARY = "LIBRARY",
}
export interface SkillCategorie extends Omit<Message, "context"> {
  context: AvailableSkillCategories;
}

/** The skill subcategories supported by the app. */
export enum AvailableSkillSubcategories {
  WEB = "WEB",
  SOFTWARE = "SOFTWARE",
  DATABASE = "DATABASE",
  BIGDATA = "BIGDATA",
  FORMATING = "FORMATING",
}
export interface SkillSubcategorie extends Omit<Message, "context"> {
  context: AvailableSkillSubcategories;
  parentCategory: AvailableSkillCategories;
}

/** The projects sort options supported by the app. */
export enum AvailableSortOptions {
  ALL = "ALL",
  ALGORITHMIC = "ALGORITHMIC",
  NEWEST = "NEWEST",
  OLDEST = "OLDEST",
  CP = "CP",
  EP = "EP",
  OOP = "OOP",
  ACADEMIC = "ACADEMIC",
  PERSONNAL = "PERSONNAL",
  PROFESSIONAL = "PROFESSIONAL",
}
export interface SortOption extends Omit<Message, "context"> {
  context: AvailableSortOptions;
  abreviation?: Message;
}

/**
 * Available information for a graphic asset.
 * @param label - name of the graphic asset
 * @param content - content of the graphic asset, with light and dark versions
 * @param alt - alternative text for the graphic asset
 */
export interface GraphicAsset {
  label: string;
  content: {[theme: string]: string};
  alt: string;
}

export enum Errors {
  NOT_FOUND = 404,
}

/**
 * Structure of a retex and available information. 
 * A retex is the detailed review of a project overview.
 * @param specs - specifications of the project
 * @param notions - notions used in the project
 * @param tools - list of tools used in the project
 */
export interface Retex extends Project {
  specs: {[lang: string]: string};
  notions: {[lang: string]: string[]};
  tools: Skill[];
  additionalRessources?: Hyperlink[];
}

/**
 * Structure of a project overview and available information. 
 * @param title - title of the project
 * @param content - short description of the project
 * @param tags - list of tags related to the project
 * @param img - url of the main image of the project and images for the retex
 * @param date - date of the project
 */
export interface Project {
  title: string;
  description: {[lang: string]: string};
  tags: {[lang: string]: string[]};
  img?: string[];
  date: Date;
}

/**
 * Data structure to represent a country
 * @param symbol - abreaviation of the country
 * @param label - name of the country
 * @param phoneCode - phone code of the country
*/
export interface Country {
  symbol: string;
  label: string;
  phoneCode: string;
}

/**
 * Available information for a social media link.
 * @param label - name of the social media
 * @param icon - icon to display
 * @param link - url to share
 * @param at - username or account name on the social media
 */
export interface SocialMedia {
  label: string;
  icon: GraphicAsset;
  link: string;
  at: string;
}

/**
 * Available properties for a biography text.
 * @param title - title of the biography text
 * @param content - biography text
 * @param active - true if the biography is displayed, else false
 */
export interface Biography {
  title: {[lang: string]: string};
  content: {[lang: string]: string};
  active: boolean;
}

/**
 * Available properties for a displayed skill.
 * @param label - name of the skill
 * @param icon - icon to display
 * @param category - category of the skill
 * @param subcategory - optional subcategory of the skill
 * @param framework - if the skill is a framework, the name of the original technology
 * @param link - link to the documentation of the skill
 * @param weight - a mark reflecting the affinity with the skill (from 0 to 10)
 */
export interface Skill {
  label: string;
  icon: GraphicAsset;
  category: SkillCategorie;
  subcategory?: SkillSubcategorie;
  framework?: string;
  link?: string;
  weight?: number;
}

/**
 * Pattern of a credit mention.
 * @param contentRef - name(s) of the credited content(s)
 * @param author - author of the content, if known
 */
export interface CreditMention extends Hyperlink{
  contentRef: GraphicAsset | GraphicAsset[];
  author?: Author;
}

/**
 * Available properties for a message with a hyperlink.
 * @param link - url to redirect to
 */
export interface Hyperlink extends Message {
  link: string;
}

/**
 * Represent the available information on the email API to use to send the 
 * contact form (on an EmailJS API basis).
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
 * Represent the structure of a contact form for the app.
 * @param title - title of the contact form
 * @param messageMinLength - minimum length of the message to be sent
 * @param fields - list of the fields contained in the form
 * @param mendatoryFields - among the present fields, the ones that are mendatory
 * @param alert - message(s) to display in case of error
 * @param emailAPI - email API to use to send the form
 * @param submitCooldown - cooldown time before the user can submit the form again
 * @param tentativeLimit - number of attempts before blocking the user
 * @param tentativeCooldown - cooldown time before the user can try again after being blocked
 */
export interface ContactForm {
  title: {[lang: string]: string};
  messageMinLength?: number;
  fields: {[field: string]: Message};
  mendatoryFields: string[];
  alert: Message[];
  emailAPI: EmailAPI; 
  submitCooldown: number; 
  tentativeLimit: number; 
  tentativeCooldown: number; 
}

/**
 * Information on a navbar pattern
 * @param route - route for which the navbar is displayed
 * @param links - list of the links to display in the navbar
 */
export interface NavbarPattern {
  route: string | string[];
  links: Hyperlink[];
}

/**
 * Displayable information about an author
 * @param firstName - first name of the author
 * @param lastName - last name of the author
 * @param mail - email of the author
 * @param phone - phone number of the author
 * @param location - location of the author
 */
export interface Author {
  firstName: string;
  lastName: string;
  mail?: string;
  phone?: string
  location?: string;
}

/** 
 * Stored message pattern 
 * @param context - optional context indication for the message
 * @param content - message content in different languages
*/
export interface Message {
  context?: string;
  content: {[lang: string]: string};
}

/**
 * Displayable information about an error.
 * @param error - the caught error 
 */
export interface ErrorMessage extends Message {
  error: Errors;
}

/**
 * Displayable information about a flash message in a particular context.
 * @param context - context of the message
 * @param type - type of the message (error, info, ok)
 */
export interface FlashMessage extends Message {
  context: string;
  type: "error" | "info" | "ok";
}