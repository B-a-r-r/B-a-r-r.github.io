import { useContext, useRef } from 'react';
import { coreImages } from '../../assets';
import {Project} from '../../data/dataTypes';
import styles from '../../style';
import { LangContext } from '../language';
import Card from './Card';
import { handleMouseLeave, handleMouseMove } from '../../utils';

type ProjectPreviewProps = {
    project: Project;
    retexToggler: (retexTitle: string | false)=>void;
}

const ProjectPreview = ({project, retexToggler}: ProjectPreviewProps) => {
    const { currentLang } = useContext(LangContext);
    const retexExists = project.retex ? true : false;
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={cardRef}
            id={`card-${project.title}-container`}
            className=
            {`
                ${styles.flexCol}
                w-[30%]
                h-[500px]
                rounded-md
                shadow-xl
                overflow-hidden
                cursor-pointer
                last:overflow-visible
                mt-[5%]
                transition-all
                duration-200
                ease-linear
            `}
            style={{
                
                transformStyle: 'preserve-3d',
            }}
            onMouseLeave={() => handleMouseLeave(cardRef.current)}
            onMouseMove={(e) => handleMouseMove(e, cardRef.current)}
            onClick={() => retexExists ? retexToggler(project.retex ? project.retex.relatedProject : false) : {}}
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
                        object-cover
                        object-top
                    `}
                />
            </div>
            
            <Card title={project.title} 
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
