import { useState } from "react"
import { close, menu, menu_down_arrow} from '../assets';
import { navLinks, languages } from "../constants";
import styles from "../style";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <section id="navbar"
      className=
      {`
        ${styles.flexStart}
        w-full
        navbar 
        color-secondary
        m-1
        ml-2
      `}
    >

      <ul id="navbar-items"
        className="
          list-none 
          sm:flex hidden 
          py-3
          px-6" 
        /* NB: hide the list on small screens */
      >
        {
          navLinks.map((nav, index) => (
            <>
              <li 
                key={nav.id + " " + index} 
                className=
                {`
                    font-secondary-regular
                    cursor-pointer 
                    text-[22px] 
                    ${index === navLinks.length-1 ? 'mr-0' : 'mr-4' /* if it's the last element, remove the margin right */}
                    text-black
                    pr-4
                `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>

              </li>
            </>
          ))
        }
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center" /* show the burger menu on small screens */>

        <img 
          src={toggle ? close : menu} 
          alt="burger-menu" 
          className="w-[28px] h-[28px] object-contain" 
          onClick={() => setToggle((prev) => !prev)}
        />

        <div id="mobile-menu"
          className=
          {`
              ${toggle ? 'flex' : 'hidden'}
              p-6
              bg-black-gradient
              absolute
              top-20
              right-0
              mx-4
              my-2
              min-w-[140px]
              rounded-[10px]
              sidebar
          `}
        >

          <ul className="list-none flex-col justify-end items-center flex-1">
            {
              navLinks.map((nav, index) => (
                <li 
                  key={nav.id + " " + index} 
                  className=
                  {`
                      font-poppins 
                      font-normal 
                      cursor-pointer 
                      text-[16px] 
                      ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} 
                      text-white
                      mb-4
                  `}
                >

                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>

                </li>
              ))
            }
          </ul>
          
        </div>

      </div>

      <div id="navbar-params"
        className=
        {`
          ${styles.flexEnd}
          flex-row
        `}
      >

        {/* <ThemeSwitch /> */}

        <div id="language-menu"
          className=
          {`
            ${styles.flexEnd}
            flex-row
          `}
        >

          <ul className=
            {`
              list-none 
              ${styles.flexCenter}
            `}
          >
            {
              languages.map((lang) => (
                <li 
                  key={lang.id} 
                  className=
                  {`
                      font-secondary-regular
                      cursor-pointer 
                      text-[16px] 
                      text-black
                      mr-10
                  `}
                >
                  {lang.label}
                </li>
              ))
            }
          </ul>

          <img 
            src={menu_down_arrow} 
            alt="menu-down-arrow" 
            className="object-contain" 
            onClick={() => {return true}}
          />

        </div>

      </div>
      
    </section>
  )
}

export default Navbar
