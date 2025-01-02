import styles from "../style"
import { coreImages } from "../assets"
import { socialMedia } from "../data/constants"
import { subtitleMessages } from "../data/contents"
import { SocialMedia } from "../data/types"
import { useEffect, useState } from "react"
import DOMPurify from "dompurify"

const Hero = () => {
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
        ${styles.sizeFull}
        ${styles.section}
        ${styles.flexRow}
        bg-transparent
        overflow-visible
        font-primary-regular
        color-primary
        relative
      `}
    >
        <div id="hero-text"
          className=
          {`
            ${styles.flexCol}
            ${styles.contentStartAll}
            space-y-12
          `}
        >
            <div id="hero-heading"
              className=
              {`
                ${styles.sizeFit}
                relative
              `}
            >
              <h1 className="
                tracking-[0.06em]
                leading-[72.4px]
                lg:text-[300%]"
              >
                Clément <br/> 
                <a className=
                  {`
                    font-primary-bold 
                    lg:text-[120%]
                    tracking-wider
                  `}
                > 
                  BARRIÈRE
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
                lg:text-[130%]
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

          <img id="hero-image"
            src={coreImages.sysiphus} 
            alt="Sysiphus" 
            className=
            {`
              absolute
              xxl:w-[80%] lg:w-[95%]
              object-cover
              -top-11
              right-0
            `}
          />
        </div>

        <div id="hero-social-media"
          className=
          {`
            ${styles.flexRow}
            ${styles.contentCenter}
            absolute
            bottom-[14%]
            right-0
            space-x-2
          `}
        >
            {
              socialMedia.map((social: SocialMedia) => {
                return (
                  <a key={social.id} 
                    href={social.link}
                  >
                    <img key={`icon-${social.id}`}
                      src={social.icon} 
                      alt={social.id} 
                      className=
                      {`
                        object-cover
                        w-[100%]
                      `}
                    />
                  </a>
                )
              })
            }

        </div>
    </section>
  )
}

export default Hero
