import { Project } from "../data/types"
import { sliderProjects } from "../data"
import Card from "./Card"
import styles from "../style"
import { atlas_pi, menu_down_arrow } from "../assets"
import { ReactNode, useEffect, useState } from "react"


const ProjectsCarrousel = () => {

  const [cards] = useState<Array<ReactNode>>([])

  const [currentCard, setCurrentCard] = useState<ReactNode>(cards[cards.length - 1])

  const isFront = (id: number, all: Array<Project>) => {
    return id === all[all.length - 1].id
  }

  const previousCard = () => {
  }

  const nextCard = () => {
    
  }
  
  sliderProjects.map((project: Project) => {
    cards.push(
      <Card
        key={project.id}
        id={project.id}
        title={project.title}
        content={project.content}
        tags={project.tags}
      />
    )
  });
  console.log(cards)

  return (
    <section id='carrousel-section'
      className={`
        relative
        w-full 
        h-screen
        flex
        flex-col
        justify-center
        items-center
      `}
    >
      <div id="heap-container"
        className={`
          relative
          w-full
          ${styles.flexCenter}
          overflow-visible
        `}
      >

        {cards.map((card: ReactNode, index: number, all: Array<ReactNode>) => {
          return (
            <div id={`card-container-${index}`}
              className={`
                bg-transparent
                ${""}//isFront(project.id, sliderProjects) ? 'relative' : 'absolute'}
                z-[${all.length - index}]
              `}
            >
              {card}
            </div>
          )
        })}

      </div>
      
      <img id="atlas-pi"
        src={atlas_pi}
        alt="atlas"
        className={`
          object-cover
          xxl:w-[400px]
          h-auto
          absolute
          top-0
          right-0
        `}
      />

      <div id="controls-container"
        className={`
          relative
          w-full
          flex
          items-center
          justify-center
          flex-row
          space-x-10
        `}
      >

            <button id="prev-button"
              className={`
                ronded-full
                justify-center
                align-center
                color-primary
              `}
              onClick={previousCard}
            > 
              <img id="icon-previous" 
                src={menu_down_arrow} 
                alt="previous"
                className={`
                  object-cover
                  rotate-90
                `}
              /> 
            </button>

            <button id="projects-button"
              className={`
                rounded-md
                color-quaternary
                px-6
                py-2
              `}
            > Browse<br/>projects </button>

            <button id="next-button"
              className={`
                ronded-full
                justify-center
                align-center
                color-primary
              `}
            > 
            <img id="icon-next" 
              src={menu_down_arrow} 
              alt="next"
              className={`
                object-cover
                -rotate-90
              `}
              onClick={nextCard}
            /> 
          </button>

      </div>

    </section>
  )
}

export default ProjectsCarrousel
