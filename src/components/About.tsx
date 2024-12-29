import { layout } from "../style"
import styles from "../style"
import { about_portrait } from "../assets"

function About() {
  return (
    <section id="about"
      className=
      {`
        ${layout.section}
        justify-center
        space-x-28
      `}
    >
    
    <div id="portrait-container"
      className=
      {`
        relative
      `}
    >

      <img 
        src={about_portrait}
        alt="Portrait of the author"
        className=
        {`
          object-contain
          xxl:w-[400px] xl:w-4 lg:w-[400px]
          rounded-[1%]
        `}
      />

      <hr className=
        {`
          absolute
          bg-[--light-color-tertiary]
          w-[300px]
          h-[3px]
          border-[0px]
          top-[55%]
          left-[135px]
        `}
      />

    </div>

      <div id="about-text"
        className=
        {`
          w-1/2
        `}
      >

        <h2 className={styles.heading2}>
          Make it clean,<br/>make it better. {/*I code therefore I am.*/}
        </h2>

        <p className={styles.paragraph}>
          I am a 19yo <strong>junior developer</strong> and creator, mainly interest in developing clean and intelligent solutions to specific needs.
          <br/><br/>
          <strong>Programming</strong> is for me a mean to express my creativity, and enhance my versatility. I’ve been passionate about it since I was 14yo. Today I am developing my own applications and automation tools.
          <br/><br/>  
          Until 2026, I will be doing a <strong>bachelor’s degree</strong> in computer science at the University and Technology Institue of Bordeaux, France. 
        </p>

      </div>

    </section>
  )
}

export default About
