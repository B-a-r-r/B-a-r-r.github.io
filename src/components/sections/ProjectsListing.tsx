import { useContext, useState, useEffect } from "react";
import { projects } from "../../data/contents";
import styles from "../../style"
import ProjectPreview from "../cards/ProjectPreview";
import Searchbar from "../search/Searchbar";
import { SearchContext } from "../search/SearchEngine";
import Sortingbar from "../search/Sortingbar";
import { Project } from "../../data/dataTypes";


const ProjectsListing = () => {
    const { toMatch } = useContext(SearchContext);
    const [displayedProjects, setDisplayedProjects] = useState(projects);

    useEffect(() => {
        const matchingProjects: Project[] = [];
        projects.filter((project) => toMatch.some((filter) => {
            switch (filter) {
                case "ALL":
                    matchingProjects.push(project);
                    break;
                case "NEWEST":
                    matchingProjects.push(project);
                    matchingProjects.sort((a, b) => a.date <= b.date ? 1 : -1);
                    console.log(matchingProjects);
                    break;
                case "OLDEST":
                    matchingProjects.push(project);
                    matchingProjects.sort((a, b) => a.date >= b.date ? 1 : -1);
                    break;
                default:
                    if (project.title.toUpperCase().split(' ').includes(filter) 
                    || project.content.toUpperCase().split(' ').includes(filter) 
                    || project.tags.map((tag) => tag.toUpperCase()).includes(filter)
                    ) {
                        matchingProjects.push(project);
                    }
            }
        }))
        setDisplayedProjects(matchingProjects);
    }, [toMatch]);

    return (
    <>
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
                h-fit
                ${styles.flexCol}
                ${styles.contentStartY}
                space-y-[5%]
                px-[2%]
                py-[10%]
            `}
        >
            {displayedProjects.map((project) => (
                <ProjectPreview
                    key={`card-${project.id}`}
                    id={project.id}
                    title={project.title}
                    content={project.content}
                    tags={project.tags}
                    img={project.img}
                    date={project.date}
                    retex={project.retex}
                />
            ))}
                    
            
        </div>
    </>
    )
}

export default ProjectsListing
