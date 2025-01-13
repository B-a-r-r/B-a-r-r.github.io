import { CSSProperties } from "react";
import styles from "../../style"
import { Project } from "../../data/dataTypes";
import Card from "./Card";
import { cardContentMaxLength, cardTitleMaxLength } from "../../data/constants";

type ProjectCardProps = {
    project: Project;
    additionalStyles: CSSProperties;
}

const ProjectCard = ({project, additionalStyles}: ProjectCardProps) => {
    const formatedTitle = () => (
        project.title.length > cardTitleMaxLength ?
        project.title.slice(0, cardTitleMaxLength) + '...' :
        project.title
    )

    const formatedContent = () => (
        project.content.length > cardContentMaxLength ?
        project.content.slice(0, cardContentMaxLength) + '...' :
        project.content
    )

    return (
    <div id={`card-${project.id}`}
        className={`
            ${styles.sizeFull}
            max-h-[60%]
            max-w-[70%]
            aspect-[16/9]
            absolute
            rounded-md
            overflow-hidden
            bg-transparent
            shadow-lg
            cursor-pointer
        `}
        onClick={() => window.location.href = '/projects'}
        style={additionalStyles}
    >
        <Card
            key={`card-${project.id}`}
            title={formatedTitle()}
            content={formatedContent()}
            tags={project.tags}
            additionalClasses=
            {`
                lg:text-[100%]
            `}
        />
    </div>
  )
}

export default ProjectCard
