import styles from '../style'
import { menu_down_arrow } from '../assets'
import { useState } from 'react';
import { languages } from '../data/index';
import { Language } from '../data/types';

const DropdownLang = () => {
    const [toggleLang, setToggleLang] = useState(false);
    const [selectedLang, setSelectedLang] = useState('FR'.toUpperCase());

    return (
        <div id="lang-dropdown-container"
            className=
            {`
                ${styles.flexRow}
                ${styles.contentCenter}
                relative
                font-tertiary-regular
            `}
            onClick={() => setToggleLang((prev) => !prev)}
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
                {selectedLang}
                
                <img 
                    src={menu_down_arrow} 
                    alt="menu-down-arrow" 
                    className=
                    {`
                        object-cover 
                        ml-1
                        ${styles.sizeFit}
                    `}
                />

            </button>
        
            <div id="lang-dropdown-items"
                className=
                {`
                    ${toggleLang ? 'block' : 'hidden'}
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
                    animation: `lang-dropdown-menu 0.5s 1 ${toggleLang ? 'forwards' : 'reverte'}`,
                }}
            >
            
                <ul id='lang-list'
                    className=
                    {`
                        list-none
                        flex-col
                        xxl:leading-8 lg:leading-9 
                    `}
                >
                {
                    languages
                    .sort(function(a) { return a.label === selectedLang ? -1 : 1; })
                    .map((lang: Language) => (
                        <li 
                            key={lang.id} 
                            className=
                            {`
                                cursor-pointer
                                hover:text-[--light-color-tertiary]
                                z-[1]
                            `}
                            onClick={() => setSelectedLang(lang.label)}
                        >
                            {lang.label}
                        </li>
                    ))
                }
                </ul>

            </div>

        </div>
    )
}

export default DropdownLang
