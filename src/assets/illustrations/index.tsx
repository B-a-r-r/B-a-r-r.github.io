import { GraphicAsset } from "../dataTypes";

import portrait from "./about_portrait.jpg";
import hero_figure_light from "./hero_figure_light.webp";
import hero_figure_dark from "./hero_figure_dark.webp";
import slider_figure_light from "./slider_figure_light.webp";
import slider_figure_dark from "./slider_figure_dark.webp";
import placeholder_retex_image from "./placeholder_retex_image.webp";

const sysiphus: GraphicAsset = {
  label: "sysiphus",
  content: {
    'light': hero_figure_light,
    'dark': hero_figure_dark,
  },
  alt: "Sysiphus Sketch",
};

const hephaistos: GraphicAsset = {
  label: "hephaistos",
  content: {
    'light': slider_figure_light,
    'dark': slider_figure_dark,
  },
  alt: "Hephaistos Sketch",
};

export const coreImages = {

  portrait,
  sysiphus,
  hephaistos,
  placeholder_retex_image

};

