import { GraphicAsset } from "../dataTypes";

import burger_menu_light from "./burger_menu_light.svg";
import burger_menu_dark from "./burger_menu_dark.svg";
import close_menu_light from "./close_menu_light.svg";
import close_menu_dark from "./close_menu_dark.svg";
import arrow_up_light from "./arrow_up_light.svg";
import arrow_up_dark from "./arrow_up_dark.svg";
import chevron_light from "./chevron_icon_light.svg";
import chevron_dark from "./chevron_icon_dark.svg";
import double_chevrons_light from "./double_chevrons_icon_light.svg";
import double_chevrons_dark from "./double_chevrons_icon_dark.svg";

const burger_menu_icon: GraphicAsset = {
    label: "burger_menu_icon",
    content: {
        'light': burger_menu_light,
        'dark': burger_menu_dark,
    },
    alt: "Burger Menu Icon",
};

const close_menu_icon: GraphicAsset = {
    label: "close_menu_icon",
    content: {
        'light': close_menu_light,
        'dark': close_menu_dark,
    },
    alt: "Close Menu Icon",
};

const chevron_icon: GraphicAsset = {
    label: "chevron_icon",
    content: {
        'light': chevron_light,
        'dark': chevron_dark,
    },
    alt: "Chevron Icon",
};

const arrow_up_icon: GraphicAsset = {
    label: "arrow_up_icon",
    content: {
        'light': arrow_up_light,
        'dark': arrow_up_dark,
    },
    alt: "Arrow Up Icon",
};

const double_chevrons_icon: GraphicAsset = {
    label: "double_chevrons_icon",
    content: {
        'light': double_chevrons_light,
        'dark': double_chevrons_dark,
    },
    alt: "Double Chevrons Icon",
};

export const menuIcons = {
  
  burger_menu_icon,
  close_menu_icon,
  chevron_icon,
  arrow_up_icon,
  double_chevrons_icon,

};