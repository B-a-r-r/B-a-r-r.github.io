import styles from './style'
import { Footer, Navbar } from './components'
import { ReactNode, useContext, useEffect, useRef } from 'react'
import { getActiveBreakpoint, getRGBAThemeColor } from './utils'
import { RetexContext } from './components/retex'

const Layout = ({children}: {children: ReactNode}) => {
    const { displayedRetexTitle } = useContext(RetexContext);
    const navbarContainer = useRef<HTMLDivElement>(null);
    const footerContainer = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (displayedRetexTitle != undefined) {
            navbarContainer.current?.classList.add("hidden");
            footerContainer.current?.classList.add("hidden");
        }
        else {
            navbarContainer.current?.classList.remove("hidden");
            footerContainer.current?.classList.remove("hidden");
        }
    }, [displayedRetexTitle]);

    return (
        <div id='app-container'
            className=
            {`
                ${styles.page}
                ${styles.flexCol}
                relative
            `}
        >
            <div id="navbar-container"
                ref={navbarContainer}
                className={`
                    z-50
                    top-0
                    w-full
                    h-fit
                    min-h-[60px]
                    bg-[${getActiveBreakpoint('number') as number <= 1 ? 
                        getRGBAThemeColor("--color-primary", 0.9)
                        : "--color-secondary"
                    }]
                `}
            > <Navbar /> </div>

            <div id='app-content-container'
                className=
                {`
                    ${styles.flexCol}
                    ${styles.sizeFull}
                `}
                style={{
                    minHeight: "calc(100vh - 120px)",
                    backgroundColor: `${getRGBAThemeColor("--color-primary", 0.8)}`,
                }}
            > {children} </div>

            <div id="footer-container"
                ref={footerContainer}
                className={`
                    z-50
                    bottom-0
                    min-h-[60px]
                    w-full
                    h-fit
                    ${styles.contentEndAll}
                `}
            > <Footer /> </div>
        </div>
    )
}

export default Layout
