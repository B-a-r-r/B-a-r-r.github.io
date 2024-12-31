import styles from "../style"

const Retex = () => {
  return (
    <section id="retex"
        className=
        {`
            flex
            flex-col
            w-full
            h-full
            mt-[70px]
            color-primary
        `}
    >
        
        <div id="top-container"
            className=
            {`
                ${styles.flexCenter}
                flex-row
                border-2
                    border-[--light-color-quaternary]
            `}
        >

            <div id="specs-canvas"
                className=
                {`
                    w-full
                    h-full
                    border-2
                    border-[--light-color-quaternary]
                `}
            >
                <h2 className=
                    {`
                        ${styles.heading2}
                    `}
                >
                    Cahier des charges
                </h2>

                <p className=
                    {`
                        ${styles.flexCenter}
                        flex-row
                        ${styles.paragraph}
                        text-[28px]
                        ml-3
                    `}
                >
                    <hr className="w-[20px] h-[200px] bg-[--light-color-tertiary] mr-4" />
                    Towa est un jeu de plateau au tour par tour dans lequel les joueurs peuvent placer, empiler et détruire des tours. Le but étant de contrôller un maximum de toures au bout des 40 tours de jeu. 
                </p>
            </div>

            <div id="images-container"
                className=
                {`
                    w-full
                    h-full
                `}
            >

            </div>
        
        </div>

        <div id="bottom-container"
            className=
            {`
                ${styles.flexCenter}
                flex-row
            `}
        >

            <div id="logo-container"
                className=
                {`
                    w-full
                    h-full
                `}
            >

            </div>

            <div id="achievements-canvas"
                className=
                {`
                    w-full
                    h-full
                `}
            >

            </div>

            <div id="tools-canvas"
                className=
                {`
                    w-full
                    h-full
                `}
            >

            </div>

        </div>

    </section>
  )
}

export default Retex
