import styles from './style'
import { Footer, Navbar } from './components'
import { ReactNode } from 'react'

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div id='app-container' 
            className=
            {`
                ${styles.page}
                ${styles.flexCol}
            `}
        >
            <div id="navbar-container"
                    className={`
                    z-50
                    w-full
                    h-fit  
                `}
            > <Navbar /> </div>

            {children}

            <div id="footer-container"
                className={`
                    w-full
                    h-fit
                    ${styles.contentEndAll}
                `}
            > <Footer /> </div>
        </div>
    )
}

export default Layout
