import { GraphicAsset } from "../dataTypes";

import burger_menu from "./burger_menu.svg";
import close_menu from "./close_menu.svg";
import arrow_up from "./arrow_up.svg";
import chevron from "./chevron_icon.svg";
import double_chevrons from "./double_chevrons_icon.svg";

const burger_menu_icon: GraphicAsset = {
    label: "burger_menu_icon",
    content: {
        'light': burger_menu,
        'dark': burger_menu,
    },
    alt: "Burger Menu Icon",
};

const close_menu_icon: GraphicAsset = {
    label: "close_menu_icon",
    content: {
        'light': close_menu,
        'dark': close_menu,
    },
    alt: "Close Menu Icon",
};

const chevron_icon: GraphicAsset = {
    label: "chevron_icon",
    content: {
        'light': chevron,
        'dark': chevron,
    },
    alt: "Chevron Icon",
};

const arrow_up_icon: GraphicAsset = {
    label: "arrow_up_icon",
    content: {
        'light': arrow_up,
        'dark': arrow_up,
    },
    alt: "Arrow Up Icon",
};

const double_chevrons_icon: GraphicAsset = {
    label: "double_chevrons_icon",
    content: {
        'light': double_chevrons,
        'dark': double_chevrons,
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