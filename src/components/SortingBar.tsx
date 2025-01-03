import { useEffect, useState } from "react"
import styles from "../style"
import { sortOptions } from "../data/constants"
import { SortOption } from "../data/types"

const SortingBar = () => {
    const [selectedSortOptions, setSelectedSortOptions] = useState(
        sortOptions.filter((option) => option.value === "all")
    )

    return (
    <div id="sorting-bar-container"
        className=
        {`
            w-full
            h-fit
            ${styles.flexRow}
            ${styles.contentCenter}
        `}
    >
        {sortOptions.map((option, index) => (
            <button key={index}
                onClick={() => setSelectedSortOptions([...selectedSortOptions, option])}
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
