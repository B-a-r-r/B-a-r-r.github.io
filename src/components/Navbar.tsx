import { useContext, useEffect, useRef, useState } from "react";
import { navLinks } from "../data/constants";
import DropdownLang from "./dropdowns/DropdownLang";
import SwitchButton from "./theme/SwitchButton";
import styles from "../style";
import { getActiveBreakpoint, getCurrentNavigation, getRGBAThemeColor } from "../utils";
import { Link } from "react-router";
import { LangContext } from "./language";
import { menuIcons } from "../assets";

/**
* @description This component renders the navigation bar of the website, from the info in the constants file.
*/
const Navbar = () => {
  /**@constant toggleBurger true if the burger menu is clicked, else false.*/
  const [toggleBurger, setToggleBurger] = useState(true);
  /**@constant currentNavigation the current navigation, used to colorize the related label in the navbar. */
  const [currentNavigation, setCurrentNavigation] = useState(getCurrentNavigation());
  const [scrollData, setScrollData] = useState({current: 0, last: 0});
  const navbar = useRef<HTMLDivElement>(null);
  const { currentLang } = useContext(LangContext);

  const handleScroll = () => {
    setScrollData(prev => {return {current: window.scrollY, last: prev.current}});
  }

  /** If rather the currently used langage or the current navigation link changed, actualize
   * the current navigation label in the navbar.*/
  useEffect(() => {
    setCurrentNavigation(getCurrentNavigation());

  }, [window.location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    });

    return () => {window.removeEventListener('scroll', () => handleScroll());}
  }, []);

  useEffect(() => {
    if (!navbar.current) return;
    if (scrollData.current > scrollData.last
      && scrollData.current > navbar.current.clientHeight
      || scrollData.current - scrollData.last > 40
    ) {
      navbar.current.style.transform = "translateY(-100%)";

    } else if (scrollData.current < scrollData.last
      && scrollData.current > navbar.current.clientHeight
      || scrollData.last - scrollData.current > 30
    ) {
      navbar.current.style.transform = "translateY(0)";
    }
  }, [scrollData]);

  return (
    <nav id="navbar"
      ref={navbar}
      className=
      {`
        fixed
        top-0
        w-full
        items-center
        px-[5%]
        2xl:py-[0.8%] base:py-[1%]
        ${styles.flexRow}
        ${styles.contentStartX}
        bg-[${getActiveBreakpoint('number') as number <= 1 ? 
          getRGBAThemeColor("--color-primary", 0.9)
          : "--color-secondary"
        }]
        2xl:text-lg  xl:text-md  base:text-base
        transition-transform
        duration-300
        ease-in-out
      `}
    >
      <ul id="navbar-items"
        className="
          space-x-10
          list-none 
          lg:flex base:hidden"
      >
        {/**Map the navigation links from the data file according to the current URL.*/
        navLinks.find(
          (nav) => nav.route.includes(window.location.pathname.split('/')[1])
        )?.links.map((nav, index) => {
          let thisNav = nav.content[currentLang] ? nav.content[currentLang] : nav.content[0];
          return (
            <>
              <li key={`navlink-${index}`}
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
                    ${(nav.link).toLowerCase() === currentNavigation ? 'text-[--color-tertiary]' : ""}
                `}
              >
                {/** If the navigation link is an anchor on the page, it become an <a>. Else if it
                 * is supposed to redirect on another page, it become a React <Link>. */
                nav.link.includes('#') ?
                  <a href={nav.link}
                    onClick={() => setCurrentNavigation((nav.link).toLowerCase())}
                  > {thisNav} </a>
                  :
                  <Link to={nav.link}
                    onClick={() => setCurrentNavigation((nav.link).toLowerCase())}
                  > {thisNav} </Link>
                }
              </li>
            </>
          )
        })}
      </ul>

      <div id="navbar-options"
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexRow}
          ${styles.contentEndX}
          font-primary-regular
          space-x-[3%]
          lg:flex base:hidden
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
          ${getActiveBreakpoint('number') as number < 3 ?
            `${styles.flexRow}` : `hidden`
          }
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
              <li key={`navlink-mobile-${index}`}
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
                  ${(nav.content[currentLang] ? nav.content[currentLang].toLowerCase()
                    : nav.content[0].toLowerCase()) === currentNavigation ? 'text-[--color-tertiary]' : ""}
                `}
              >
                {nav.link.includes('#') ?
                  <a key={`${index}-a`}
                    href={nav.link}
                    onClick={() => setCurrentNavigation(nav.content[currentLang].toLowerCase())}
                  > {nav.content[currentLang] ? nav.content[currentLang] : nav.content[0]} </a> 
                  :
                  <Link key={`${index}-link`}
                    to={nav.link}
                    onClick={() => setCurrentNavigation(nav.content[currentLang].toLowerCase())}
                  > {nav.content[currentLang] ? nav.content[currentLang] : nav.content[0]} </Link>
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
