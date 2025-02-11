import styles from "../style"
import { copyrigthText, creditsMentions, navLinks } from "../data/constants"
import { getCurrentNavigation } from "../utils"
import { useContext, useState } from "react"
import { sharedLinks } from "../data/contents"
import DOMPurify from "dompurify"
import { LangContext } from "./language"

const Footer = () => {
  const [currentNavigation, setCurrentNavigation] = useState(getCurrentNavigation())
  const { currentLang } = useContext(LangContext)

  return (
    <footer id="footer"
      className=
      {`
        ${styles.sizeFull}
        px-[5%]
        pt-[4%]
        pb-[2%]
        ${styles.flexRow}
        color-scheme-secondary
        relative
        shadow-md
      `}
    >
      <div id="footer-content"
        className=
        {`
          h-full
          w-[200%]
          ${styles.contentStartAll}
          ${styles.flexRow}
          xxl:text-[130%]  xl:text-[75%]  lg:text-[80%]
          space-x-[15%]
        `}
      >
        <div id="nav-links-container"
          className=
          {`
            ${styles.flexCol}
            w-fit
          `}
        >
          <h3 id="nav-links-title"
            className=
            {`
              font-primary-semibold
              lg:text-[110%]
            `}
          >Navigation</h3>

          {navLinks.filter((pattern) => pattern.route.includes(window.location.pathname.split("/")[1]))[0].links
          .map((navLink, index) => (
            <a key={`nav-link-${index}`}
              id={`nav-link-${navLink.label}`}
              href={navLink.link}
              className=
              {`
                ${(navLink.label[currentLang] ? navLink.label[currentLang].toLocaleLowerCase() 
                  : navLink.label[0].toLocaleLowerCase()) === currentNavigation ? 'text-[--color-tertiary]' : ''}
                hover:text-[--color-tertiary]
                transition-all
                duration-150
                ease-in-out
              `}
              onClick={() => setCurrentNavigation(
                navLink.label[currentLang] ? navLink.label[currentLang].toLocaleLowerCase() 
                : navLink.label[0].toLocaleLowerCase()
              )}
            > {navLink.label[currentLang] || navLink.label[0]} </a>
          ))}
        </div>

        <div id="credits-container"
          className=
          {`
            ${styles.flexCol}
            ${styles.contentStartAll}
            
          `}
        >
          <h3 id="credits-title"
            className=
            {`
              font-primary-semibold
              lg:text-[110%]
              w-full
            `}
          >Credits</h3>

          {creditsMentions.map((credit, index) => (
            <a key={`credit-${index}`}
              id={`credit-${credit.label}`}
              href={credit.link ? credit.link : credit.contentRef[0]}
              className=
              {`
                hover:text-[--color-tertiary]
                transition-all
                duration-150
                ease-in-out
              `}
              target="_blank" 
              rel="noopener noreferrer"
            > {credit.label[currentLang]} </a>
          ))}
        </div>

        <div id="see-also-container"
          className=
          {`
            ${styles.flexCol}
            ${styles.contentStartAll}
          `}
        >
          <h3 id="see-also-title"
            className=
            {`
              font-primary-semibold
              lg:text-[110%]
            `}
          >See also</h3>

            {sharedLinks.map((link, index) => (
              <a key={`credit-${index}`}
                id={`credit-${index}`}
                href={link.link}
                className=
                {`
                  hover:text-[--color-tertiary]
                  transition-all
                  duration-150
                  ease-in-out
                `}
                target="_blank" 
                rel="noopener noreferrer"
              > {link.label[currentLang]} </a>
            ))}
        </div>
      </div>

      <div id="copyrigth-container"
        className=
        {`
          ${styles.flexRow}
          ${styles.contentEndAll}
          ${styles.sizeFull}
          self-end
          text-[60%]
        `}
      >
        {
          <a id="copyrigth" 
            href={copyrigthText.link}
            className=
            {`
              text-right
              hover:text-[--color-tertiary]
              transition-all
              duration-150
              ease-in-out
            `}
            target="_blank" 
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(copyrigthText.label)}}
          />
        }
      </div>

    </footer>
  )
}

export default Footer
