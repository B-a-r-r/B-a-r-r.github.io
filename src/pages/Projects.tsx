import { Navbar, SearchBar, SortingBar } from '../components'
import styles from '../style'

const Projects = () => {
  return (
    <div id="projects-page-container"
        className=
        {`
            ${styles.page}
        `}
    >
        <div id="navbar-container"
        className={``}
        > 
        
        <Navbar />

        </div>

        <div id="content-container" 
            className=
            {`
                ${styles.sizeFull}
                ${styles.flexCol}
                px-[12%]
                overflow-visible
            `}
        >
            <div id='search-options-container'
                className=
                {`
                    ${styles.sizeFull}
                `}
            >
                <SearchBar />
                <SortingBar />
            </div>

        </div>
    </div>
  )
}

export default Projects
