import { useState } from "react"
import { close, logo, menu} from '../assets';
import { navLinks, navLinksSeperator } from "../constants";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">

      {/* <img 
        src={logo} 
        alt="my-logo" 
        className="w-[124px] h-[32px]" 
      /> */}

      <ul className="
        list-none 
        sm:flex hidden 
        justify-around
        items-center 
        flex-1
        bg-black
        p-4" 
        /* NB: hide the list on small screens */
      >
        {
          navLinks.map((nav, index) => (
            <>
              <li 
                key={nav.id} 
                className=
                {`
                    font-poppins 
                    font-normal 
                    cursor-pointer 
                    text-[16px] 
                    ${index === navLinks.length-1 ? 'mr-0' : 'mr-4' /* if it's the last element, remove the margin right */}
                    text-white
                `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>

              </li>
              
              {/* add a separator after each element except the last one */}
              {/* {index === navLinks.length-1 ? null :
                <li 
                  key={navLinksSeperator(index).id} 
                  className="
                    text-white
                    font-poppins
                    mr-4"
                > 
                  {navLinksSeperator(index).title}
                </li>
              } */}
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

        <div className=
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
    </div>
  )
}

export default Navbar
