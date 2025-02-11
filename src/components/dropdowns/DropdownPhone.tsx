import { useContext, useEffect, useState } from 'react';
import { countryPhoneCodes } from '../../data/constants';
import Dropdown from './Dropdown';
import {PhoneCodeContext} from '../contact/ContactForm';

const DropdownPhone = () => {
    const { setPhoneCode } = useContext(PhoneCodeContext);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [selectedCode, setSelectedCode] = useState('+33');

    useEffect(() => {
        setPhoneCode(selectedCode);
    }, [selectedCode]);

    const phoneCodes = () => {
        return (
            countryPhoneCodes.sort((a, b) => a.code.localeCompare(b.code))
            .map((code) => (
                <li 
                    key={`code.id-${code.code}`} 
                    className=
                    {`
                        cursor-pointer
                        hover:text-[--color-tertiary]
                        z-[1]
                    `}
                    onClick={() => setSelectedCode(code.code)}
                >
                    {code.code}
                </li>
            ))
        );
    }

    return (
        <Dropdown animationStyle={{animation: `phone-dropdown-menu 0.5s 1 ${toggleMenu ? 'forwards' : 'reverte'}`}}
            items={phoneCodes()}
            itemState={[selectedCode, setSelectedCode]}
            menuState={[toggleMenu, setToggleMenu]}  
        />
            
    )
}

export default DropdownPhone
