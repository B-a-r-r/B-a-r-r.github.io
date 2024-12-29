import { Project } from '../data/types';

const Card = ({id, title, content, tags}: Project) => {
    return ( 
        <div id={`card-${id as unknown as string}`}
            className={`
                xxl:w-[400px]
                xxl:h-[500px]
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
                    h-[15%]
                    color-secondary
                    cursor-pointer
                    px-[8%]
                `}
            >

                <h1 id="card-title"
                    className={`
                        font-primary-bold
                        xxl:text-[150%] lg:w-[140%]
                        py-[6%] 
                        tracking-widest"
                    `}
                >
                    {title.length > 30 ?
                    title.slice(0, 30) + '...' :
                    title}
                </h1>

            </header>

            <p id="card-text"
                className={`
                    w-full
                    h-[70%]
                    px-[8%]
                    py-[5%]
                    font-primary-regular
                    xxl:text-[130%]
                    cursor-pointer
                    overflow-hidden
                `}
            >
                {content.length > 300 ?
                content.slice(0, 300) + '...' :
                content}
            </p>

            <div id='card-tags'
                className={`
                    w-full
                    h-[15%]
                    flex-row
                    px-[8%]
                    py-[5%]
                    space-x-4
                    items-center
                    justify-start
                `}
            >
                {tags.map((tag, index) => {
                    if (index < 3) return (
                        <a id={`tag-${tag}`}
                            className={`
                                font-primary-regular
                                xxl:text-[120%] 
                                text-[--light-color-tertiary]
                                cursor-pointer
                            `}
                        >
                            {tag}
                        </a>
                    );
                })}
            </div>

        </div>
    );
}

export default Card;
