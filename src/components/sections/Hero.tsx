import styles from "../../style"
import { coreImages } from "../../assets"
import { author } from "../../assets/constants"
import { subtitleMessages } from "../../assets/contents"
import { useContext, useEffect, useState } from "react"
import DOMPurify from "dompurify"
import { ThemeContext } from "../theme/ThemeEngine"
import { LangContext } from "../language"
import { getNavbarOffset, isFullScreen } from "../../utils"

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
        ${styles.contentCenter}
        overflow-visible
        font-primary-regular
        relative
      `}
    >
        <div id="hero-text"
          className=
          {`
            w-fit
            h-full
            z-10
            ${styles.flexCol}
            ${styles.contentStartAll}
            md:space-y-[15%] base:space-y-[13%]
          `}
        >
            <div className=
              {`
                ${styles.sizeFit}
                relative
                2xl:mt-[40%] xl:"mt-[${isFullScreen() ? "30%" : "50%"}] md:mt-[33%] base:mt-[10%]
              `}
            >
              <h1 className=
                {`
                  tracking-[0.04em]
                  leading-[115%]
                  2xl:text-9xl xl:text-7xl lg:text-7xl base:text-4xl
                `}
              >
                {author.firstName} <br/> 
                <a className=
                  {`
                    font-primary-bold 
                    text-xl
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
                  md:-bottom-4 base:-bottom-3
                  left-1/4
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
                2xl:text-2xl lg:text-xl base:text-xxs
                text-wrap
                2xl:pr-[10%] xl:pr-[15%] md:pr-[10%] base:pr-[15%]
              `}
            />

        </div>
        
        <div id="hero-image-container"
          className=
          {`
            ${styles.sizeFull}
            relative
          `}
        > 
          <img src={coreImages.sysiphus.content[currentTheme]} 
            alt={coreImages.sysiphus.alt}
            className=
            {`
              absolute
              md:visible base:hidden
              md:opacity-100 base:opacity-50
              2xl:w-[85%] xl:w-[100%] lg:w-[102%] base:w-[550%]
              object-cover
              md:top-[6%] base:top-[1%]
              right-0
            `}
          />
        </div>
    </section>
  )
}

export default Hero
