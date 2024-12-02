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
                py-1
                font-tertiary-regular
                text-[18px]
                hover:text-[--light-color-tertiary]
            `}
        >
            {typeof placeholder == "undefined" ? "" : placeholder.placeholder as string}
            
            <img 
                src={menu_down_arrow} 
                alt="menu-down-arrow" 
                className="object-contain ml-1"
            />

        </button>
    )
}

export default DropdownButton
