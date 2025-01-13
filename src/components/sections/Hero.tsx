import styles from "../../style"
import { coreImages } from "../../assets"
import { author } from "../../data/constants"
import { subtitleMessages } from "../../data/contents"
import { useContext, useEffect, useState } from "react"
import DOMPurify from "dompurify"
import { ThemeContext } from "../theme/ThemeEngine"

const Hero = () => {
  const { currentTheme } = useContext(ThemeContext);
  const [displayText, setDisplayText] = useState('');
  const [currentMessage, setCurrentMessage] = useState(0);
  
  useEffect(() => {
    const message: string = subtitleMessages[currentMessage].content;
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
    <section 
      id="hero" 
      className=
      {`
        ${styles.sizeScreen}
        ${styles.flexRow}
        ${styles.contentCenter}
        ${styles.section}
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
            resize-none
          `}
        >
            <div id="hero-heading"
              className=
              {`
                ${styles.sizeFit}
                relative
                mt-[33%]
              `}
            >
              <h1 className="
                tracking-[0.04em]
                xxl:leading-[90px] leading-[115%]
                xxl:text-[400%] lg:text-[280%]"
              >
                {author.firstName} <br/> 
                <a className=
                  {`
                    font-primary-bold 
                    lg:text-[120%]
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
                xxl:text-[160%] lg:text-[125%]
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
              xxl:w-[90%] lg:w-[92%]
              object-cover
              xxl:-top-[12%] top-[8%]
              right-0
            `}
          />
        </div>
    </section>
  )
}

export default Hero
