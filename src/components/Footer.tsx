import styles from "../style"
import { copyrigthText, creditsMentions, navLinks } from "../data/constants"
import { getCurrentNavigation, shuffle } from "../utils"
import { useContext, useEffect, useState } from "react"
import { sharedLinks } from "../data/contents"
import DOMPurify from "dompurify"
import { LangContext } from "./language"

const Footer = () => {
  const [currentNavigation, setCurrentNavigation] = useState(getCurrentNavigation())
  const { currentLang } = useContext(LangContext)

  useEffect(() => {
    setCurrentNavigation(getCurrentNavigation())

  }, [window.location.pathname, window.location.hash])

  return (
    <footer id="footer"
      className=
      {`
        ${styles.sizeFull}
        px-[5%]
        2xl:pt-[2%] pt-[4%]
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
          lg:text-2xs
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
              lg:text-lg
            `}
          >Navigation</h3>

          {navLinks.filter((pattern) => pattern.route.includes(window.location.pathname.split("/")[1]))[0].links
          .map((navLink, index) => (
            <a key={`nav-link-${index}`}
              id={`nav-link-${navLink.content[currentLang]}`}
              href={navLink.link}
              className=
              {`
                ${(navLink.link).toLowerCase() === currentNavigation ? 'text-[--color-tertiary]' : ""}
                ${styles.hyperlink}
              `}
              onClick={() => setCurrentNavigation((navLink.link).toLowerCase())}
            > {navLink.content[currentLang] || navLink.content[0]} </a>
          ))}
        </div>

        <div id="credits-container"
          className=
          {`
            ${styles.flexCol}
            ${styles.contentStartAll}
            text-nowrap
          `}
        >
          <h3 id="credits-title"
            className=
            {`
              font-primary-semibold
              lg:text-lg
              w-full
            `}
          >Credits</h3>

          {creditsMentions.map((credit, index) => (
            <a key={`credit-${index}`}
              id={`credit-${credit.content[currentLang]}`}
              href={credit.link ? credit.link : credit.contentRef[0]}
              className={`${styles.hyperlink}`}
              target="_blank" 
              rel="noopener noreferrer"
            > {credit.content[currentLang]} </a>
          ))}
        </div>

        <div id="see-also-container"
          className=
          {`
            ${styles.flexCol}
            ${styles.contentStartAll}
            w-fit
            h-full
            text-nowrap
          `}
        >
          <h3 id="see-also-title"
            className=
            {`
              font-primary-semibold
              lg:text-lg
            `}
          >See also</h3>
          
          {/** This section can support 0 to 8 shared links, split in two columns */}
          <div id="see-also-links-cols"
            className=
            {`
              ${styles.flexRow}
              ${styles.sizeFull}
              space-x-[8%]
            `}
          >
            <div id="links-col-1"
              className=
              {`
                ${styles.sizeFull}
                ${styles.flexCol}
              `}
            >
              {shuffle(shuffle(sharedLinks)).map((link, index) => {
                if (index >= 4) {return;}

                return (
                  <a key={`credit-${index}`}
                    id={`credit-${index}`}
                    href={link.link}
                    className={`${styles.hyperlink}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  > {link.content[currentLang]} </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="copyrigth-container"
        className=
        {`
          ${styles.flexRow}
          ${styles.contentEndAll}
          ${styles.sizeFull}
          self-end
          text-3xs
        `}
      >
        {
          <a id="copyrigth" 
            href={copyrigthText.link}
            className=
            {`
              text-right
              ${styles.hyperlink}
            `}
            target="_blank" 
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(copyrigthText.content[0])}}
          />
        }
      </div>

    </footer>
  )
}

export default Footer
