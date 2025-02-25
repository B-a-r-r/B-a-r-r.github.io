import { getRandomTailwindColor } from "./utils";

const styles = {

  page: "w-full h-full color-scheme-primary ",
  sectionContainer: `w-screen md:h-screen px-[12%] color-scheme-primary `,

  heading2: " \
    font-primary-bold \
    xl:text-4xl lg:text-2xl  \
    xl:leading-10 leading-8 \
    w-full  \
    tracking-wider  \
    xl:mb-9 mb-8",
  
  line: " \
    block \
    bg-[--color-tertiary] \
    w-2/3 \
    h-[3px] \
    border-none ",
  
  subtitle: " \
    font-primary-regular  \
    color-scheme-primary  \
    xxl:text-5xl  \
    leading-[40px]  \
    tracking-wide", 
  
  paragraph: " \
    font-primary-regular \
    color-scheme-primary  \
    xl:text-2xl lg:text-lg text-xs \
    leading-[145%]  \
    tracking-wide \
    text-wrap  \
    whitespace-pre-line",

  flexCol: "flex flex-col",
  flexRow: "flex flex-row",
  flexWrap: "flex flex-wrap",

  contentCenter: "justify-center items-center",
  contentStartAll: "justify-start items-start",
  contentStartX: "justify-start items-center",
  contentStartY: "justify-center items-start",
  contentEndAll: "justify-end items-end",
  contentEndX: "justify-end items-center",
  contentEndY: "justify-center items-end",

  sizeFull: "w-full h-full",
  sizeScreen: "h-screen w-auto",
  sizeFit: "w-fit h-fit",
  sizeAuto: "w-auto h-auto",

  debugBorders: "border-2 border-".concat(getRandomTailwindColor()),
};
  
export default styles;