import { useContext } from "react"
import styles from "../../style"
import { SearchContext } from "./SearchEngine"

const Searchbar = () => {
    const { sortData, setSortData } = useContext(SearchContext);

    return (
        <div id='search-bar-container'
            className=
            {`
                ${styles.sizeFit}
            `}
        >
            <input type='search'
                placeholder='Enter a keyword...'
                className=
                {`
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
        </div>
  )
}

export default Searchbar;
