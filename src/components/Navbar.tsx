import { useState } from "react";
import { navLinks } from "../data/constants";
import DropdownLang from "./dropdowns/DropdownLang";
import SwitchButton from "./theme/SwitchButton";
import styles from "../style";
import { getCurrentNavigation } from "../utils";

/**
* @description This component renders the navigation bar of the website, from the info in the constants file.
*/
const Navbar = () => {
  const [toggleBurger, setToggleBurger] = useState(true);
  const [currentNavigation, setCurrentNavigation] = useState(getCurrentNavigation());

  return (
    <nav id="navbar"
      className=
      {`
        w-full
        items-center
        px-[5%]
        py-[1%]
        ${styles.flexRow}
        ${styles.contentStartX}
        color-scheme-secondary
        test
        xxl:text-[125%]  xl:text-[115%]  lg:text-[102%]
      `}
    >

      <ul id="navbar-items"
        className="
          space-x-10
          list-none 
          sm:flex hidden"
      >
        {
          navLinks
          .filter((nav) => nav.route === window.location.pathname)[0].links
          .map((nav) => (
            <>
              <li key={`${nav.id}-container`}
                className=
                {`
                    font-secondary-regular
                    tracking-widest
                    cursor-pointer
                    hover:text-[--color-tertiary]
                    ${nav.label.toLowerCase() === currentNavigation ? 'text-[--color-tertiary]' : ""}
                `}
              >
                <a href={nav.link}
                  onClick={() => setCurrentNavigation(nav.label.toLowerCase())}
                >
                  {nav.label}
                </a>

              </li>
            </>
          ))
        }
      </ul>

      <div id="navbar-options"
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexRow}
          ${styles.contentEndX}
          font-primary-regular
          space-x-[3%]
        `}
      >

        <SwitchButton />

        <DropdownLang />

      </div>
    </nav>
  ) 
}

export default Navbar
