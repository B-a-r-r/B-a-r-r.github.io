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
        md:${styles.flexRow} ${styles.flexCol}
        ${styles.contentCenter}
        md:space-x-[13%]
      `}
    >
        <div id='form-container'
            className=
            {`
              md:${styles.flexCol} hidden
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
              ${styles.contentCenter}
              md:space-y-[50%] space-y-[15%]
            `}
        >
          {socialMedia.map((social: SocialMedia) => (
            <div key={`icon-${social.label}-container`}
              className=
              {`
                md:${styles.flexCol} ${styles.flexRow}
                ${styles.contentStartAll}
                w-full
                h-fit
                md:space-y-[1%] space-y-[3%]
                md:color-scheme-primary color-scheme-secondary
                md:rounded-none rounded-lg
                md:p-[0] py-[3%] px-[5%]
                md:shadow-none shadow-md
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
                      md:w-[120%] w-[100%]
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

              <div className=
                  {`
                    md:hidden ${styles.flexCol}
                    ${styles.contentStartX}
                    ${styles.debugBorders}
                  `}
              >
                <label className=
                  {`
                    md:text-base text-xs
                    w-full
                    ${styles.contentStartX}
                  `}
                >{social.at}</label>
              </div>

              <label className=
                  {`
                    md:visible hidden
                    md:text-base text-xs
                    w-full
                    ${styles.contentStartX}
                  `}
              >{social.at}</label>
            </div>
          ))}
        </div>

        <div id='form-container'
            className=
            {`
              md:hidden ${styles.flexCol}
              w-full
              h-full
              ${styles.contentCenter}
              overflow-hidden
            `}
        >
          <ContactForm />
        </div>
    </section>
  )
}

export default Contact
