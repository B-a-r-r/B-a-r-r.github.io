import styles from "../style"

function Footer() {
  return (
    <section 
      className=
      {`
        w-full
        items-center
        px-[5%]
        py-[2%]
        mt-[15%]
        ${styles.flexRow}
        ${styles.contentStartAll}
        color-secondary
        xxl:text-[130%]  xl:text-[100%]  lg:text-[80%]
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

        <ul
          className=
          {`
            ${styles.sizeFull}
            list-none
          `}
        >
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>

      <div id="credits-container"
        className=
        {`
          ${styles.flexRow}
          ${styles.contentStartX}
          ${styles.sizeFull}
        `}
      >
      </div>

      <div id="copyrigth-container"
        className=
        {`
          ${styles.flexRow}
          ${styles.contentStartX}
          ${styles.sizeFull}
        `}
      >
      </div>

    </section>
  )
}

export default Footer
