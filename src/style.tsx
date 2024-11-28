const styles = {
  /* Maximum width for extra large screens; elements don't extend themselves over 1280px.*/   
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-primary-bold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-secondary-light color-primary text-[40px] leading-[40px] tracking-wide",

  /* Elements are centered => |A B C| */
  flexCenter: "flex justify-center items-center",
  /* Elements are aligned from left to right => |A B C  | */
  flexStart: "flex justify-between items-start",
  flexEnd: "flex justify-between items-end",

  /* On small devices, the horizontal and vertical gap between elements is larger. */
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  /* Same but for the inner gap */
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};
  
  export const layout = {
    /* From medium screen size, elements are displayed in row and not column. */
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    /* The oposite */
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    
    /* Espacially for sections just giving information, elements are displayed in column. */
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;