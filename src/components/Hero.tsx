import styles from "../style"
import { discount, robot } from "../assets"
import CircularButton from "./CircularButton"

const Hero = () => (
  <section 
    id="home" 
    className=
    {`
      flex
      md:flex-row
      flex-col
      ${styles.paddingY}
    `}	
  >

      <div className=
        {`
          flex-1
          ${styles.flexStart}
          flex-col
          xl:px-0
          sm:px-16
          px-6
        `}
      >

          <div className="
            flex
            flex-row
            items-center
            py-[6px] 
            px-4
            bg-black-gradient
            rounded-[10px]
            mb-2"
          >
          
              <img 
                src={discount} 
                alt="discount" 
                className="w-[32px] h-[32px]" 
              />

              <p className=
                {`
                  ${styles.paragraph}
                  ml-2
                `}
              >
                Get
                <span className="text-white">
                  {" "} 50% off  {" "}
                </span>
                on your first order
              </p>

          </div>
          
          <div className="
            flex 
            flex-row 
            justify-between 
            items-center
            w-full"
          >
            <h1 className="
              flex-1 
              font-kameron
              font-semibold
              ss:text-[72px]
              text-[52px]
              text-white
              ss:leading-[100px]
              leading-[75px]"
            >

              Clément BARRIERE <br className="sm:block hidden"/> {" "}
              <span className="text-gradient">I'm a robot</span> {" "}

            </h1>
            
            <div className="ss:flex hidden md:mr-4 mr-0">
                  <CircularButton />
            </div>

          </div>

            <h1 className="
                font-poppins
                font-semibold
                ss:text-[68px]
                text-[52px]
                text-white
                ss:leading-[100px]
                leading-[75px]
                w-full"
            >
              Payment Method
            </h1>

            <p className=
              {`
                ${styles.paragraph}
                max-w-[470px]
                mt-5
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

      </div>

      {/* <div className=
        {`
          flex-1
          flex
          ${styles.flexCenter}
          md:my-0 
          my-10
          relative
        `}
      >

          <img 
            src={robot} 
            alt="robot" 
            className="w-[100%] h-[100%] relative z-[5]"
          />
          
          {/* Divs to render backroung lightening gradients }
          <div className="
            absolute
            z-[0]
            w-[40%]
            h-[35%]
            top-0
            pink__gradient
            opacity-15"
          />
          <div className="
            absolute
            z-[2]
            w-[100%]
            h-[100%]
            top-0
            white__gradient
            rounded-full
            bottom-40
            opacity-15"
          />
          <div className="
            absolute
            z-[1]
            w-[80%]
            h-[80%]
            top-0
            right-20
            bottom-20
            blue__gradient
            opacity-15"
          />

          <div className=
            {`
              ss:hidden
              ${styles.flexCenter}
            `}
          >
            <CircularButton />
          </div>

      </div>*/}

  </section>
)

export default Hero
