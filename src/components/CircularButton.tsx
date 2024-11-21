import styles from '../style'
import { arrowUp } from '../assets'

const CircularButton = () => (
    <div className=
        {`
            ${styles.flexCenter}
            w-[140px]
            h-[140px]
            rounded-full
            p-[4px]
            cursor-pointer
            bg-blue-gradient
        ` 
        /* button circular shape */ }
    >

        <div className=
            {`
                ${styles.flexCenter}
                flex-col
                bg-primary
                w-[100%]
                h-[100%]
                rounded-full
            `
            /* button iner circular shape to mime borders */ }
        > 
            <div className=
                {`
                    ${styles.flexStart}
                    flex-row
                `}
            >

                <p className='
                    font-poppins 
                    font-medium 
                    text-[18px]
                    leading-[23px]
                    mr-2'
                >
                    <span className='text-gradient'>
                        Get {` `}
                    </span>
                </p>

                <img src={arrowUp}
                        alt='arrow-up'
                        className='
                            w-[23px]
                            h-[23px]
                            object-contain'
                />

            </div>

                <p className='
                        font-poppins 
                        font-medium 
                        text-[18px]
                        leading-[23px]'
                >
                    <span className='text-gradient'>
                        Started
                    </span>
                </p>

        </div>  

    </div>
)

export default CircularButton
