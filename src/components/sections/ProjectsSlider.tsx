import { Project } from "../../data/dataTypes"
import { projects } from "../../data/contents"
import styles from "../../style"
import { coreImages, menuIcons } from "../../assets"
import { cloneElement, ReactElement, useEffect, useRef, useState } from "react"
import { randomNumberBetween } from "../../utils"
import { ProjectCard } from "../cards"

const ProjectsSlider = () => {

  const assignRotation = (index: number, all: number) => {
    return(
      index === all - 1 ? 0
      : index % 2 === 0 ? index + randomNumberBetween(4, 9)
      : `-${index + randomNumberBetween(2, 6)}`
    )
  }

  // Make a stack of cards from the projects
  const initCards = () => {
    const slides: Array<ReactElement> = [];
  
    projects.slice(0,10).map((project: Project, index: number, all: Project[]) => {
      slides.push(
        <ProjectCard key={`card-${project.id}-container`}
          project={project}
          additionalStyles={{
            rotate: `${assignRotation(index, all.length)}deg`,
            animation: `card-apparition 0.5s cubic-bezier(.54,.54,.57,.56) forwards`
          }}
        />
      )
    });
  
    return slides;
  }

  // State to manage the cards 
  const [cards, setCards] = useState<Array<ReactElement>>([]);
  const apparitionEnded = useRef<boolean>(false);
  const topCardTrueAngle = useRef<number>(0);

  // This effect occurs only once, it allows to display the stack card by card
  useEffect(() => {
    const initialCards: ReactElement[] = initCards();
  
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
      setTimeout(() => apparitionEnded.current = true, 400*initialCards.length);
    };
  }, []);

  // This funtion is called before updating the cards, to animate the cards according to their position
  const adjustAnimations = (cardsCopy: ReactElement[], from?: "prev" | "next") => {
    return(
      cardsCopy.map((card, index) => {
        switch (index) {
          case cardsCopy.length - 1:
            return (
              cloneElement(card, {
                additionalStyles: {
                  animation: `card-top-to-bottom 2s ease-in forwards`,
                  rotate: `${
                    topCardTrueAngle.current !== 0 
                    ? topCardTrueAngle.current : assignRotation(0, cardsCopy.length)
                  }deg`
                }
              })
            )
          case cardsCopy.length - 2:
            topCardTrueAngle.current = parseInt(card.props.additionalStyles.rotate.split("deg")[0]);
            return (
              cloneElement(card, {
                additionalStyles: {
                  animation: `transition all 0.5s ease-in-out forwards`,
                  rotate: `0deg`
                }
              })
            )
          default:
            return (
              cloneElement(card, {
                additionalStyles: {
                  animation: "",
                  rotate: `${card.props.additionalStyles.rotate}`
                }
              })
            )
        }
      })
    )
  }

  const previousCard = () => {
    if (cards.length <= 1) return;
    const [last, ...rest] = adjustAnimations(cards, "prev");
    setCards([last, ...rest]);
  }

  const nextCard = () => {
    if (cards.length <= 1) return;
    const cardsCopy = adjustAnimations(cards, "next");
    const first = cardsCopy.pop();
    if (first) {
      setCards([first, ...cardsCopy]);
    }
  }

  return (
    <section id='projects-slider'
      className={`
        relative
        ${styles.sizeScreen}
        ${styles.flexRow}
        ${styles.contentCenter}
        ${styles.section}
        space-x-[5%]
        overflow-hidden
      `}
    >

      <div id="cards-stack-container"
        className={`
          ${styles.sizeFull}
          ${styles.flexRow}
          ${styles.contentCenter}
          relative
        `}
      > 
        {cards.map((card: ReactElement) => (
          card
        ))}

        <button id="prev-button"
          className={`
            absolute
            left-0
            top-1/2
            z-10
          `}
          onClick={previousCard}
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

        {/* <button id="projects-button"
          className={`
            font-primary-semibold
            lg:text-[80%]
            tracking-widest
            absolute
            bottom-5
            opacity-50
            text-center
          `}
          onClick={() => window.location.href = "/projects"}
        > Browse all<br/>projects
          <hr className=
            {`
              ${styles.line}
            `}
          />
        </button> */}

        <button id="next-button"
          className={`
            absolute
            right-0
            top-1/2
            z-10
          `}
          onClick={nextCard}
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

      <div id="statue-container"
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexCol}
          ${styles.contentCenter}
          relative
        `}
      >
        <img id="hephaistos-statue"
            src={coreImages.hephaistos}
            alt={`Statue of Hephaistos`}
            className={`
              object-cover
              xxl:w-[400px] lg:h-[700px]
              absolute
              left-0
            `}
          />
      </div>
    </section>
  )
}

export default ProjectsSlider