import { Footer, Navbar } from '../components';
import { retex } from '../data/contents';
import styles from '../style';

type RetexProps = {
    projectTitle: string;
}

const Retex = ({projectTitle}: RetexProps) => {
    const relatedProject = retex.filter((retex) => retex.relatedProject === projectTitle)[0];
    console.log(relatedProject);
    if (typeof relatedProject === 'undefined' || relatedProject === null) { window.location.href = '/notfound'; return; }

    return (
        <div id='retex-container'
            className=
            {`
                ${styles.page}
                ${styles.flexCol}
                ${styles.contentCenter}
            `}
        >
            <div id="navbar-container"
            className={``}
            > 
                <Navbar />
            </div>

            <div id='retex-title-container'
                className=
                {`
                    ${styles.sizeFit}
                    ${styles.flexCol}
                    ${styles.contentStartAll}
                `}
            >
                <h1 id='retex-title'
                    className=
                    {`
                        font-primary-bold
                        text-[5rem]
                        color-scheme-primary
                    `}
                > {relatedProject.relatedProject} </h1>

                <hr className=
                    {`
                        ${styles.line}
                    `}
                />
            </div>
            
            <div id="footer-container"
            className={``}
            > 
                <Footer />
            </div>
        </div>
    )
}

export default Retex
