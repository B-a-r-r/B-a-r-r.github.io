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
            ${styles.flexCol}
            ${styles.contentStartAll}
            space-y-[15%]
          `}
        >
            <div id="hero-heading"
              className=
              {`
                ${styles.sizeFit}
                relative
                xl:mt-[30%] mt-[33%]
              `}
            >
              <h1 className="
                tracking-[0.04em]
                xxl:leading-[90px] leading-[115%]
                xxl:text-[400%] lg:text-7xl"
              >
                {author.firstName} <br/> 
                <a className=
                  {`
                    font-primary-bold 
                    lg:text-xl
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
                  -bottom-4
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
                xxl:text-[160%] lg:text-2xl
                text-wrap
                pr-[10%]
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
              xxl:w-[90%] lg:w-[102%]
              object-cover
              xxl:-top-[12%] top-[6%]
              right-0
            `}
          />
        </div>
    </section>
  )
}

export default Hero
