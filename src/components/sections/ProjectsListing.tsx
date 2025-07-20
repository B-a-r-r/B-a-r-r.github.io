import { useContext, useState, useEffect } from "react";
import { projects } from "../../data/contents";
import styles from "../../style"
import ProjectPreview from "../cards/ProjectPreview";
import Searchbar from "../search/Searchbar";
import { SearchContext } from "../search/SearchEngine";
import Sortingbar from "../search/Sortingbar";
import { Retex } from "../../data/dataTypes";
import { LangContext } from "../language";
import { RetexViewer, RetexContext } from "../retex";
import { getActiveBreakpoint, randomNumberBetween } from "../../utils";
import { noDataMessages, sortOptions } from "../../data/constants";


const ProjectsListing = () => {
    const { toMatch } = useContext(SearchContext);
    const { currentLang } = useContext(LangContext);
    const [ displayedProjects, setDisplayedProjects ] = useState(projects);
    const { displayedRetexTitle } = useContext(RetexContext);

    useEffect(() => {
        const matchingProjects: Retex[] = [];
        projects.filter((project) => toMatch.some((filter) => {
            switch (filter) {
                case "ALL":
                    matchingProjects.push(project);
                    break;
                case "NEWEST":
                    matchingProjects.push(project);
                    matchingProjects.sort((a, b) => a.date <= b.date ? 1 : -1);
                    break;
                case "OLDEST":
                    matchingProjects.push(project);
                    matchingProjects.sort((a, b) => a.date >= b.date ? 1 : -1);
                    break;
                default:
                    if (!(toMatch.length === 1 /** Does the filter comes from the sorting bar ? */
                        && (sortOptions.find((option) => option.context === filter)
                        || sortOptions.find((option) => option.abreviation?.content[currentLang] === filter))
                        || sortOptions.find((option) => option.content[currentLang] === filter))
                    ) { 
                        if (filter.length > 1 && (project.title.toUpperCase().includes(filter) 
                        || project.description[currentLang].toUpperCase().includes(filter) 
                        || (Object(project.specs).length > 0 && project.specs[currentLang].toUpperCase().includes(filter))
                        || project.notions[currentLang]?.map((notion) => notion.toUpperCase()).includes(filter))
                        ) { matchingProjects.push(project); break;}
                    }
                    
                    let allTags: string[] = [];
                    for (const lang in project.tags) {
                        allTags.push(...project.tags[lang].map((tag) => tag.toUpperCase()));
                    }
                    if (allTags.includes(filter.toUpperCase())) {
                        matchingProjects.push(project);
                    }
            }
        }))
        setDisplayedProjects(matchingProjects);
    }, [toMatch, currentLang]);

    useEffect(() => {
        if (displayedRetexTitle != undefined) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "scroll";
        }
    }, [displayedRetexTitle]);

    return (
    <section id='projects-listing'
        className=
        {`
            ${styles.sizeFull}
            ${styles.flexCol}
            ${styles.contentCenter}
            relative
        `}
    >
        <div id='search-options-container'
            className=
            {`
                w-full
                h-fit
                ${getActiveBreakpoint("number") as number > 1 ? styles.flexRow : styles.flexCol}
                ${styles.contentCenter}
                md:space-x-[3%] base:space-x-[0]
                md:space-y-[0] base:space-y-[15%]
            `}
        >
            <Searchbar />
            
            <Sortingbar />
        </div>
        
        <div id='retex-container'
            className=
            {`
                ${displayedRetexTitle === undefined ? "hidden" : "block"}
                ${styles.sizeFull}
                fixed
                z-[20]
                top-0
                left-0
                backdrop-blur-md
                bg-black
                bg-opacity-30
            `}
            style={{
                animation: "fade-in 0.3s ease-in-out",
            }}
        >
            <RetexViewer />
        </div>

        <div id="projects-container"
            className=
            {`
                ${styles.flexWrap}
                ${styles.contentStartX}
                gap-x-[3%]
                w-full
                h-fit
                ${displayedProjects.length > 0 ? "" : "min-h-[50vh]"}
                ${displayedProjects.length > 0 ? styles.contentStartAll : styles.contentCenter}
                my-[3%]
                ml-[4%]
            `}
            style={{
                perspective: '2000px',
            }}
        >   
            {displayedProjects.length > 0 ? (toMatch.includes("NEWEST") || toMatch.includes("OLDEST") ?
                displayedProjects : displayedProjects.sort(() => randomNumberBetween(0,1) === 0 ? 1 : -1))
                .map((project) => (
                    <ProjectPreview key={`project-${project.title}-preview`} {...project} />
                ))
            : noDataMessages.find((message) => message.context === "projects")!.content[currentLang]}
        </div>
    </section>
    )
}

export default ProjectsListing
