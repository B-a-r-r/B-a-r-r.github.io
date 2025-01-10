import { languages } from '../../data/constants';
import { Language } from '../../data/dataTypes';
import Dropdown from './Dropdown';
import { CSSProperties, useState } from 'react';

const DropdownLang = () => {
    const [toggleLang, setToggleLang] = useState(false);
    const [selectedLang, setSelectedLang] = useState('FR');

    const langItems = () => {
        return (
            languages
            .sort(function(a) { return a.country.symbol === selectedLang ? -1 : 1; })
            .map((lang: Language) => (
                <li 
                    key={lang.id} 
                    className=
                    {`
                        cursor-pointer
                        hover:text-[--light-color-tertiary]
                        z-[1]
                    `}
                    onClick={() => setSelectedLang(lang.country.symbol.toUpperCase())}
                >
                    {lang.country.symbol.toUpperCase()}
                </li>
            ))
        );
    }

    const dropdownAnimation: CSSProperties = {
        animation: `lang-dropdown-menu 0.5s 1 ${toggleLang ? 'forwards' : 'reverte'}`
    };

    return (
        <Dropdown items={langItems()} 
            animationStyle={dropdownAnimation} 
            menuState={[toggleLang, setToggleLang]}
            itemState={[selectedLang, setSelectedLang]}
        />
    )
}

export default DropdownLang
