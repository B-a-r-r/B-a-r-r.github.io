import { useEffect, useState } from "react"
import styles from "../style"
import { sortOptions } from "../data/constants"
import { SortOption } from "../data/types"
import { KeywordToMatch } from "./SearchEngine"

const SortingBar = () => {
    const { toMatch, SetToMatch } = KeywordToMatch()

    return (
    <div id="sorting-bar-container"
        className=
        {`
            w-fit
            h-fit
            ${styles.flexRow}
            ${styles.contentStartX}
        `}
    >
        {sortOptions.map((option, index) => (
            <button key={index}
                onClick={() => SetToMatch([...toMatch, option.value])}
                className=
                {`
                    px-4
                    py-1
                    rounded-md
                `}
            > {option.label} </button>
        ))}
        
    </div>
  )
}

export default SortingBar
