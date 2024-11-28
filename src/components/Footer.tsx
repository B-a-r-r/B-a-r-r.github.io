import styles from "../style"
import { footerLinks } from "../constants"

function Footer() {
  return (
    <section className=
      {`
        ${styles.flexCenter}
        ${styles.paddingY}
        flex-col
      `}
    >

      <div className=
        {`
          ${styles.flexStart}
          md:flex-row
          flex-col
          mb-8
          w-full
        `}
      >
        
          <div className="
            flex-1
            flex
            flex-col
            justify-start
            mr-10"
          >

            <p className=
              {`
                ${styles.paragraph}
                mt-4
                max-w-[310px]
              `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam, voluptate.
            </p>

          </div>

          <div className="
            flex-[1.5]
            w-full
            flex
            flex-row
            justify-between
            flex-wrap
            md:mt-0
            mt-10"
          >

            {
              footerLinks.map((footerLink) => (

                <div key={footerLink.title} 
                  className="
                    flex 
                    flex-col
                    ss:my-0
                    my-4
                    min-w-[150px]"
                >
                
                <h4>
                  {footerLink.title}
                </h4>

                <ul>

                  {
                    footerLink.links.map((link) => (
                      <li key={link.name}
                        className=
                        {`
                          
                        `}
                      >
                        <a href={link.link}>
                          {link.name}
                        </a>
                      </li>
                    ))
                  }

                </ul>

                </div>

              ))
            }

          </div>

      </div>

    </section>
  )
}

export default Footer
