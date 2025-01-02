import { useState } from "react";
import { navLinks } from "../data/constants";
import DropdownLang from "./DropdownLang";
import SwitchButton from "./SwitchButton";
import styles from "../style";

const Navbar = () => {
  const [toggleBurger, setToggleBurger] = useState(true);
  const [currentNavigation, setCurrentNavigation] = useState('about');

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
        color-secondary
        xxl:text-[130%]  xl:text-[115%]  lg:text-[110%]
      `}
    >

      <ul id="navbar-items"
        className="
          space-x-10
          list-none 
          sm:flex hidden"
        /* NB: hide the list on small screens */
      >
        {
          navLinks.map((nav) => (
            <>
              <li key={`${nav.id}-container`}
                className=
                {`
                    font-secondary-regular
                    tracking-widest
                    cursor-pointer
                    hover:text-[--light-color-tertiary]
                    ${nav.label.toLowerCase() === currentNavigation ? 'text-[--light-color-tertiary]' : ""}
                `}
              >
                <a key={nav.id}
                  href={`#${nav.id}`}
                  onClick={() => setCurrentNavigation(nav.label.toLowerCase())}
                >
                  {nav.label}
                </a>

              </li>
            </>
          ))
        }
      </ul>

      <div id="navbar-mobile-menu-container"
        className="
          sm:hidden 
          flex 
          flex-1 
          justify-end 
          items-center" 
          /* show the burger menu on small screens */
      >
        <img id="navbar-burger"
          onClick={() => setToggleBurger((prev) => !prev)}
        />

        <div id="navbar-mobile-meu-items"
          className=
          {`
              ${toggleBurger ? 'flex' : 'hidden'}
              p-6
              bg-black
              absolute
              top-20
              right-0
              mx-4
              my-2
              min-w-[140px]
              rounded-[10px]
              sidebar
              z-[10]
          `}
        >

          <ul className="list-none flex-col justify-end items-center flex-1">
            {
              navLinks.map((nav, index) => (
                <li 
                  key={nav.id} 
                  className=
                  {`
                      font-poppins 
                      font-normal 
                      cursor-pointer 
                      ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} 
                      text-white
                      mb-4
                  `}
                >

                  <a href={`#${nav.id}`}>
                    {nav.label}
                  </a>

                </li>
              ))
            }
          </ul>
          
        </div>
      </div>

      <div id="navbar-options"
        className=
        {`
          ${styles.sizeFull}
          ${styles.flexRow}
          ${styles.contentEndX}
          font-primary-regular
          space-x-7
        `}
      >

        <SwitchButton />

        <DropdownLang />

      </div>

    </nav>
  ) 
}

export default Navbar
