import { useState } from "react"
import { close_icon, menu_burger_icon} from '../assets';
import { navLinks, languages } from "../constants";
import DropdownButton from "./DropdownButton";
import SwitchButton from "./SwitchButton";
import styles from "../style";

function Navbar() {
  const [toggleBurger, setToggleBurger] = useState(false);
  const [toggleLang, setToggleLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState('FR'.toUpperCase());
  const [currentNavigation, setCurrentNavigation] = useState('about');

  return (

    <section id="navbar"
      className=
      {`
        w-full
        px-10
        py-4
        ${styles.flexStart}
        color-secondary
        text-[20px]
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
                    tracking-wider
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

        <img 
          src={toggleBurger ? close_icon : menu_burger_icon} 
          alt="burger-menu" 
          className="w-[28px] h-[28px] object-contain" 
          onClick={() => setToggleBurger((prev) => !prev)}
        />

        {/* <div class="tham tham-e-squeeze tham-w-6">
          <div class="tham-box">
            <div class="tham-inner" />
          </div>
        </div>
          
        <script>
        const tham = document.querySelector(".tham");
          
        tham.addEventListener('click', () => {
          tham.classList.toggle('tham-active');
        }); */}

        <div id="navbar-mobile-meu-items"
          className=
          {`
              ${toggleBurger ? 'flex' : 'hidden'}
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
                  key={nav.id} 
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

      <div id="navbar-options"
        className=
        {`
          ${styles.flexCenter}
          text-[16px]
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
                  leading-8
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
      
    </section>
  )
}

export default Navbar
