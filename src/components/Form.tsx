import React from 'react'
import styles from '../style'

function Form() {
  return (
    <form id='contact-form'
      className=
      {`
        ${styles.flexCol}
        ${styles.sizeFull}
        ${styles.contentCenter}
        color-secondary
      `}
    >
      <h2 id='form-title'
        className=
        {`
          ${styles.heading2}
        `}
      > Feel free<br/>to contact me  </h2>
        
      <div id="names-info">Names</div>

      <label id="email-label" htmlFor="email">Email</label>

      <div id="phone-info">Phone</div>

      <label id="message-info">Message</label>

      <label id="indication-label">Submit</label>

      <button type="submit">Submit</button>

    </form>
  )
}

export default Form
