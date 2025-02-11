import styles from '../style'
import ProjectsListing from '../components/sections/ProjectsListing'
import { SearchEngine } from '../components/search/SearchEngine'

const Projects = () => {

    return (
        <div id="projects-page-container"
            className=
            {`
                ${styles.page}
                ${styles.flexCol}
                relative
            `}
        >
            <div id="content-container" 
                className=
                {`
                    w-full
                    h-fit
                    ${styles.flexCol}
                    ${styles.contentStartY}
                    px-[12%]
                    py-[6%]
                `}
            >
                <SearchEngine>
                    <ProjectsListing />
                </SearchEngine>
            </div>
        </div>
  )
}

export default Projects
