import { useContext, useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import styles from '../../style';
import { SearchContext } from '../search';
import { placeholderMessages, sortOptions } from '../../assets/constants';
import { LangContext } from '../language';
import { SortOption } from '../../assets/dataTypes';

type DropdownSortProps = {
    alreadyDisplayedItems?: string[]
}

const DropdownSort = ({alreadyDisplayedItems}: DropdownSortProps) => {
    const { toMatch, setToMatch } = useContext(SearchContext);
    const { currentLang } = useContext(LangContext);
    const [toggleMenu, setToggleMenu] = useState(false);
    let dropdownPlaceholder = placeholderMessages.find((message) => message.context === 'dropdownSort')!.content[currentLang];
    const [selectedItem, setSelectedItem] = useState<SortOption>();
    const [placeholder, setPlaceholder] = useState(dropdownPlaceholder);

    useEffect(() => {
        if (selectedItem !== undefined) {
            setToMatch([
                selectedItem.abreviation ? selectedItem.abreviation.content[currentLang].toUpperCase()
                : selectedItem.content[currentLang].toUpperCase()
            ])
        }
    }, [selectedItem, dropdownPlaceholder, currentLang])

    useEffect(() => {
        if (!(selectedItem?.abreviation && toMatch.includes(selectedItem.abreviation.content[currentLang].toUpperCase()))
            && !(selectedItem?.content && toMatch.includes(selectedItem.content[currentLang].toUpperCase()))
        ) {
            setSelectedItem(undefined);
            setPlaceholder(dropdownPlaceholder)
        }
    }, [toMatch, currentLang])

    const displayedSortOptions = () => (
        sortOptions.filter((option) => !alreadyDisplayedItems?.includes(option.context))
        .map((option) => {
            return (
                <li key={`option-${option.context}-item`} 
                    className=
                    {`
                        cursor-pointer
                        text-nowrap
                        ${styles.hyperlink}
                        z-[1]
                    `}
                    onClick={() => {
                        setSelectedItem(option); 
                        setPlaceholder(
                            option.abreviation ? option.abreviation.content[currentLang] 
                            : option.content[currentLang]
                        );
                    }}
                > { option.content[currentLang] } </li>
            )
        }  
    ))

    return (
        <Dropdown items={displayedSortOptions()}
            itemState={[placeholder.toUpperCase(), (x) => {setPlaceholder((x === dropdownPlaceholder ? x : x.toUpperCase()))}]}
            menuState={[toggleMenu, setToggleMenu]}
            animationStyle=
            {{
                animation: `fade-in 0.2s 1 ${toggleMenu ? 'forwards' : 'reverte'}`,
                fontSize: '90%',
                left: '-13  %',
            }}
            additionalStyles=
            {`
                font-primary-regular 
                text-[110%] 
                text-nowrap
                ${styles.contentEndX}
            `}
            additionalButtonStyles=
            {`
                ${placeholder === dropdownPlaceholder ? "" : "text-[--color-tertiary]"}
            `}
        />
    )
}

export default DropdownSort
