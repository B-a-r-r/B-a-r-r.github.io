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
                w-full
                h-full
                color-primary
                flex
                flex-col
                shadow-md
                rounded-md
                px-[8%]
            `}
        >

            <header id="card-header"
                className={`
                    w-full
                    h-full
                    color-secondary
                    cursor-pointer
                `}
            >

                <h1 id="card-title"
                    className={`
                        ${styles.cardHeading}
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
                    py-[6%]
                    xxl:text-[150%] lg:text-[100%]
                `}
            >

                <p id="card-text"
                    className={`
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
                        space-x-[5%]
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
