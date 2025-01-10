import styles from "../style"
import { copyrigthText, creditsMentions, navLinks } from "../data/constants"
import { getCurrentNavigation } from "../utils"
import { useState } from "react"

const Footer = () => {
  const [currentNavigation, setCurrentNavigation] = useState(getCurrentNavigation())

  return (
    <footer id="footer"
      className=
      {`
        w-full
        h-fit
        px-[5%]
        py-[2%]
        pt-[4%]
        ${styles.flexRow}
        color-secondary
        xxl:text-[130%]  xl:text-[75%]  lg:text-[80%]
        -space-x-[40%]
        relative
      `}
    >

      <div id="nav-links-container"
        className=
        {`
          ${styles.flexCol}
          ${styles.contentStartY}
          ${styles.sizeFull}
        `}
      >
        <h3 id="nav-links-title"
          className=
          {`
            ${styles.sizeFull}
            font-primary-semibold
            lg:text-[110%]
          `}
        >Navigation</h3>

        {navLinks.filter((pattern) => pattern.route === window.location.pathname)[0].links
        .map((navLink) => (
          <a key={`nav-link-${navLink.id}`}
            id={`nav-link-${navLink.id}`}
            href={navLink.link}
            className=
            {`
              ${navLink.label.toLocaleLowerCase() === currentNavigation ? 'text-[--light-color-tertiary]' : ''}
              hover:text-[--light-color-tertiary]
            `}
            onClick={() => setCurrentNavigation(navLink.label.toLocaleLowerCase())}
          > {navLink.label} </a>
        ))}
      </div>

      <div id="credits-container"
        className=
        {`
          ${styles.flexCol}
          ${styles.contentStartAll}
          ${styles.sizeFull}
        `}
      >
        <h3 id="credits-title"
          className=
          {`
            ${styles.sizeFull}
            font-primary-semibold
            lg:text-[110%]
          `}
        >Credits</h3>

        {creditsMentions.map((credit) => (
          <a key={`credit-${credit.label}`}
            id={`credit-${credit.label}`}
            href={credit.link ? credit.link : credit.contentRef}
            className={`hover:text-[--light-color-tertiary]`}
          > {credit.label} </a>
        ))}
      </div>

      <div id="copyrigth-container"
        className=
        {`
          ${styles.flexRow}
          ${styles.contentEndAll}
          ${styles.sizeFull}
          bottom-0 
          right-0
        `}
      >
        {
          <a id="copyrigth" 
            href={copyrigthText.link}
            className="hover:text-[--light-color-tertiary]"
          > {copyrigthText.label} </a>
        }
      </div>

    </footer>
  )
}

export default Footer
