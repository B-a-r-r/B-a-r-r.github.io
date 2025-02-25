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
  }, [currentLang, currentNavigation]);

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
        md:color-scheme-secondary color-scheme-primary
        xxl:text-[125%]  xl:text-lg  lg:text-base
      `}
    >

      <ul id="navbar-items"
        className="
          space-x-10
          list-none 
          lg:flex hidden"
      >
        {navLinks.find(
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
                    transition-all
                    duration-300
                    ease-in-out
                    text-nowrap
                    ${nav.label[0].toLowerCase() === currentNavigation ? 'text-[--color-tertiary]' : ""}
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
          min-h-[60px]
          ${styles.contentEndX}
          lg:hidden ${styles.flexRow}
          relative
        `}
      >
        <button id="burger"
          className=
          {`
            ${styles.sizeFull}
            ${styles.flexRow}
            ${styles.contentEndX}
            absolute
            top-0
            -right-${toggleBurger ? "0" : "5"}
            transition-all
            duration-300
            ease-in-out
          `}
          style={{
            zIndex: 1000,
          }}
          onClick={() => setToggleBurger(!toggleBurger)}
        >
          <img src=
            {toggleBurger ? menuIcons.burger_menu_icon 
            : menuIcons.close_menu_icon} 
            alt="burger"
            className=
            {`
              object-cover
              object-center
              w-[${toggleBurger ? "15%" : "12%"}] 
              transition-all
              duration-300
              ease-in-out
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
            lg:hidden
            relative
          `}
          style={{
            zIndex: 999,
            animation: 'burger-menu-apparition 0.5s ease-in-out'
          }}
        >
          <ul className=
            {`
              list-none
              absolute
              color-scheme-secondary
              -top-10
              -right-5
              px-[8%]
              pt-[25%]
              pb-[5%]
              space-y-[10%]
              shadow-md
              rounded-md
            `}
          >
            {navLinks
            .find(
              (nav) => nav.route.includes(window.location.pathname.split('/')[1])
            )?.links.map((nav, index) => (
              <li key={`${index}`}
                className=
                {`
                  font-secondary-regular
                  tracking-widest
                  cursor-pointer
                  hover:text-[--color-tertiary]
                  text-nowrap
                  transition-all
                  duration-300
                  ease-in-out
                  ${(nav.label[currentLang] ? nav.label[currentLang].toLowerCase()
                    : nav.label[0].toLowerCase()) === currentNavigation ? 'text-[--color-tertiary]' : ""}
                `}
              >
                {nav.link.includes('#') ?
                  <a key={`${index}-a`}
                    href={nav.link}
                    onClick={() => setCurrentNavigation(nav.label[currentLang].toLowerCase())}
                  > {nav.label[currentLang] ? nav.label[currentLang] : nav.label[0]} </a> 
                  :
                  <Link key={`${index}-link`}
                    to={nav.link}
                    onClick={() => setCurrentNavigation(nav.label[currentLang].toLowerCase())}
                  > {nav.label[currentLang] ? nav.label[currentLang] : nav.label[0]} </Link>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar
