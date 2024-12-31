import { Project } from "../data/types"
import { sliderProjects } from "../data"
import Card from "./Card"
import styles from "../style"
import { coreImages, menuIcons } from "../assets"
import React, { ReactNode, useEffect, useState } from "react"
import { randomNumberBetween } from "../utils"

const ProjectsSlider = () => {

  const initCards = () => {
    const slides: Array<ReactNode> = [];
  
    sliderProjects.map((project: Project, index: number, all: Project[]) => {
      slides.push(
        <div id={`card-container-${project.id}`}
              key={`${project.id}-container`}
              className={`
                w-[400px]
                h-[500px]
                absolute
                rounded-md
                overflow-hidden
                bg-transparent
                shadow-lg
              `}
              style={{
                rotate: `${
                  index === (all.length - 1) ? 0
                  : index % 2 === 0 ? index + randomNumberBetween(4, 9)
                  : `-${index + randomNumberBetween(2, 6)}`
                }deg`}
              }
        >
          <Card
            key={`card-${project.id}`}
            id={project.id}
            title={project.title}
            content={project.content}
            tags={project.tags}
          />
        </div>
      )
    });
  
    return slides;
  }

  const [cards, setCards] = useState<Array<ReactNode>>(initCards);

  useEffect(() => {
    // adjust cards rotation and translation in the stack
    const cardsContainer: HTMLElement | null = document.getElementById('cards-stack-container');
    const cardsElements: HTMLCollection | undefined = cardsContainer?.children;
    if (cardsElements) {
      for (let i = 0; i < cards.length; i++) {
        const card = cardsElements[i] as HTMLElement;
        if (i === 0) {
          card.style.left = `-200px`;
          card.style.transform = "translateX(200px)";
          card.style.transition = "transition: all 1s ease-out";
        }
        else if (i === cardsElements.length - 1) {
          card.style.transform = `translateX(100px) `;
          card.style.transition = "transition: all 1s ease-out";
          card.style.transformOrigin = "center 50%";
        } else {
          card.style.left = "0px";
          card.style.transform = "";
          card.style.transition = "transition: all 1s ease-out";
        }
      }
    }
    if (cardsContainer) {
      cardsContainer.style.left = "-500px";
      cardsContainer.style.transform = "translateX(500px)";
      cardsContainer.style.transition = "transform 3s";
      cardsContainer.style.transitionTimingFunction = "cubic-bezier(0,1,.32,1)";
    }
  }, [cards]);

  const previousCard = () => {
    const cardsCopy = [...cards];
    const lastCard = cardsCopy[0];  
    for (let i = 0; i < (cards.length - 1); i++) {
      cardsCopy[i] = cardsCopy[i+1];
    }
    cardsCopy[cards.length - 1] = lastCard;
    return cardsCopy;
  }

  const nextCard = () => {
    const cardsCopy = [...cards];
    const topCard = cardsCopy[cardsCopy.length - 1];
    for (let i = (cards.length - 1); i > 0; i--) {
      cardsCopy[i] = cardsCopy[i-1];
    }
    cardsCopy[0] = topCard;
    return cardsCopy;
  }

  return (
    <section id='projects-slider'
      className={`
        relative
        ${styles.sizeScreen}
        ${styles.flexCol}
        ${styles.contentCenter}
        ${styles.section}
      `}
    >
      <div id="cards-stack-container"
        className={`
          w-full
          h-full
          aspect-[2/3]
          perspective-[100px]
          perspective-origin-[center 50%]
          transform-[preserve-3d]
          relative
        `}
      >

        {cards.map((card: ReactNode) => (
          card
        ))}

      </div>
      
      <img id="atlas-pi"
        src={coreImages.atlas_pi}
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
          absolute
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
              onClick={() => setCards(previousCard)}
            > 
              <img id="icon-previous" 
                src={menuIcons.menu_down_arrow} 
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
              onClick={() => setCards(nextCard)}
            > 
            <img id="icon-next" 
              src={menuIcons.menu_down_arrow} 
              alt="next"
              className={`
                object-cover
                -rotate-90
              `}
            /> 
          </button>

      </div>

    </section>
  )
}

export default ProjectsSlider