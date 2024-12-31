const styles = {
  /* Maximum width for extra large screens; elements don't extend themselves over 1280px.*/   
  boxWidth: "xxl:max-w-[2400px]",

  heading2: " \
    font-primary-bold \
    xxl:text-[230%]  \
    leading-[50px]  \
    w-full  \
    tracking-wider  \
    mb-8",
  
  line: " \
    bg-[--light-color-tertiary] \
    w-2/3 \
    h-[3.5px] \
    border-[0px]",
  
  subtitle: " \
    font-primary-regular  \
    color-primary  \
    xxl:text-[200%]  \
    leading-[40px]  \
    tracking-wide", 
  
  paragraph: " \
    font-primary-regular \
    color-primary  \
    xxl:text-[180%]  \
    leading-[40px]  \
    tracking-wide", 

  /* Elements are centered => |A B C| */
  contentCenter: "justify-center items-center",
  flexCol: "flex flex-col",
  flexRow: "flex flex-row",
  /* Elements are aligned from left to right => |A B C  | */
  contentStartAll: "justify-start items-start",
  contentStartX: "justify-start items-center",
  contentStartY: "justify-center items-start",
  contentEndAll: "justify-end items-end",
  contentEndX: "justify-end items-center",
  contentEndY: "justify-center items-end",

  sizeFull: "w-full h-full",
  sizeScreen: "h-screen w-auto",
  sizeFit: "w-fit h-fit",

  /* From medium screen size, elements are displayed in row and not column. */
  section: `pt-[12%]`,
};
  
export default styles;