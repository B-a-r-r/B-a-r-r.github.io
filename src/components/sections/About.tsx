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
        ${styles.flexRow}
        space-x-[8%]
      `}
    >
      <span className=
        {`
          w-5/12
          h-full
          ${styles.flexCol}
          relative
          overflow-hidden
        `}
      >
        <img src={coreImages.portrait}
          alt="author-portrait"
          className=
          {`
            object-cover
            object-center
            aspect-square
            rounded-sm
          `}
        />

        <hr className=
          {`
            absolute
            ${styles.line}
            xl:top-[40%]
            xl:left-[5%]
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
          className={styles.heading2}
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
