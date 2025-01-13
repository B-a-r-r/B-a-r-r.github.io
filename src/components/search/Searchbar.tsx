import { useContext } from "react"
import styles from "../../style"
import { SearchContext } from "./SearchEngine"

const Searchbar = () => {
    const { setToMatch } = useContext(SearchContext);

    const handleSearchTerms = (searchTerms: string) => {
        setToMatch(
            [...searchTerms.toUpperCase().split(' ').filter((term) => ! term.includes(' '))]
        );
    }

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
                        handleSearchTerms(e.currentTarget.value);
                    }
                }}
            />
        </div>
  )
}

export default Searchbar;
