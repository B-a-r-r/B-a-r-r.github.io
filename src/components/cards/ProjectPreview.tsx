import { useContext, useEffect, useRef } from 'react';
import { coreImages } from '../../assets';
import {Retex} from "../../assets/dataTypes";
import styles from '../../style';
import { LangContext } from '../language';
import Card from './Card';
import { handleMouseLeave, handleMouseMove } from '../../utils';
import { RetexContext } from '../retex';
import { ThemeContext } from '../theme/ThemeEngine';

const ProjectPreview = (project: Retex) => {
    const { currentLang } = useContext(LangContext);
    const { setDisplayedRetex } = useContext(RetexContext);
    const { currentTheme } = useContext(ThemeContext);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;
        cardRef.current.classList.remove('color-scheme-primary');
        cardRef.current.classList.add('color-scheme-primary');

    }, [currentTheme]);

    return (
        <div ref={cardRef}
            id={`card-${project.title}-container`}
            className=
            {`
                ${styles.flexCol}
                color-scheme-primary
                md:w-[30%] base:w-full
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
            onClick={() => setDisplayedRetex(project.title)}
        >

            <div className=
                {`
                    m-[6%]
                    mb-[0]
                `}
            >
                <img id={`card-${project.title}-img`}
                    src={project.img && project.img.length > 0 ? project.img[0] : coreImages.portrait}
                    alt="project image"
                    className=
                    {`
                        lg:h-[200px] h-full
                        w-full
                        aspect-video
                        object-cover
                        object-top
                    `}
                />
            </div>
            
            <Card title={project.title} 
                content={project.description[currentLang]} 
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
