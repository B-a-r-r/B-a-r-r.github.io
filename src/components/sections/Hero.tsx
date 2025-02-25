import styles from "../../style"
import { coreImages } from "../../assets"
import { author } from "../../data/constants"
import { subtitleMessages } from "../../data/contents"
import { useContext, useEffect, useState } from "react"
import DOMPurify from "dompurify"
import { ThemeContext } from "../theme/ThemeEngine"
import { LangContext } from "../language"
import { getNavbarOffset } from "../../utils"

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
    console.log(window.innerHeight - getNavbarOffset());
    return () => clearInterval(interval);
  }, [currentMessage]);

  return (
    <section 
      id="hero" 
      className=
      {`
        ${styles.sizeFull}
        ${styles.flexRow}
        ${styles.contentCenter}
        overflow-visible
        font-primary-regular
        color-scheme-primary
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
            md:space-y-[15%] space-y-[13%]
          `}
        >
            <div id="hero-heading"
              className=
              {`
                ${styles.sizeFit}
                relative
                xl:mt-[40%] md:mt-[33%] mt-[10%]
              `}
            >
              <h1 className=
                {`
                  tracking-[0.04em]
                  leading-[115%]
                  xl:text-9xl lg:text-7xl text-4xl
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
                <br className="sm:block hidden"/> 
              </h1>

              <hr className=
                {`
                  absolute
                  ${styles.line}
                  md:-bottom-4 -bottom-3
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
                xl:text-2xl lg:text-2xl text-xxs
                text-wrap
                md:pr-[10%] pr-[15%]
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

          <object id="hero-image"
            data={coreImages.sysiphus} 
            type="image/svg+xml"
            style={{fill: currentTheme === "dark" ? "white" : "black"}}
            className=
            {`
              absolute
              md:visible hidden
              md:opacity-100 opacity-50
              xl:w-[85%] lg:w-[102%] w-[550%]
              object-cover
              md:top-[6%] top-[1%]
              right-0
            `}
          />
        </div>
    </section>
  )
}

export default Hero
