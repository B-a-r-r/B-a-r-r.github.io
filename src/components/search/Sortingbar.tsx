import { useContext, useEffect } from "react"
import styles from "../../style"
import { SortOption } from "../../data/dataTypes"
import { SearchContext } from "./SearchEngine";

const SortingBar = () => {
    const { toMatch, setToMatch } = useContext(SearchContext);

    useEffect(() => {
        console.log(toMatch);
    }, [toMatch]);

    return (
    <div id="sorting-bar-container"
        className=
        {`
            ${styles.sizeFit}
            ${styles.flexRow}
        `}
    >
        {(Object.keys(SortOption) as Array<keyof typeof SortOption>)
        .map((option, index) => (
            <button key={index}
                onClick={() => setToMatch([...toMatch, option])}
                className=
                {`
                    px-4
                    py-1
                    rounded-md
                `}
            > {option} 
                <hr id='lib-hr'
                    className=
                    {`
                    ${styles.line}
                    `}
                />
            </button>
        ))}
        
    </div>
  )
}

export default SortingBar
