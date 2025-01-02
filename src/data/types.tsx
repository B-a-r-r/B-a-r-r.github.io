export interface Project {
  id: number;
  title: string;
  content: string;
  tags: string[];
}
  
export interface NavLink {
  id: number;
  label: string;
  link: string;
}

export interface Language {
  id: number;
  symbol: string;
  label: string;
}

export interface SocialMedia {
  id: string;
  icon: string;
  link: string;
}

export interface SubtitleMessage {
  id: number;
  content: string;
}

export interface Biography {
  id: number;
  title: string;
  content: string;
}

export interface Skill {
  id: number;
  label: string;
  icon: string;
  category: string;
  subcategory: string | null;
  framework: string | null;
}

export interface CountryPhoneCode {
  id: number;
  symbol: string;
  code: string;
}

export interface CreditMention {
  id: number;
  contentRef: string;
  label: string;
  link: string;
}

export interface Copyrigth {
  id: number;
  label: string;
  link: string;
}

export interface Form {
  id: number;
  title: string;
  fields: string[];
  button: string;
  mendatoryFields: string[];
}