import { useContext, useState, useEffect } from "react";
import { projects } from "../../data/contents";
import styles from "../../style"
import ProjectPreview from "../cards/ProjectPreview";
import Searchbar from "../search/Searchbar";
import { SearchContext } from "../search/SearchEngine";
import Sortingbar from "../search/Sortingbar";
import { Project } from "../../data/dataTypes";
import { LangContext } from "../language";
import Retex from "../Retex";


const ProjectsListing = () => {
    const { toMatch } = useContext(SearchContext);
    const { currentLang } = useContext(LangContext);
    const [displayedProjects, setDisplayedProjects] = useState(projects);
    const [ toggleRetexTitled, setToggleRetexTitled ] = useState<string | false>(false);

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
                    || project.content[currentLang].toUpperCase().split(' ').includes(filter) 
                    || Array.from(Object.keys(project.tags)).map((tag) => tag.toUpperCase()).includes(filter)
                    ) {
                        matchingProjects.push(project);
                    }
            }
        }))
        setDisplayedProjects(matchingProjects);
    }, [toMatch]);

    useEffect(() => {
        if (toggleRetexTitled) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "scroll";
        }
    }, [toggleRetexTitled]);

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
                ${styles.flexWrap}
                gap-x-[3%]
                gap-y-[4%]
                w-full
                h-fit
                ${styles.contentStartAll}
                py-[10%]
            `}
        >
            {
            !toggleRetexTitled ? "" :
                <div id='retex-container'
                    className=
                    {`
                        ${toggleRetexTitled === "" ? "hidden" : "block"}
                        ${styles.sizeFull}
                        fixed
                        z-[20]
                        top-0
                        left-0
                        backdrop-blur-md
                        bg-black
                        bg-opacity-30
                    `}
                >
                    <Retex projectTitle={toggleRetexTitled} displayed={setToggleRetexTitled} />
                </div>
            }
            
            {displayedProjects.map((project) => (
                <ProjectPreview key={`project-${project.title}-preview`}
                    project={project}
                    retexToggler={setToggleRetexTitled}
                />
            ))}
        </div>
    </>
    )
}

export default ProjectsListing
