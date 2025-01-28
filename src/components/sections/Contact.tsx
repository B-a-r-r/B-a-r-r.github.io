import styles from '../../style'
import { Form } from '../contact'
import { SocialMedia } from '../../data/dataTypes'
import { socialMedia } from '../../data/constants'

const Contact = () => {
  return (
    <section id="contact"
      className=
      {`
        ${styles.sizeFull}
        ${styles.section}
        ${styles.flexRow}
        ${styles.contentCenter}
        space-x-[20%]
      `}
    >
        <div id='form-container'
            className=
            {`
              w-2/5
              h-full
              ${styles.contentCenter}
              overflow-hidden
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
              space-y-[30%]
            `}
        >
          {socialMedia.map((social: SocialMedia) => (
            <div key={`icon-${social.label}-container`}
              id={`icon-${social.label}-container`}
              className=
              {`
                ${styles.flexCol}
                ${styles.contentStartAll}
                ${styles.sizeFull}
                space-y-[1%]
              `}
            >
              <a href={social.link}
                className=
                {`
                  ${styles.flexRow}
                  ${styles.contentStartX}
                `}
              >
                <img id={`icon-${social.label}`}
                    src={social.icon} 
                    alt={social.label}
                    className=
                    {`
                      ${styles.sizeFull}
                      object-cover
                      w-[50px]
                      h-[50px]
                    `}
                />
              </a>
              <hr id={`line-${social.label}`}
                  className=
                  {`
                    ${styles.line}
                    w-[20%]
                    h-[2.5px]
                  `}
              />
              <label id={`label-${social.label}`}
                  className=
                  {`
                    w-full
                    ${styles.contentStartX}
                  `}
              >{social.at}</label>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Contact
