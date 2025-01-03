import styles from "../style"

const Err404 = () => {
  return (
    <section id='err404-container'
      className=
      {`
        ${styles.sizeScreen}
        ${styles.flexCol}
        ${styles.contentCenter}
      `}
    >
        <h1 id='err404-title'
          className=
          {`
            ${styles.sizeFull}
            ${styles.contentCenter}
            color-primary
            lg:text-[200%]
          `}
        > Err 404: Page Not Found </h1>

    </section>
  )
}

export default Err404
