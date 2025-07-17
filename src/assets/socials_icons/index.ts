import { GraphicAsset } from "../dataTypes";

import linkedin from "./linkedin_icon.svg";
import github from "./github_icon.svg";
import mail from "./mail_icon.svg";

const linkedin_icon: GraphicAsset = {
  label: "linkedin_icon",
  content: {
    'light': linkedin,
    'dark': linkedin,
  },
  alt: "LinkedIn Icon",
};

const github_icon: GraphicAsset = {
  label: "github_icon",
  content: {
    'light': github,
    'dark': github,
  },
  alt: "GitHub Icon",
};

const mail_icon: GraphicAsset = {
  label: "mail_icon",
  content: {
    'light': mail,
    'dark': mail,
  },
  alt: "Mail Icon",
};

export const socialsIcons = {

  linkedin_icon,
  github_icon,
  mail_icon,

};