import styles from '../../style';
import DOMPurify from 'dompurify';

type CardProps = {
    title: string;
    content: string;
    tags: string[];
    additionalClasses?: string;
}

const Card = ({title, content, tags, additionalClasses}: CardProps) => {
    return (
        <div id={`card-${title}`}
            className={`
                ${styles.sizeFull}
                ${styles.flexCol}
                color-scheme-primary
                z-10
                ${additionalClasses}
            `}
        >
            <header id="card-header"
                className={`
                    w-full
                    h-fit
                    color-scheme-secondary
                    px-[8%]
                    py-[3%]
                `}
            >
                <h3 id="card-title"
                    className={`
                        font-primary-bold
                        tracking-widest"
                        color-scheme-secondary
                    `}
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}
                />
            </header>

            <p id="card-text"
                className={`
                    w-full
                    h-fit
                    px-[8%]
                    py-[3%]
                    font-primary-regular
                `}
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}
            />
                        
            <div id='card-tags'
                className={`
                    w-full
                    h-fit
                    flex-row
                    px-[8%]
                    py-[1%]
                    mb-[1%]
                    space-x-4
                `}
            >
                {tags.slice(0, 3)
                .map((tag, index) => {
                    return (
                        <a key={index}
                            id={`tag-${tag}`}
                            className={`
                                font-primary-regular
                                text-[--color-tertiary]
                            `}
                        > {tag} </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Card
