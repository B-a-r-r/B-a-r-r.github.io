import { CSSProperties } from "react";
import styles from "../../style";
import { menuIcons } from "../../assets";

/**
 * @description This type is used to define the props of the children to import.
 */
type DropdownProps = {
    items: JSX.Element[];
    animationStyle: CSSProperties;
    menuState: [boolean, (arg: boolean) => void];
    itemState: [string, (arg: string) => void];
    additionalStyles?: string;
    additionalButtonStyles?: string;
}

/**
 * @description This component is the base for specialized dropdown components.
 */
const Dropdown = ({items, animationStyle, menuState, itemState, additionalStyles, additionalButtonStyles}: DropdownProps) => {    
    const [toggleMenu, setToggleMenu] = menuState;
    const [selectedItem] = itemState;
    
    // Close the dropdown menu when the user clicks outside of it
    // or if a click appen outside of the dropdown menu 
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setToggleMenu(false);
        }
    });
    window.addEventListener('click', (e) => {
        if (!(e.target as HTMLElement).closest('#dropdown-container')) {
            setToggleMenu(false);
        }
    });

    return (
        <div id="dropdown-container"
            className=
            {`
                ${styles.flexRow}
                ${styles.contentCenter}
                relative
                ${additionalStyles}
            `}
            onClick={() => setToggleMenu(!toggleMenu)}
        >
            <button 
                id="dropdown-button"
                className=
                {`
                    ${styles.flexRow}
                    ${styles.contentCenter}
                    hover:text-[--color-tertiary]
                    transition-all
                    duration-200
                    ease-in-out
                    cursor-pointer
                    ${additionalButtonStyles}
                `}
            >
                {selectedItem}
                
                <img 
                    src={menuIcons.chevron_icon} 
                    alt="menu-down-arrow" 
                    className=
                    {`
                        object-cover 
                        w-4
                        rounded-full
                    `}
                />

            </button>
        
            <div id="dropdown-items"
                className=
                {`
                    ${toggleMenu ? 'block' : 'hidden'}
                    z-[10]
                    absolute
                    px-4
                    pt-1
                    bg-[--color-secondary]
                    rounded-md
                    shadow-md
                    -top-1
                    max-h-[125px]
                    overflow-y-scroll
                `}
                style={animationStyle}
            >
            
                <ul id='items-list'
                    className=
                    {`
                        list-none
                        flex-col
                        xxl:leading-8 lg:leading-9 
                    `}
                >
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
