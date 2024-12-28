const styles = {
  /* Maximum width for extra large screens; elements don't extend themselves over 1280px.*/   
  boxWidth: "xxl:max-w-[1280px] w-full",

  navbartext: " \
    xxl:text-[150%]  lg:text-[140%]  md:text-[160%]  sm:text-[140%] \
    color-secondary",
  
  heading2: " \
    font-primary-bold \
    xxl:text-[230%]  \
    leading-[50px]  \
    w-full  \
    tracking-wider  \
    mb-8",
  
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
  flexCenter: "flex justify-center items-center",
  /* Elements are aligned from left to right => |A B C  | */
  flexStart: "flex justify-between items-start",
  flexEnd: "flex justify-between items-end",

  /* On small devices, the horizontal and vertical gap between elements is larger. */
  paddingX: "sm:px-16 px-[20px]",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  /* Same but for the inner gap */
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};
  
  export const layout = {
    /* From medium screen size, elements are displayed in row and not column. */
    section: `flex md:flex-row flex-col mt-[70px] mb-[100px] h-[80vh]`,
    /* The oposite */
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    
    /* Espacially for sections just giving information, elements are displayed in column. */
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

    responsiveNavbar: `
      xxl:text-[220%]
      xxl:px-[3%]
      xxl:py-[1%]`,
  };
  
  export default styles;