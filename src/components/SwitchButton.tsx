import styles from "../style"

const SwitchButton = () => {
  return (
    <div className=
        {`
            ${styles.flexCenter}
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
                h-3
                w-9
                rounded-full 
                bg-[--light-color-quaternary]
                after:absolute 
                after:left-0 
                after:-bottom-1
                after:h-5
                after:w-5
                after:rounded-full 
                after:bg-[--light-color-quaternary]
                after:transition-all 
                after:content-[''] 
                peer-checked:bg-[--light-color-tertiary]
                peer-checked:after:translate-x-full 
                peer-focus:ring-[--light-color-tertiary]"
            />
        
        </label>

    </div>
  )
}

export default SwitchButton
