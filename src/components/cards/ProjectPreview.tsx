import { coreImages } from '../../assets';
import { previewContentMaxLength, previewTitleMaxLength } from '../../data/constants';
import { retex } from '../../data/contents';
import {Project} from '../../data/dataTypes';
import styles from '../../style';
import Card from './Card';

const ProjectPreview = ({id, title, content, tags, img}: Project) => {
    const formatedTitle = () => (
        title.length > previewTitleMaxLength ?
        title.slice(0, previewTitleMaxLength) + '...' :
        title
    )

    const formatedContent = () => (
        content.length > previewContentMaxLength ?
        content.slice(0, previewContentMaxLength) + '...' :
        content
    )

    return (
        <a href= {
                retex.find((retex) => retex.relatedProject === title) ?
                `/project/${title}` : "/projects"
            }
        >
            <div id={`card-${id}-container`}
                className=
                {`
                    ${styles.flexRow}
                    ${styles.sizeFull}
                    rounded-lg
                    shadow-md
                    cursor-pointer
                    overflow-hidden

                    hover:scale-105
                    transition-all
                    duration-300
                    ease-in-out

                    relative
                `}
            >
                <img id={`card-${id}-img`}
                    src={img ? img : coreImages.sysiphus}
                    alt="project image"
                    className={`
                        object-center
                        object-cover
                        w-3/6
                    `}
                />

                <Card 
                    title={formatedTitle()} 
                    content={formatedContent()} 
                    tags={tags} 
                    additionalClasses={`
                        lg:text-[100%]
                    `}
                />
            </div>
        </a>
    );
}

export default ProjectPreview;
