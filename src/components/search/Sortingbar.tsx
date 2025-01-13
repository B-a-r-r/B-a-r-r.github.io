import { useContext } from "react"
import styles from "../../style"
import { SortOption } from "../../data/dataTypes"
import { SearchContext } from "./SearchEngine";
import { DropdownSort } from "../dropdowns";

const SortingBar = () => {
    const { setToMatch } = useContext(SearchContext);
    const alreadyDisplayesItems = ["ALL"];

    return (
    <div id="sorting-bar-container"
        className=
        {`
            ${styles.sizeFit}
            ${styles.flexRow}
            ${styles.contentCenter}
        `}
    >
        {(Object.keys(SortOption) as Array<keyof typeof SortOption>)
        .slice(0,5)
        .map((option, index) => {
            alreadyDisplayesItems.push(option);
            return(
                <button key={index}
                    onClick={() => setToMatch([option])}
                    className=
                    {`
                        px-4
                        py-1
                        rounded-md
                        hover:text-[--color-tertiary]
                    `}
                > {option} 
                    <hr id='lib-hr'
                        className=
                        {`
                            ${styles.line}
                        `}
                    />
                </button>
            )
        })}

        <div id="dropdown-sort-container"
            className=
            {`
                ${styles.sizeFit}
                ${styles.flexRow}
                ml-[5%]
            `}
        >
            <DropdownSort alreadyDisplayesItems={alreadyDisplayesItems} />
        </div>
    </div>
  )
}

export default SortingBar
