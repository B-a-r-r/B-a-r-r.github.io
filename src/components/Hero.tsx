import { layout } from "../style"
import styles from "../style"
import { sysiphus_rotated } from "../assets"
import { socialMedia } from "../data"

const Hero = () => {

  return (
    <section 
      id="hero" 
      className=
      {`
        ${layout.section}
        ${styles.flexStart}
        relative
        bg-transparent
        overflow-visible
      `}
    >

        <div id="hero-text"
          className=
          {`
            relative
            flex-1
            ${styles.flexStart}
            flex-col
            xxl:mt-20 sm:mt-0 md:mt-0 lg:mt-0 2xl:mt-0 
          `}
        >
            
            <div id="hero-heading"
              className=
              {`
                ${styles.flexStart}
                flex-col 
                w-full"
              `}
              style={{fontSize: "64px"}}
            >
              <h1 className="
                font-primary-regular
                tracking-[0.09em] 
                color-primary
                leading-[72.4px]"
              >

                Clément <br/> 
                <a className=
                  {`
                    font-primary-bold 
                    xxl:text-[80px]
                    tracking-wider
                  `}
                > 
                  BARRIÈRE
                </a>
                <br className="sm:block hidden"/> {" "}

              </h1>

            </div>

            <hr className=
              {`
                absolute
                bg-[--light-color-tertiary]
                w-[300px]
                h-[3px]
                bottom-[125px]
                left-[135px]
                border-[0px]
              `}
            />

            <p className=
              {`
                ${styles.subtitle}
                max-w-[470px]
                mt-[70px]
              `}
            >
              Junior developer <br/>
              and creator.
            </p>

        </div>
        
        <div id="hero-image-container"
          className=
          {`
          `}
        >

          <img id="hero-image"
            src={sysiphus_rotated} 
            alt="Sysiphus" 
            className=
            {`
              absolute
              w-[60%]
              object-contain
              -right-16
              -top-28
            `}
          />

        </div>

        <div id="hero-socials"
          className=
          {`
            ${styles.flexEnd}
            flex-row
            absolute
            bottom-0
            right-0
          `}
        >
          {
            socialMedia.map((social) => {
              return (
                <a key={social.id} 
                  href={social.link}
                  className=
                  {`
                    ${styles.flexCenter}
                    w-[50px]
                    h-[50px]
                  `}
                >
                  <img src={social.icon} alt={social.id} />
                </a>
              )
            })
          }

        </div>

    </section>
  )
}

export default Hero
