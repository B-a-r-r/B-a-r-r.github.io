import { layout } from "../style"
import styles from "../style"
import { about_portrait } from "../assets"

function About() {
  return (
    <section id="about"
      className=
      {`
        ${layout.section}
        ${styles.flexCenter}
      `}
    >
    
      <div id="about-image-coontainer"
        className=
        {`
          ${layout.sectionImg}
        `}
      >
      
        <img 
          src={about_portrait}
          alt="Portrait of the author"
        />

      </div>

    </section>
  )
}

export default About
