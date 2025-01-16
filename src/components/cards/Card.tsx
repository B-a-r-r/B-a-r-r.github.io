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
                space-y-[5%]
                ${additionalClasses}
            `}
        >
            <header id="card-header"
                className={`
                    w-full
                    h-1/5
                    color-scheme-secondary
                    py-[2%]
                `}
            >
                <h3 id="card-title"
                    className={`
                        font-primary-bold
                        tracking-wide
                        color-scheme-secondary
                        px-[8%]
                    `}
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}
                />
            </header>

            <p id="card-text"
                className={`
                    w-full
                    h-2/5
                    px-[8%]
                    font-primary-regular
                    text-ellipsis
                `}
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}
            />
                        
            <div id='card-tags'
                className={`
                    w-full
                    flex-row
                    px-[8%]
                    pb-[3%]
                    overflow-x-auto
                    justify-self-end
                    space-x-[2%]
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
