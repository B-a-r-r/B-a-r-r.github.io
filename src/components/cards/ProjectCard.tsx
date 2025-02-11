import { CSSProperties, useContext, useRef } from "react";
import styles from "../../style"
import { Project } from "../../data/dataTypes";
import Card from "./Card";
import { LangContext } from "../language";
import { Link } from "react-router";
import { handleMouseLeave, handleMouseMove } from "../../utils";

type ProjectCardProps = {
    project: Project;
    additionalStyles: CSSProperties;
}

const ProjectCard = ({project, additionalStyles}: ProjectCardProps) => {
    const { currentLang } = useContext(LangContext);
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={cardRef}
            id={`card-${project.title}-container`}
            className={`
                ${styles.sizeFull}
                max-h-[400px]
                max-w-[70%]
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
        >
            <Link to="/projects">
                <Card key={`card-${project.title}`}
                    title={project.title}
                    content={project.content[currentLang]}
                    tags={
                        project.tags[currentLang] ? 
                        project.tags[currentLang].concat(project.tags[0])
                        : project.tags[0]
                    }
                    moreTopClasses=
                    {`
                        color-scheme-primary
                    `}
                    titleProps=
                    {`
                        color-scheme-secondary
                        lg:text-lg
                        px-[8%]
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
