import styles from "../style"

const SwitchButton = () => {
  return (
    <div className=
        {`
            ${styles.flexCenter}
            z-[10]
        `}
    >

        <label className="
            relative 
            inline-flex 
            cursor-pointer 
            items-center"
        >

            <input id="switch" 
                type="checkbox" 
                className="peer sr-only" 
            />

            <div className="
                peer 
                xl:h-4      lg:h-4      md:h-4      h-3
                xl:w-11     lg:w-12     md:w-12     w-10
                rounded-full 
                bg-[--light-color-quaternary]
                after:absolute 
                after:left-0 
                xl:after:-bottom-1   lg:after:-bottom-1.5    md:after:-bottom-1 
                xl:after:h-6    lg:after:h-7    md:after:h-5    after:h-5
                xl:after:w-6    lg:after:w-7    md:after:w-5    after:w-5
                after:rounded-full 
                after:bg-[--light-color-quaternary]
                after:transition-all 
                after:content-['']  
                peer-checked:bg-[--light-color-quaternary]
                peer-checked:after:translate-x-full 
                peer-focus:ring-[--light-color-quaternary]"
            />
        
        </label>

    </div>
  )
}

export default SwitchButton
