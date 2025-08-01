import styles from "../../style"
import { coreImages } from "../../assets"
import { bioText } from "../../assets/contents"
import DOMPurify from "dompurify"
import { useContext } from "react"
import { LangContext } from "../language"
import { getActiveBreakpoint } from "../../utils"
import { placeholderMessages } from "../../assets/constants"

const About = () => {
  const { currentLang } = useContext(LangContext);

  return (
    <section id="about"
      className=
      {`
        ${styles.sizeFull}
        ${getActiveBreakpoint('number') as number <= 1 ? styles.flexCol : styles.flexRow}
        ${styles.contentCenter}
        md:space-x-[6%]
        md:space-y-0 base:space-y-[10%]
        overflow-hidden
      `}
    >
      <span id="portrait-container-desktop"
        className=
        {`
          ${getActiveBreakpoint('number') as number <= 1 ? "hidden" : styles.flexRow}
          w-5/12
          h-full
          relative
        `}
      >
        <img src={coreImages.portrait}
          alt="author-portrait"
          className=
          {`
            absolute
            object-cover
            object-center
            aspect-square
            rounded-[5px]
            2xl:w-[93%] xl:w-[100%] base:w-[100%]
            2xl:top-[17%] xl:top-[11%] base:top-0 
            right-0
            shadow-xl
          `}
        />

        <a id="additional-link"
          className=
          {`
            absolute  
            text-base
            top-[55%]
            left-2
            text-[--color-tertiary]
            cursor-pointer
            hover:translate-x-1.5
            transition-all
            duration-300
            ease-in-out
            overflow-x-visible
          `}
        > {placeholderMessages.find(message => message.context === "aboutAdditionalLink")!.content[currentLang]} </a>
      </span>
      
      <span id="portrait-container-mobile"
        className=
        {`
          md:hidden ${styles.flexRow}
          w-full
          h-fit
          relative
          space-x-[3%]
        `}
      >
        <img src={coreImages.portrait}
          alt="author-portrait"
          className=
          {`
            object-cover
            object-center
            aspect-square
            rounded-[5px]
            w-[60%]
            shadow-xl
          `}
        />

        <h2 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(bioText.find((e) => e.active)!.title[currentLang])}}
          className=
          {`
            ${styles.heading2}
            flex
            mb-[0]
            pb-[0]
            ${styles.contentEndY}
          `}
        />
      </span>

      <div id="about-text"
        className=
        {`
          ${styles.sizeFit}
          ${styles.flexCol}
          ${styles.contentStartAll}
          overflow-hidden
        `}
      >
        <h2 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(bioText.find((e) => e.active)!.title[currentLang])}}
          className=
          {`
            md:visible base:hidden
            ${styles.heading2}
          `}
        />

        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(bioText.find((e) => e.active)!.content[currentLang])}}
          className=
          {`
            ${styles.paragraph}
            2xl:pr-[3.5%]
          `}
        />
      </div>
    </section>
  )
}

export default About
