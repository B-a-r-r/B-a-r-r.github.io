import { Footer, Navbar, ProjectCard, Searchbar, SearchEngine, Sortingbar } from '../components'
import { projects } from '../data/contents'
import { Project } from '../data/dataTypes'
import styles from '../style'

const Projects = () => {

    return (
        <SearchEngine>
            <div id="projects-page-container"
                className=
                {`
                    ${styles.page}
                    ${styles.flexCol}
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
                        w-full
                        h-fit
                        ${styles.flexCol}
                        ${styles.contentStartY}
                        px-[12%]
                        py-[6%]
                    `}
                >
                    <div id='search-options-container'
                        className=
                        {`
                            w-full
                            h-fit
                            ${styles.flexRow}
                            ${styles.contentCenter}
                            space-x-[2%]
                        `}
                    >
                        <Searchbar />
                        
                        <Sortingbar />
                    </div>

                    <div id="projects-container"
                        className=
                        {`
                            w-full
                            ${styles.flexCol}
                            ${styles.contentStartY}
                            space-y-[5%]
                            px-[2%]
                            py-[10%]
                        `}
                    >
                        {projects.map((project: Project, index: number, all: Project[]) => (
                            <div key={`card-${project.id}`}
                                className=
                                {`
                                    w-full
                                    h-[400px] lg:h-[200px]
                                    overflow-hidden
                                    rounded-lg
                                    shadow-md
                                    cursor-pointer

                                    hover:scale-105
                                    transition-all
                                    duration-300
                                    ease-in-out
                                `}
                            >
                                <ProjectCard
                                    key={`card-${project.id}`}
                                    id={project.id}
                                    title={project.title}
                                    content={project.content}
                                    tags={project.tags}
                                    img={project.img}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div id="footer-container"
                className=
                {`
                `}
                > 
                    <Footer />
                </div>
            </div>
        </SearchEngine>
  )
}

export default Projects
