import { getRandomTailwindColor } from "./utils";

const styles = {

  page: "w-full h-full text-[--color-quaternary] bg-transparent",
  sectionContainer: `w-screen md:h-screen px-[12%] text-[--color-quaternary] bg-transparent`,

  heading2: " \
    font-primary-bold \
    2xl:text-4xl xl:text-3xl lg:text-2xl  \
    xl:leading-10 base:leading-8 \
    w-full  \
    tracking-wider  \
    xl:mb-9 base:mb-8",
  
  line: " \
    block \
    bg-[--color-tertiary] \
    w-2/3 \
    h-[3px] \
    border-none ",
  
  subtitle: " \
    font-primary-regular  \
    xxl:text-5xl  \
    leading-[40px]  \
    tracking-wide", 
  
  paragraph: " \
    font-primary-regular \
    2xl:text-2xl xl:text-xl lg:text-lg base:text-xs \
    leading-[145%]  \
    tracking-wide \
    text-wrap  \
    whitespace-pre-line",

  hyperlink: " \
    hover:text-[--color-tertiary] \
    transition-all \
    duration-200 \
    ease-in-out",

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