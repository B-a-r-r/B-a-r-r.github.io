import { GraphicAsset } from "../dataTypes";

import portrait from "./about_portrait.jpg";
import sysiphus_light from "./sysiphus_rotated_light.png";
import sysiphus_dark from "./sysiphus_rotated_dark.webp";
import hephaistos_light from "./hephaistos_nobg_light.png";
import hephaistos_dark from "./hephaistos_nobg_dark.webp";

const sysiphus: GraphicAsset = {
  label: "sysiphus",
  content: {
    'light': sysiphus_light,
    'dark': sysiphus_dark,
  },
  alt: "Sysiphus Sketch",
};

const hephaistos: GraphicAsset = {
  label: "hephaistos",
  content: {
    'light': hephaistos_light,
    'dark': hephaistos_dark,
  },
  alt: "Hephaistos Sketch",
};

export const coreImages = {

  portrait,
  sysiphus,
  hephaistos

};

