import { useEffect, useState } from 'react'
import { Footer, Navbar, ProjectCard, SearchEngine } from '../components'
import { projects } from '../data/contents'
import { Project } from '../data/types'
import styles from '../style'
import DOMPurify from "dompurify"

const Projects = () => {

    return (
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
                    py-12
                    space-y-14
                `}
            >
                <div id='search-options-container'
                    className=
                    {`
                        w-full
                        h-fit
                        ${styles.flexRow}
                        ${styles.contentStartY}
                    `}
                >
                    <SearchEngine />
                </div>

                <div id="projects-container"
                    className=
                    {`
                        w-full
                        ${styles.flexCol}
                        ${styles.contentStartY}
                        space-y-6
                        px-16
                    `}
                >
                    {projects.map((project: Project, index: number, all: Project[]) => (
                        <div key={`card-${project.id}`}
                            className=
                            {`
                                w-full
                                h-[400px]
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
            className={`
            `}
            > 
            
            <Footer />

            </div>
        </div>
  )
}

export default Projects
