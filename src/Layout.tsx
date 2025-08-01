import styles from './style'
import { Footer, Navbar } from './components'
import { ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { getActiveBreakpoint, getRGBAThemeColor } from './utils'
import { RetexContext } from './components/retex'
import { ThemeContext } from './components/theme/ThemeEngine'

const Layout = ({children}: {children: ReactNode}) => {
    const { displayedRetexTitle } = useContext(RetexContext);
    const { currentTheme } = useContext(ThemeContext);
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
                    bg-[${
                        getActiveBreakpoint('number') as number <= 1 ?
                        "--color-mobile-navbar" : "--color-secondary"
                    }]
                `}
            > <Navbar /> </div>

            <div id='app-content-container'
                className=
                {`
                    ${styles.flexCol}
                    ${styles.sizeFull}
                    bg-[--color-layout-bg]
                `}
                style={{
                    minHeight: "calc(100vh - 120px)",
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
                    bg-[--color-secondary]
                `}
            > <Footer /> </div>
        </div>
    )
}

export default Layout
