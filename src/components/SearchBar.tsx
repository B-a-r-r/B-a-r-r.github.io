import styles from "../style"

const SearchBar = () => {
  return (
    <div id='search-bar-container'
        className=
        {`
            w-full
            h-fit
            ${styles.flexRow}
            ${styles.contentCenter}
        `}
    >
        <input type='search'
            placeholder='Enter a keyword...'
            className=
            {`
                w-full
                px-4
                py-1
                rounded-md
            `}
        />
    </div>
  )
}

export default SearchBar
