import { useState } from "react"
import { navLinks, languages } from "../data";
import DropdownButton from "./DropdownButton";
import SwitchButton from "./SwitchButton";
import styles from "../style";

function Navbar() {
  const [toggleBurger, setToggleBurger] = useState(true);
  const [toggleLang, setToggleLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState('FR'.toUpperCase());
  const [currentNavigation, setCurrentNavigation] = useState('about');

  const tham = document.querySelector(".tham");
  if (tham) {
    tham.addEventListener('click', () => {
      tham.classList.toggle('tham-active');
    });
  }

  return (

    <nav id="navbar"
      className=
      {`
        w-full
        items-center
        px-[5%]
        py-[0.8%]
        ${styles.flexStart}
        ${styles.navbartext}
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
              <li 
                key={nav.id} 
                className=
                {`
                    font-secondary-regular
                    tracking-widest
                    cursor-pointer
                    hover:text-[--light-color-tertiary]
                    ${nav.id === currentNavigation ? 'text-[--light-color-tertiary]' : ""}
                `}
              >
                <a href={`#${nav.id}`}
                  onClick={() => setCurrentNavigation(nav.id)}
                >
                  {nav.title}
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

        <div className=
          {`
            tham 
            tham-e-spin 
            tham-w-6
            tham-active:true
          `}
          onClick={() => setToggleBurger((prev) => !prev)}
        >

          <div className="tham tham-e-squeeze tham-w-6">
            <div className="tham-box">
              <div className="tham-inner" />
            </div>
          </div>

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
                    {nav.title}
                  </a>

                </li>
              ))
            }
          </ul>
          
        </div>

        </div>
      </div>

      <div id="navbar-options"
        className=
        {`
          ${styles.flexCenter}
          ${styles.navbartext}
          font-primary-regular
          space-x-10
        `}
      >

        <SwitchButton />

        <div id="selected-lang"
          className=
          {`
            ${styles.flexEnd}
            flex-row
            cursor-pointer
          `}
          onClick={() => setToggleLang((prev) => !prev)}
        >

          <div id="lang-dropdown-container"
            className=
            {`
              ${styles.flexCenter}
              relative
            `}
          >
            <DropdownButton placeholder={selectedLang} />
          
            <div id="lang-dropdown-items"
              className=
              {`
                ${toggleLang ? 'flex' : 'hidden'}
                xxl:text-[130%] lg:text-[130%] md:text-[130%] text-[20%]
                z-[10]
                absolute
                top-0
                px-4
                mr-2
                bg-[--light-color-secondary]
                rounded-[7px]
                shadow gray-600 
              `}
            >
            
              <ul className=
                {`
                  list-none
                  flex-col
                  xxl:leading-8  lg:leading-10 md:leading-8 sm:leading-7 leading-6
                `}
              >
                {
                  languages
                  .sort(function(a) { return a.label === selectedLang ? -1 : 1; })
                  .map((lang) => (
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

        </div>

      </div>

    </nav>
  ) 
}

export default Navbar
