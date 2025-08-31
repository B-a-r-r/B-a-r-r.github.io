import { GraphicAsset } from "../dataTypes";

import linkedin_light from './linkedin_icon_light.svg';
import linkedin_dark from './linkedin_icon_dark.svg';
import github_light from './github_icon_light.svg';
import github_dark from './github_icon_dark.svg';
import mail_light from './mail_icon_light.svg';
import mail_dark from './mail_icon_dark.svg';

const linkedin_icon: GraphicAsset = {
  label: "linkedin_icon",
  content: {
    'light': linkedin_light,
    'dark': linkedin_dark,
  },
  alt: "LinkedIn Icon",
};

const github_icon: GraphicAsset = {
  label: "github_icon",
  content: {
    'light': github_light,
    'dark': github_dark,
  },
  alt: "GitHub Icon",
};

const mail_icon: GraphicAsset = {
  label: "mail_icon",
  content: {
    'light': mail_light,
    'dark': mail_dark,
  },
  alt: "Mail Icon",
};

export const socialsIcons = {

  linkedin_icon,
  github_icon,
  mail_icon,

};