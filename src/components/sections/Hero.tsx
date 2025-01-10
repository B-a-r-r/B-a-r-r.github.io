import styles from "../../style"
import { coreImages } from "../../assets"
import { socialMedia, author } from "../../data/constants"
import { subtitleMessages } from "../../data/contents"
import { SocialMedia } from "../../data/dataTypes"
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
        ${styles.sizeScreen}
        ${styles.flexRow}
        ${styles.section}
        overflow-visible
        font-primary-regular
        color-primary
        relative
        mt-[11%]
      `}
    >
        <div id="hero-text"
          className=
          {`
            ${styles.sizeFit}
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
              `}
            >
              <h1 className="
                tracking-[0.04em]
                xxl:leading-[90px] leading-[115%]
                xxl:text-[400%] lg:text-[250%]"
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
                xxl:text-[160%] lg:text-[110%]
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
              xxl:w-[90%] lg:w-[90%]
              object-cover
              xxl:-top-[12%] -top-[12%]
              right-0
            `}
          />
        </div>
{/* 
        <div id="hero-social-media"
          className=
          {`
            ${styles.flexRow}
            ${styles.contentCenter}
            absolute
            bottom-[30%]
            right-0
            space-x-3
          `}
        >
            {socialMedia.map((social: SocialMedia) => {
                return (
                  <a key={social.id} 
                    href={social.link}
                    id={`icon-${social.at}-container`}
                  >
                    <img key={`icon-${social.label}`}
                      src={social.icon} 
                      alt={social.label} 
                      className=
                      {`
                        object-cover
                        xxl:w-[50px] w-[100%]
                        hover:scale-105
                        transition-transform
                        duration-300
                      `}
                    />
                  </a>
                )
            })}

        </div> */}
    </section>
  )
}

export default Hero
