import styles from '../style'

interface CardProps {
    id: string;
    title: string;
    content: string;
    tags: string[];
}
  
const Card: React.FC<CardProps> = ({ id, title, content, tags }) => {
    return ( 
        <div id={id}
            className={`
                absolute
                w-[40%]
                h-fit
                color-primary
                flex
                flex-col
                shadow-md
                rounded-md
                overflow-hidden
            `}
        >

            <header id="card-header"
                className={`
                    w-full
                    color-secondary
                    ${styles.flexStart}
                    ${styles.cardHeading}
                    px-[8%]
                    cursor-pointer
                `}
            >

                <h1 id="card-title"
                    className={`
                    `}
                >
                    {title}
                </h1>

            </header>

            <div id='card-body'
                className={`
                    w-full
                    ${styles.flexCenter}
                    flex-col
                    space-y-6
                    px-[8%]
                    py-[6%]
                `}
            >

                <p id="card-text"
                    className={`
                        text-[150%]
                        cursor-pointer
                    `}
                >
                    {content}
                </p>

                <div id='card-tags'
                    className={`
                        w-full
                        flex
                        flex-row
                        space-x-8
                    `}
                >
                    {tags.map((tag) => (
                        <a id={`tag-${tag}`}
                            className={`
                                text-[--light-color-tertiary]
                                cursor-pointer
                            `}
                        >
                            {tag}
                        </a>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default Card;
