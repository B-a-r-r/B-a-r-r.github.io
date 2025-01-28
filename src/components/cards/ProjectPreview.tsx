import { useContext } from 'react';
import { coreImages } from '../../assets';
import {Project} from '../../data/dataTypes';
import styles from '../../style';
import { LangContext } from '../language';
import Card from './Card';

type ProjectPreviewProps = {
    project: Project;
    retexToggler: (retexTitle: string)=>void;
}

const ProjectPreview = ({project, retexToggler}: ProjectPreviewProps) => {
    const { currentLang } = useContext(LangContext);
    const retexExists = project.retex ? true : false;

    return (
        <div id={`card-${project.title}-container`}
            className=
            {`
                ${styles.flexCol}
                w-[30%]
                h-[500px]
                rounded-md
                shadow-lg
                overflow-hidden
                cursor-pointer
                last:overflow-visible

                hover:scale-105
                transition-transform
                duration-300
                ease-in-out
            `}
            onClick={() => retexExists ? retexToggler(project.title) : {}}
        >

            <div className=
                {`
                    m-[6%]
                    mb-[0]
                `}
            >
                <img id={`card-${project.title}-img`}
                    src={project.img ? project.img : coreImages.sysiphus}
                    alt="project image"
                    className=
                    {`
                        lg:h-[200px]
                        w-full
                        aspect-video
                        object-contain
                        object-center
                    `}
                />
            </div>
            
            <Card 
                title={project.title} 
                content={project.content[currentLang]} 
                tags={project.tags[currentLang].concat(project.tags[0])} 
                moreTopClasses=
                {`
                    px-[8%]
                `}
                titleProps=
                {`
                `}
                contentProps=
                {`
                `}
                tagsProps=
                {`
                `}
            />
        </div>
    );
}

export default ProjectPreview;
