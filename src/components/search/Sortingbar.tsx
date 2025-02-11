import { useContext } from "react"
import styles from "../../style"
import { SortOption } from "../../data/dataTypes"
import { SearchContext } from "./SearchEngine";
import { DropdownSort } from "../dropdowns";

const SortingBar = () => {
    const { toMatch, setToMatch } = useContext(SearchContext);
    const alreadyDisplayedItems = ["ALL"];

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
            alreadyDisplayedItems.push(option);
            return(
                <button key={index}
                    onClick={() => setToMatch([option])}
                    className=
                    {`
                        px-4
                        py-1
                        rounded-md
                        hover:text-[--color-tertiary]
                        transition-all
                        duration-300
                        ease-in-out
                        ${option === toMatch[0] ? "text-[--color-tertiary]" : ""}
                    `}
                > {option} 
                    <hr id='lib-hr'
                        className=
                        {`
                            ${styles.line}
                        `}
                        style={{animation: "hr-apparition 0.5s forwards ease-in-out"}}
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
            <DropdownSort alreadyDisplayesItems={alreadyDisplayedItems} />
        </div>
    </div>
  )
}

export default SortingBar
