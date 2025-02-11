import { useContext, useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { SortOption } from '../../data/dataTypes';
import styles from '../../style';
import { SearchContext } from '../search';

type DropdownSortProps = {
    alreadyDisplayesItems?: string[]
}

const DropdownSort = ({alreadyDisplayesItems}: DropdownSortProps) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Other")
    const { toMatch, setToMatch } = useContext(SearchContext);

    useEffect(() => {
        if (selectedItem !== "Other") {
            setToMatch([selectedItem])
        }
    }, [selectedItem])

    useEffect(() => {   
        if (!toMatch.includes(selectedItem)) {
            setSelectedItem("Other")
        }
    }, [toMatch])

    const sortOptions = () => (
        (Object.keys(SortOption) as Array<keyof typeof SortOption>)
        .filter((option) => !alreadyDisplayesItems?.includes(option))
        .map((option) => {
            option = option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()
            return (
                <li 
                    key={`option-${option}-item`} 
                    className=
                    {`
                        cursor-pointer
                        hover:text-[--color-tertiary]
                        transition-all
                        duration-200
                        ease-in-out
                        z-[1]
                    `}
                    onClick={() => setSelectedItem(option.toUpperCase())}
                >
                    {option}
                </li>
            )
        }  
    ))

    return (
        <Dropdown items={sortOptions()}
            itemState={[selectedItem, setSelectedItem]}
            menuState={[toggleMenu, setToggleMenu]}
            animationStyle=
            {{
                animation: `fade-in 0.2s 1 ${toggleMenu ? 'forwards' : 'reverte'}`,
                fontSize: '90%',
                left: '-12%',
            }}
            additionalStyles=
            {`
                font-primary-regular 
                text-[110%] 
                ${styles.contentEndX}
            `}
            additionalButtonStyles=
            {`
                ${selectedItem === "Other" ? "" : "text-[--color-tertiary]"}
            `}
        />
    )
}

export default DropdownSort
