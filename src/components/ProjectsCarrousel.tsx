import { sliderProjects } from "../constants"
import Card from "./Card"
import styles from "../style"
import { layout } from "../style"
import { atlas_pi } from "../assets"


function ProjectsCarrousel() {
  return (
    <section id='carrousel-section'
      className={`
        w-full
        h-screen
        ${layout.section}
      `}
    >
      <div id="heap-container"
        className={`
          relative
          w-full
          h-full
          overflow-visible
          flex
          justify-self-center
          self-center
          flex-col
        `}
      >

        {sliderProjects.map((project, index, all) => (
          <div id={`card-container-${index}`}
            className={`
              absolute
              w-[90%]
            `}
          >
            <Card
              id={project.id}
              title={project.title}
              content={project.content}
              tags={project.tags}
            />
          </div>
        ))}

      </div>

      <div id="image-container"
        className={`
          relative
          ${styles.flexStart}
        `}
      >

        <img id="atlas-pi"
          src={atlas_pi}
          alt="atlas"
          className={`
            object-contain
            w-fit
            h-[100%]
            z-10
          `}
        />

      </div>

    </section>
  )
}

export default ProjectsCarrousel
