import styles from "../style"

const SwitchButton = () => {
  return (
    <label id="switch-container"
        className=
        {`
            ${styles.sizeFit}
            ${styles.flexRow}
            ${styles.contentCenter}
            z-[10]
            relative 
            cursor-pointer
        `}
    >
            <input id="switch" 
                type="checkbox" 
                className="peer sr-only" 
            />

            <div id="switch-ruler"
                className=
                {`
                    peer 
                    xxl:h-4     xl:h-4      lg:h-3      md:h-4      h-3
                    xxl:w-10     xl:w-10     lg:w-8     md:w-12     w-10
                    rounded-full 
                    bg-[--light-color-quaternary]

                    after:absolute 
                    after:-left-1
                    xl:after:-bottom-1   lg:after:-bottom-1.    md:after:-bottom-1 
                    xxl:after:h-6   xl:after:h-6    lg:after:h-5    md:after:h-5    after:h-5
                    xxl:after:w-6   xl:after:w-6    lg:after:w-5    md:after:w-5    after:w-5
                    after:rounded-full 
                    after:bg-[--light-color-quaternary]
                    after:transition-all 
                    after:content-['']

                    peer-checked:bg-[--light-color-quaternary]
                    peer-checked:after:translate-x-full 
                    peer-focus:ring-[--light-color-quaternary]
                `}
            />
    </label>
  )
}

export default SwitchButton
