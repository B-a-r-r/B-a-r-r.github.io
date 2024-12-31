import React from 'react'
import styles from '../style'
import Form from './Form'

const Contact = () => {
  return (
    <section id="contact"
      className=
      {`
        ${styles.section}
        ${styles.flexRow}
        ${styles.sizeFull}
        ${styles.contentCenter}
      `}
    >
        <Form />

        <div id='contact-info'
            className=
            {`
                ${styles.flexCol}
                ${styles.sizeFull}
                ${styles.contentStartX}
            `}
        >

        </div>
      
    </section>
  )
}

export default Contact
