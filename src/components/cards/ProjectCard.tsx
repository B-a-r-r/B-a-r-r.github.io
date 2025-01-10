import { coreImages } from '../../assets';
import {Project} from '../../data/dataTypes';
import styles from '../../style';
import Card from './Card';

const ProjectCard = ({id, title, content, tags, img}: Project) => {
    return ( 
        <div id={`card-${id}-container`}
            className=
            {`
                ${styles.sizeFull}
                ${styles.flexRow}
            `}
        >
            <img 
                src={img ? img : coreImages.sysiphus}
                alt="project image"
                className={`
                    object-cover
                    object-center
                    w-3/6
                    h-full
                `}
            />

            <Card title={title} content={content} tags={tags} />
        </div>
    );
}

export default ProjectCard;
