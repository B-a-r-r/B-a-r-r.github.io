import styles from "../style"
import { coreImages } from "../assets"
import { bioText } from "../data/contents"
import DOMPurify from "dompurify"

const About = () => {
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
        alt="Portrait of the author"
        className=
        {`
          object-cover
          ${styles.sizeFit}
          xxl:w-[65%] lg:w-[50%]
          rounded-[1%]
        `}
      />

      <hr className=
        {`
          absolute
          ${styles.line}
          w-[25%]
          bottom-44
          -left-5
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

        <h2 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(bioText[0].title)}}
          className={styles.heading2}
        />

        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(bioText[0].content)}}
        className={styles.paragraph}
        />

      </div>

    </section>
  )
}

export default About
