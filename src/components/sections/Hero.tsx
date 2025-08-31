import styles from "../../style"
import { coreImages } from "../../assets"
import { author } from "../../assets/constants"
import { subtitleMessages } from "../../assets/contents"
import { useContext, useEffect, useState } from "react"
import DOMPurify from "dompurify"
import { ThemeContext } from "../theme/ThemeEngine"
import { LangContext } from "../language"
import { getActiveBreakpoint } from "../../utils"

const Hero = () => {
const { currentTheme } = useContext(ThemeContext);
const [displayText, setDisplayText] = useState('');
const [currentMessage, setCurrentMessage] = useState(0);
const { currentLang } = useContext(LangContext);

useEffect(() => {
  const message: string = subtitleMessages[currentMessage].content[currentLang];
  let index = 0;
  let text = '';
  let interval = setInterval(() => {
    if (index === message.length) {
      clearInterval(interval);
      setTimeout(() => {
        interval = setInterval(() => {
          if (index === 0) {
            clearInterval(interval);
            setCurrentMessage((currentMessage + 1) % subtitleMessages.length);
          } else {
            index--;
            text = message.substring(0, index);
            setDisplayText(text);
          }
        }, 1);
      }, 4000);
    } else {
      index++;
      text = message.substring(0, index);
      setDisplayText(text);
    }
  }, 50);
  
  return () => clearInterval(interval);
}, [currentMessage]);

return (
  <section id="hero" 
    className=
    {`
      ${styles.sizeFull}
      ${styles.flexRow}
      ${getActiveBreakpoint('number') as number <= 2 ? styles.contentStartX : styles.contentCenter}
      overflow-visible
      font-primary-regular
      relative
    `}
  >
    <img id="hero-image"
      src={coreImages.sysiphus.content[currentTheme]} 
      alt={coreImages.sysiphus.alt}
      className=
      {`
        absolute
        2xl:opacity-100 xl:opacity-100 lg:opacity-100 md:opacity-80 sm:opacity-25 opacity-25
        2xl:w-[75%] xl:w-[70%] lg:w-[65%] md:w-[70%] sm:w-[70%] ss:w-[300px] xs:w-[250px] w-[200px]
        2xl:max-w-[780px] xl:max-w-[600px] lg:max-w-[550px] sm:max-w-[500px]
        2xl:top-[7%] xl:top-[6%] lg:top-[6%] md:top-[5%] sm:top-[5%] ss:top-[15%] xs:top-[25%] top-[35%]
        2xl:right-0 xl:right-0 lg:right-0 md:-right-[2%] sm:-right-[2%] ss:-right-[0] xs:-right-[2%] -right-[2%]
        object-cover
      `}
    />

      <div id="hero-text"
        className=
        {`
          w-full
          h-full
          z-10
          ${styles.flexCol}
          ${styles.contentStartAll}
          2xl:space-y-[55px] lg:space-y-[40px] space-y-[30px]
          relative
          2xl:pr-[75%] xl:pr-[75%] lg:pr-[70%] md:pr-[65%] sm:pr-[65%] ss:pr-[50%] xs:pr-[40%] pr-[40%]
        `}
      >
          <div className=
            {`
              ${styles.sizeFit}
              relative
              2xl:mt-[150px] xl:mt-[110px] lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[45px]
            `}
          >
            <h1 className=
              {`
                tracking-[0.05em]
                2xl:leading-[60px] xl:leading-[48px] lg:leading-[44px] md:leading-[38px] leading-[36px]
                2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl
              `}
            >
              <a className=
                {`
                  text-lg
                `}
              > {author.firstName} </a> <br/>

              <a className=
                {`
                  font-primary-bold 
                  text-2xl
                  tracking-wide
                `}
              > 
                {author.lastName.toUpperCase()}
              </a>
              <br className="sm:block base:hidden"/> 
            </h1>

            <hr className=
              {`
                absolute
                ${styles.line}
                2xl:-bottom-[18px] lg:-bottom-[14px] -bottom-[10px]
                sm:left-1/4 left-[26%]
                2xl:h-[4px]
              `}
            />

          </div>

          <p dangerouslySetInnerHTML={
              {__html: DOMPurify.sanitize(
                displayText[displayText.length-1] === "<" ?
                displayText.substring(0, displayText.length-1)
                : displayText
              )}
            }
            className=
            {`
              2xl:text-xl lg:text-md md:text-sm text-xs
              text-wrap
            `}
          />
      </div>
  </section>
)
}

export default Hero
