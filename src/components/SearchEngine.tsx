import { useEffect, useState } from "react"
import styles from "../style"
import SortingBar from "./SortingBar"

const KeywordToMatch = () => {
    const [toMatch, SetToMatch] = useState<string[]>([])

    useEffect(() => {
        if (toMatch.length > 0 && toMatch.filter((word) => word === toMatch[toMatch.length-1]).length > 1) {
            SetToMatch([...toMatch.slice(0, toMatch.length-1)])
        }
        console.log(toMatch)
    }, [toMatch])

    return { toMatch, SetToMatch }
}

const SearchEngine = () => {
    const { toMatch, SetToMatch } = KeywordToMatch()

    const handleSearchBar = (value: string) => {
        const inputKeyword = value.split(' ')
        inputKeyword.map((input) => {
            SetToMatch([...toMatch, input])
        })
        
    }

    return (
        <div id='search-bar-container'
            className=
            {`
                w-full
                h-fit
                ${styles.flexRow}
                ${styles.contentCenter}
                space-x-6
            `}
        >
            <input type='search'
                placeholder='Enter a keyword...'
                className=
                {`
                    w-1/4
                    px-4
                    py-1
                    rounded-md
                `}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearchBar(e.currentTarget.value)
                    }
                }}
            />

            <SortingBar />
        </div>
  )
}

export {SearchEngine, KeywordToMatch}
