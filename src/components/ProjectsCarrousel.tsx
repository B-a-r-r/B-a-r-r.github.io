import { sliderProjects } from "../constants"
import Card from "./Card"
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
      <div id="cards-container"
        className={`
          relative
          w-full
          h-full
          flex
          flex-row
          overflow-visible
        `}
      >

        {sliderProjects.map((project) => (
          <Card
            id={project.id}
            title={project.title}
            content={project.content}
            tags={project.tags}
          />
        ))}

      </div>

      <div id="image-container"
        className={`
          relative
        `}
      >

        <img id="atlas-pi"
          src={atlas_pi}
          alt="atlas"
          className={`
            absolute
            top-0
            right-0
            h-[100%]
            z-10
          `}
        />

      </div>

    </section>
  )
}

export default ProjectsCarrousel
