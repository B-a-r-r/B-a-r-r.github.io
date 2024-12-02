import { layout } from "../style"
import styles from "../style"
import { sysiphus } from "../assets"
import { socialMedia } from "../constants"

const Hero = () => {
  // const adjustFontSize = (elementId: string, coeff: number) => {
  //   const elementFontSize: string | undefined = document.getElementById(elementId)?.style.fontSize.split("px")[0];
  //   console.log(elementFontSize);
  //   console.log(Math.round(parseInt(elementFontSize || "0") * coeff).toString());
  //   return (Math.round(parseInt(elementFontSize || "0") * coeff)).toString();
  // }

  return (
    <section 
      id="hero" 
      className=
      {`
        ${layout.section}
        ${styles.flexCenter}
        relative
        bg-transparent
        md:space-x-[130px]
        2xl:space-x-[100px]
        
      `}
    >

        <div id="hero-text"
          className=
          {`
            relative
            w-1/3
            flex-1
            ${styles.flexStart}
            flex-col
            xl:px-0
            mb-[270px]
          `}
        >
            
            <div id="hero-heading"
              className=
              {`
                ${styles.flexStart}
                flex-col 
                w-full
                mt-[20px]
                mb-[50px]"
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
                    text-[80px]
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
                ${styles.paragraph}
                text-[36px]
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
            w-full
            ${styles.flexCenter}
            
          `}
        >

          <img id="hero-image"
            src={sysiphus} 
            alt="Sysiphus" 
            className=
            {`
              w-[700px]
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
