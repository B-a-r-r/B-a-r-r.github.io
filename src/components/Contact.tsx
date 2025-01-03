import styles from '../style'
import Form from './Form'
import { SocialMedia } from '../data/types'
import { socialMedia } from '../data/constants'

const Contact = () => {
  return (
    <section id="contact"
      className=
      {`
        ${styles.sizeFull}
        ${styles.section}
        ${styles.flexRow}
        ${styles.contentCenter}
      `}
    >
        <div id='form-container'
            className=
            {`
              w-2/5
              h-full
              ${styles.contentCenter}
            `}
        >
          <Form />
        </div>

        <div id='contact-info'
            className=
            {`
              w-fit
              h-full
              ${styles.flexCol}
              ${styles.contentCenter}
            `}
        >
          {socialMedia.map((social: SocialMedia) => (
            <div key={`${social.id}-icon-container`}
              id={`${social.id}-icon-container`}
              className=
              {`
                ${styles.flexCol}
                ${styles.contentStartAll}
                ${styles.sizeFull}
              `}
            >
              <a href={social.link}
                className=
                {`
                  ${styles.flexRow}
                  ${styles.contentStartX}
                `}
              >
                <img id={`${social.id}-icon`}
                    src={social.icon} 
                    alt={social.id}
                    className=
                    {`
                      ${styles.sizeFull}
                      object-cover
                      w-[50px]
                    `}
                />
              </a>
              <hr id={`${social.id}-line`}
                  className=
                  {`
                    ${styles.line}
                  `}
              />
              <label id={`${social.id}-label`}
                  className=
                  {`
                    w-full
                    ${styles.contentStartX}
                  `}
              >{social.link}</label>
            </div>
          ))}
        </div>
      
    </section>
  )
}

export default Contact
