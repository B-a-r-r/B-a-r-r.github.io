import { CSSProperties, useContext, useRef } from "react";
import styles from "../../style"
import { Project } from "../../assets/dataTypes";
import Card from "./Card";
import { LangContext } from "../language";
import { Link } from "react-router";
import { handleMouseEnter, handleMouseLeave, handleMouseMove } from "../../utils";

type ProjectCardProps = {
    project: Project;
    additionalStyles: CSSProperties;
    onanimationend?: (e: React.AnimationEvent<HTMLDivElement>) => void;
}

const ProjectCard = ({project, additionalStyles, onanimationend}: ProjectCardProps) => {
    const { currentLang } = useContext(LangContext);
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={cardRef}
            id={`card-${project.title}-container`}
            className={`
                color-scheme-primary
                ${styles.sizeFull}
                2xl:max-h-[55%] xl:max-h-[60%] lg:max-h-[55%] md:max-h-[55%]
                2xl:max-w-[70%] xl:max-w-[75%] lg:max-w-[70%] md:max-w-[70%]
                aspect-square
                absolute
                rounded-md
                shadow-lg
                overflow-hidden
                cursor-pointer
                hover:shadow-xl
                transition-all
                duration-200
                ease-linear
            `}
            style={additionalStyles}
            onMouseLeave={() => handleMouseLeave(cardRef.current)}
            onMouseMove={(e) => handleMouseMove(e, cardRef.current)}
            onMouseEnter={() => handleMouseEnter(cardRef.current)}
            onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) => onanimationend ? onanimationend(e) : () => {}}
        >
            <Link to="/projects">
                <Card key={`card-${project.title}`}
                    title={project.title}
                    content={project.description[currentLang]}
                    tags={
                        project.tags[currentLang] ? 
                        project.tags[currentLang].concat(project.tags[0])
                        : project.tags[0]
                    }
                    moreTopClasses=
                    {`
                    `}
                    titleProps=
                    {`
                        color-scheme-secondary
                        xl:text-xl lg:text-lg
                        px-[8%]
                        xl:mb-[4%]
                    `}
                    contentProps=
                    {`
                        lg:text-xl
                        px-[8%]
                    `}
                    tagsProps=
                    {`
                        lg:text-md
                        px-[8%]
                    `}
                />
            </Link>
        </div>
  )
}

export default ProjectCard
