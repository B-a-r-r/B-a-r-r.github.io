import styles from '../style'
import { menu_down_arrow } from '../assets'

type DropdownButtonProps = {
    placeholder?: string
}

const DropdownButton = (placeholder?: DropdownButtonProps) => {
    
    return (
        <button 
            id="dropdown-button"
            className=
            {`
                ${styles.flexCenter}
                
                font-tertiary-regular
                xl:text-[160%] lg:text-[190%] md:text-[180%] text-[160%]
                hover:text-[--light-color-tertiary]
            `}
        >
            {typeof placeholder == "undefined" ? "" : placeholder.placeholder as string}
            
            <img 
                src={menu_down_arrow} 
                alt="menu-down-arrow" 
                className="
                    object-contain 
                    ml-1
                    xl:w-[11px] lg:w-[20px] md:w-[20px] w-[10px]"
            />

        </button>
    )
}

export default DropdownButton
