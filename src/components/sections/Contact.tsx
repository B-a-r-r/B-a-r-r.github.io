import styles from '../../style'
import { ContactForm } from '../contact'
import { SocialMedia } from '../../data/dataTypes'
import { socialMedia } from '../../data/constants'

const Contact = () => {
  return (
    <section id="contact"
      className=
      {`
        ${styles.sizeFull}
        ${styles.flexRow}
        ${styles.contentCenter}
        space-x-[15%]
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
          <ContactForm />
        </div>

        <div id='contact-info'
            className=
            {`
              w-fit
              h-full
              ${styles.flexCol}
              ${styles.contentStartAll}
              space-y-[50%]
              mt-[15%]
            `}
        >
          {socialMedia.map((social: SocialMedia) => (
            <div key={`icon-${social.label}-container`}
              className=
              {`
                ${styles.flexCol}
                ${styles.contentStartAll}
                w-full
                h-fit
                space-y-[1%]
              `}
            >
              <a href={social.link}
                className=
                {`
                  ${styles.flexRow}
                  ${styles.contentStartX}
                `}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={social.icon} 
                    alt={social.label}
                    className=
                    {`
                      object-cover
                      aspect-square
                      w-[120%]
                    `}
                />
              </a>
              <hr className=
                  {`
                    ${styles.line}
                    w-[20%]
                    h-[2.5px]
                  `}
              />
              <label className=
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
