import { Project } from "../data/types"
import { sliderProjects } from "../data/contents"
import Card from "./Card"
import styles from "../style"
import { coreImages, menuIcons } from "../assets"
import { ReactNode, useEffect, useRef, useState } from "react"
import { randomNumberBetween } from "../utils"

const ProjectsSlider = () => {

  // Make a stack of cards from the projects
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
                  index === all.length - 1 ? 0
                  : index % 2 === 0 ? index + randomNumberBetween(4, 9)
                  : `-${index + randomNumberBetween(2, 6)}`
                }deg`,
                animation: `card-apparition 0.5s cubic-bezier(.54,.54,.57,.56) forwards`
              }}
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

  // State to manage the cards
  const [cards, setCards] = useState<Array<ReactNode>>([]);
  const animationEnded = useRef<boolean>(false);
  const topCardTrueAngle = useRef<number>(0);

  // This effect occurs only once, it allows to display the stack card by card
  useEffect(() => {
    const initialCards: ReactNode[] = initCards();
  
    let i = 0;
    const interval = setInterval(() => {
      if (i < initialCards.length) {
        setCards(initialCards.slice(0, i+1))
      } else {
        clearInterval(interval);
      }
      i++;
    }, 200); 

    return () => {
      clearInterval(interval);
      setTimeout(() => animationEnded.current = true, 400*initialCards.length);
    };
  }, []);

  // This effect occurs when the cards are updated, to animate the cards according to their position
  useEffect(() => {
    if (animationEnded.current) {
      const cardsContainer: HTMLElement | null = document.getElementById("cards-stack-container");
      const cards: HTMLCollection | undefined = cardsContainer?.children;

      if (cards) {
        for (let i = 0; i < cards.length; i++) {
          const card: HTMLElement = cards[i] as HTMLElement;
          card.style.animation = 
            i === 0 ? "card-top-to-bottom O.8s ease-in-out forwards"
            : i != (cards.length - 1) ? "card-reach-top 2s cubic-bezier(.54,.54,.57,.56) forwards"
            : "card-change-position 2s cubic-bezier(.54,.54,.57,.56) forwards";
          
          if (i === (cards.length - 1)) {
            topCardTrueAngle.current = parseInt(card.style.rotate);
            card.style.rotate = "0deg";
          }
          // if the last card in the stack comes from the top, it must retrieve its original angle
          if (i === 0 && cards.length > 1
              && parseInt(card.style.rotate) === 0) {
            card.style.rotate = `${topCardTrueAngle.current}deg`;
          }
        }
      }
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
        ${styles.sizeFull}
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
        src={coreImages.atlas}
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
                src={menuIcons.double_chevrons_icon} 
                alt="previous"
                className={`
                  object-cover
                  -rotate-90
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
              src={menuIcons.double_chevrons_icon} 
              alt="next"
              className={`
                object-cover
                rotate-90
              `}
            /> 
          </button>

      </div>

    </section>
  )
}

export default ProjectsSlider