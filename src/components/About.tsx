import styles from "../style"
import { coreImages } from "../assets"
import { bioText } from "../data"
import DOMPurify from "dompurify"

const About = () => {
  return (
    <section id="about"
      className=
      {`
        ${styles.section}
        ${styles.sizeScreen}
        ${styles.flexRow}
        justify-center
        space-x-28
      `}
    >
    
      <span id="portrait-container"
        className=
        {`
          ${styles.sizeFit}
          ${styles.flexCol}
          ${styles.contentEndAll}
          relative
          top-0
          left-0
        `}
      >
        
          <img 
            src={coreImages.about_portrait}
            alt="Portrait of the author"
            className=
            {`

              object-cover
              xxl:w-[65%] lg:w-[28%]
              rounded-[1%]
            `}
          />

          <hr className=
            {`
              absolute
              ${styles.line}
            `}
          />

      </span>

      <div id="about-text"
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexCol}
          ${styles.contentStartY}
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
