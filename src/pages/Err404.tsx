import styles from "../style"
import { errorMessages } from "../data/constants"
import DOMPurify from "dompurify"
import { Errors } from "../data/dataTypes"

const Err404 = () => {
  return (
    <section id='err404-container'
      className=
      {`
        ${styles.sizeScreen}
        ${styles.flexCol}
        ${styles.contentCenter}
        color-primary
      `}
    >
        <h1 id='err404-title'
          className=
          {`
            ${styles.contentCenter}
            lg:text-[200%]
            rounded-md
            color-secondary
            px-[2%]
            py-[1%]
          `}
        >Error {Errors.NOT_FOUND}</h1>

        <p id='err404-message'
          className=
          {`
            ${styles.sizeFit}
            ${styles.contentCenter}
          `}
          dangerouslySetInnerHTML={{__html: errorMessages.filter((message)=>message.error === Errors.NOT_FOUND)
          ? DOMPurify.sanitize(errorMessages.filter((message)=>message.error === Errors.NOT_FOUND)[0].content)
          :""}}
        />

        <button id='home-button'
          className=
          {`
            mt-[2%]
            text-[80%]
            rounded-lg
            border-2
            hover:bg-[--light-color-tertiary]
            px-[1%]
            py-[0.5%]
          `}
          onClick={() => window.location.href = "/"}
        >Back to home</button>

    </section>
  )
}

export default Err404
