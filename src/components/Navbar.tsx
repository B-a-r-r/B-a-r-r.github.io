import { useContext, useEffect, useState } from "react";
import { navLinks } from "../data/constants";
import DropdownLang from "./dropdowns/DropdownLang";
import SwitchButton from "./theme/SwitchButton";
import styles from "../style";
import { getCurrentNavigation } from "../utils";
import { Link } from "react-router";
import { LangContext } from "./language";
import { menuIcons } from "../assets";

/**
* @description This component renders the navigation bar of the website, from the info in the constants file.
*/
const Navbar = () => {
  const [toggleBurger, setToggleBurger] = useState(true);
  const [currentNavigation, setCurrentNavigation] = useState(getCurrentNavigation());
  const { currentLang } = useContext(LangContext);

  useEffect(() => {
    setCurrentNavigation(getCurrentNavigation());
    console.log('currentNavigation', currentNavigation);
    console.log('currentLang', currentLang);
  }, [currentLang]);

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
          lg:flex hidden"
      >
        {
          navLinks
          .find(
            (nav) => nav.route.includes(window.location.pathname.split('/')[1])
          )?.links.map((nav) => (
            <>
              <li key={`${nav.label}-container`}
                className=
                {`
                    font-secondary-regular
                    tracking-widest
                    cursor-pointer
                    hover:text-[--color-tertiary]
                    text-nowrap
                    ${(nav.label[currentLang] ? nav.label[currentLang].toLowerCase()
                      : nav.label[0].toLowerCase()) === currentNavigation ? 'text-[--color-tertiary]' : ""}
                `}
              >
                {nav.link.includes('#') ?
                  <a href={nav.link}
                    onClick={() => setCurrentNavigation(nav.label[currentLang].toLowerCase())}
                  > {nav.label[currentLang] ? nav.label[currentLang] : nav.label[0]} </a> 
                  :
                  <Link to={nav.link}
                    onClick={() => setCurrentNavigation(nav.label[currentLang].toLowerCase())}
                  > {nav.label[currentLang] ? nav.label[currentLang] : nav.label[0]} </Link>
                }
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
          lg:flex hidden
        `}
      >

        <SwitchButton />

        <DropdownLang />

      </div>

      <div id="burger-container"
        className=
        {`
          ${styles.sizeFull}
          ${styles.contentEndX}
          lg:hidden flex flew-row
        `}
      >
        <button id="burger"
          className=
          {`
            ${styles.sizeFit}
          `}
          onClick={() => setToggleBurger(!toggleBurger)}
        >
          <img src=
            {toggleBurger ? menuIcons.burger_menu_icon 
            : menuIcons.close_menu_icon} 
            alt="burger"
            className=
            {`
              object-contain
              object-center
              h-[60px]
              self-end
            `}
          />
        </button>

        <div id="burger-menu"
          className=
          {`
            ${toggleBurger ? 'hidden' : 'flex'}
            ${styles.sizeFull}
            ${styles.flexCol}
            ${styles.contentEndY}
            bg-[--color-secondary]
            lg:hidden
          `}
        >
          {
            navLinks
            .find(
              (nav) => nav.route.includes(window.location.pathname.split('/')[1])
            )?.links.map((nav) => (
              <>
                <li key={`${nav.label}-container`}
                  className=
                  {`
                    font-secondary-regular
                    tracking-widest
                    cursor-pointer
                    hover:text-[--color-tertiary]
                    text-nowrap
                    ${(nav.label[currentLang] ? nav.label[currentLang].toLowerCase()
                      : nav.label[0].toLowerCase()) === currentNavigation ? 'text-[--color-tertiary]' : ""}
                  `}
                >
                  {nav.link.includes('#') ?
                    <a href={nav.link}
                      onClick={() => setCurrentNavigation(nav.label[currentLang].toLowerCase())}
                    > {nav.label[currentLang] ? nav.label[currentLang] : nav.label[0]} </a> 
                    :
                    <Link to={nav.link}
                      onClick={() => setCurrentNavigation(nav.label[currentLang].toLowerCase())}
                    > {nav.label[currentLang] ? nav.label[currentLang] : nav.label[0]} </Link>
                  }
                </li>
              </>
            ))
          }
          </div>
      </div>
    </nav>
  ) 
}

export default Navbar
