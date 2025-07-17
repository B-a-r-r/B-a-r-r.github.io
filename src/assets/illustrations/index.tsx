import { GraphicAsset } from "../dataTypes";

import portrait from "./about_portrait.jpg";
import sysiphus_light from "./sysiphus_rotated.svg";
import hephaistos_light from "./hephaistos_nobg.png";
import background_landscape_light from "./cloudy_sky_landscape.webp";
import background_landscape_dark from "./background_landscape_dark.jpg";

const sysiphus: GraphicAsset = {
  label: "sysiphus",
  content: {
    'light': sysiphus_light,
    'dark': sysiphus_light,
  },
  alt: "Sysiphus Sketch",
};

const hephaistos: GraphicAsset = {
  label: "hephaistos",
  content: {
    'light': hephaistos_light,
    'dark': hephaistos_light,
  },
  alt: "Hephaistos Sketch",
};

const background_landscape: GraphicAsset = {
  label: "background_landscape",
  content: {
    'light': background_landscape_light,
    'dark': background_landscape_dark,
  },
  alt: "Cloudy sky landscape",
};

export const coreImages = {

  portrait,
  sysiphus,
  hephaistos,
  background_landscape

};

