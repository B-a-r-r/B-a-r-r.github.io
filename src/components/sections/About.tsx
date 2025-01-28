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
        ${styles.section}
        ${styles.flexRow}
        justify-center
        relative
        space-x-28
      `}
    >
      <img 
        src={coreImages.portrait}
        alt="author-portrait"
        className=
        {`
          object-cover
          ${styles.sizeFit}
          xxl:w-[55%] lg:w-[45%]
          rounded-[1%]
        `}
      />

      <hr className=
        {`
          absolute
          ${styles.line}
          w-[25%]
          xxl:bottom-[43%] lg:bottom-[30%]
          xxl:-left-[11%] lg:-left-[13%]
        `}
      />

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
        className={styles.paragraph}
        />
      </div>
    </section>
  )
}

export default About
