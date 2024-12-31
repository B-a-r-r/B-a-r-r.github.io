import styles from "../style"
import { sysiphus_rotated } from "../assets"
import { socialMedia, subtitleMessages } from "../data"
import { SocialMedia, SubtitleMessage } from "../data/types"
import { useEffect, useState } from "react"

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentMessage, setCurrentMessage] = useState(0);
  
  useEffect(() => {
    const text = subtitleMessages[currentMessage].content;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentMessage]);

  setInterval(() => {
    setDisplayText('');
    setCurrentMessage((prev) => (prev + 1) % subtitleMessages.length);
  }, 5000);

  return (
    <section 
      id="hero" 
      className=
      {`
        ${styles.sizeScreen}
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
                  bg-[--light-color-tertiary]
                  w-2/3
                  h-[3.5px]
                  -bottom-4
                  left-1/4
                `}
              />

            </div>

            <p className=
              {`
                lg:text-[130%]
              `}
            >
              {displayText}
            </p>

        </div>
        
        <div id="hero-image-container"
          className=
          {`
            ${styles.sizeFull}
            relative
          `}
        >

          <img id="hero-image"
            src={sysiphus_rotated} 
            alt="Sysiphus" 
            className=
            {`
              absolute
              w-[95%]
              object-cover
              -bottom-3
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
