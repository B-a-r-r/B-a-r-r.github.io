import styles from "../../style"
import { coreImages } from "../../assets"
import { bioText } from "../../data/contents"
import DOMPurify from "dompurify"
import { useContext } from "react"
import { LangContext } from "../language"

const About = () => {
  const { currentLang } = useContext(LangContext);

  return (
    <section id="about"
      className=
      {`
        ${styles.sizeFull}
        md:${styles.flexRow} ${styles.flexCol}
        ${styles.contentCenter}
        md:space-x-[6%]
        md:space-y-0 space-y-[10%]
        overflow-hidden
      `}
    >
      <span className=
        {`
          md:${styles.flexCol} hidden
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
            xl:w-[93%] w-[100%]
            xl:top-[17%] top-0 right-0
            shadow-xl
          `}
        />

        <hr className=
          {`
            hidden
            ${styles.line}
            xl:top-[60%]
            xl:left-[5%]
          `}
        />
      </span>
      
      <span className=
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
            md:visible hidden
            ${styles.heading2}
          `}
        />

        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(bioText.find((e) => e.active)!.content[currentLang])}}
          className=
          {`
            ${styles.paragraph}
          `}
        />
      </div>
    </section>
  )
}

export default About
