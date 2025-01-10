import { cardContentMaxLength, cardTitleMaxLength } from '../../data/constants';
import styles from '../../style';
import DOMPurify from 'dompurify';

type CardProps = {
    title: string;
    content: string;
    tags: string[];
}

const Card = ({title, content, tags}: CardProps) => {
    return (
        <div id={`card-${title}`}
            className={`
                ${styles.sizeFull}
                ${styles.flexCol}
                color-primary
                aspect-[16/9]
            `}
        >
            <header id="card-header"
                className={`
                    w-full
                    h-[15%]
                    color-secondary
                    px-[8%]
                `}
            >
                <h3 id="card-title"
                    className={`
                        font-primary-bold
                        xxl:text-[150%] lg:w-[140%]
                        py-[6%] 
                        tracking-widest"
                        ${styles.paragraph}
                    `}
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(
                        title.length > cardTitleMaxLength ?
                        title.slice(0, cardTitleMaxLength) + '...' :
                        title
                    )}}
                />
            </header>

            <p id="card-text"
                className={`
                    w-full
                    h-[70%]
                    px-[8%]
                    py-[5%]
                    font-primary-regular
                    xxl:text-[130%]
                    overflow-hidden
                    ${styles.paragraph}
                `}
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(
                    content.length > cardContentMaxLength ?
                    content.slice(0, cardContentMaxLength) + '...' :
                    content
                )}}
            />
                        
            <div id='card-tags'
                className={`
                    w-full
                    h-[15%]
                    flex-row
                    px-[8%]
                    py-[1%]
                    space-x-4
                `}
            >
                {tags.map((tag, index) => {
                    return (
                        <a key={index}
                            id={`tag-${tag}`}
                            className={`
                                font-primary-regular
                                xxl:text-[120%] 
                                text-[--light-color-tertiary]
                            `}
                        > {tag} </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Card
