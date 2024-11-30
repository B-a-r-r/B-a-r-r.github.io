import { layout } from "../style"
import styles from "../style"
import { sysiphus } from "../assets"

const Hero = () => (
  <section 
    id="hero" 
    className=
    {`
      ${layout.section}
      ${styles.flexCenter}
      bg-transparent
    `}
  >

      <div id="hero-items"
        className=
        {`
          flex-1
          ${styles.flexStart}
          flex-col
          xl:px-0
          sm:px-16
          px-6
        `}
      >
          
          <div id="hero-heading"
            className=
            {`
              ${styles.flexStart}
              flex-col 
              w-full
              mb-[50px]"
            `}
          >
            <h1 className="
              flex-1 
              font-primary-regular
              ss:text-[72px]
              text-[80px]
              tracking-[0.1em]
              color-primary
              leading-[86.4px]"
            >

              Clément <br/> 
              <p className="
                font-primary-bold 
                text-[96px]
                tracking-wide"
              > 
                BARRIÈRE
              </p>
              <br className="sm:block hidden"/> {" "}

            </h1>

          </div>

            <hr className=
              {`
                self-end
                color-tertiary
                w-[65%]
                h-[5px]
                m-9
                mt-5
                mb-8
                border-0
              `}
            />

            <p className=
              {`
                ${styles.paragraph}
                max-w-[470px]
              `}
            >
              Junior developer <br/>
              and creator.
            </p>

      </div>
      
      <div id="image-container"
        className=
        {`
        `}
      >

        <img src={sysiphus} 
          alt="Sysiphus" 
          className="
            object-contain
            mt-10"
        />

      </div>

  </section>
)

export default Hero
