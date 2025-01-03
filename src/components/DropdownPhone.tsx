import styles from '../style'
import { menuIcons } from '../assets'
import { useState } from 'react';
import { countryPhoneCodes } from '../data/constants';
import { CountryPhoneCode } from '../data/types';

const DropdownPhone = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [selectedCode, setSelectedCode] = useState('+33');

    return (
        <div id="phone-dropdown-container"
            className=
            {`
                ${styles.flexRow}
                ${styles.contentCenter}
                relative
                font-tertiary-regular
            `}
            onClick={() => setToggleMenu((prev) => !prev)}
        >
            <button 
                id="dropdown-button"
                className=
                {`
                    ${styles.flexRow}
                    ${styles.contentCenter}
                    hover:text-[--light-color-tertiary]
                    cursor-pointer
                `}
            >
                {selectedCode}
                
                <img 
                    src={menuIcons.chevron_icon} 
                    alt="menu-down-arrow" 
                    className=
                    {`
                        object-cover 
                        ${styles.sizeFit}
                    `}
                />

            </button>
        
            <div id="phone-dropdown-items"
                className=
                {`
                    ${toggleMenu ? 'block' : 'hidden'}
                    z-[10]
                    absolute
                    px-4
                    pt-1
                    bg-[--light-color-secondary]
                    rounded-md
                    shadow-md
                    -top-1
                `}
                style={{
                    animation: `phone-dropdown-menu 0.5s 1 ${toggleMenu ? 'forwards' : 'reverte'}`,
                }}
            >
            
                <ul id='phone-id-list'
                    className=
                    {`
                        list-none
                        flex-col
                        xxl:leading-8 lg:leading-9 
                    `}
                >
                    {countryPhoneCodes.map((code: CountryPhoneCode) => (
                        <li 
                            key={`code.id-${code.code}`} 
                            className=
                            {`
                                cursor-pointer
                                hover:text-[--light-color-tertiary]
                                z-[1]
                            `}
                            onClick={() => setSelectedCode(code.code)}
                        >
                            {code.code}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default DropdownPhone
