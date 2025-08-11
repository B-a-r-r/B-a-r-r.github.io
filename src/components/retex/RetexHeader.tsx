import { useContext } from "react"
import styles from "../../style"
import DOMPurify from "dompurify"
import { LangContext } from "../language"
import { Hyperlink, Skill } from "../../assets/dataTypes"
import { ThemeContext } from "../theme/ThemeEngine"

type RetexHeaderProps = {
    title: {[lang: string]: string},
    date: Date,
    tools: Skill[],
    additionalRessources?: Hyperlink[]
}

const RetexHeader = (relatedProject: RetexHeaderProps) => {
    const { currentLang } = useContext(LangContext)
    const { currentTheme } = useContext(ThemeContext);

    return (
        <header id='retex-header'
            className=
            {`
                h-fit
                w-3/12
                ${styles.flexCol}
                z-[21]
                overflow-hidden
            `}
        >
            <div id='retex-header-main'
                className=
                {`
                    ${styles.flexCol}
                    color-scheme-secondary
                    rounded-lg
                    shadow-lg
                `}
            >
                <h1 className=
                    {`
                        w-full
                        font-primary-bold
                        2xl:text-4xl text-3xl
                        tracking-wide
                        py-[6%]
                        px-[10%]
                        border-dashed
                        space-y-[6%]
                        mb-[3%]
                    `}
                > 
                    <p className=
                        {`
                            ${styles.flexWrap}
                            ${styles.contentStartX}
                            leading-8
                        `}
                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(relatedProject.title[currentLang] || relatedProject.title[0])}}
                    />

                    <hr className=
                        {`
                            ${styles.line}
                            w-[50%]
                        `}
                    />

                    <span className=
                        {`
                            font-primary-regular
                            text-[60%]
                        `}
                    > 
                    {relatedProject.date.toLocaleDateString(
                        currentLang === 'fr' ? 'fr' : 'en', 
                        {month: 'numeric', year: 'numeric'}
                    )} 
                    </span>
                </h1>

                <div id='retex-skills'
                    className=
                    {`
                        ${styles.flexCol}
                        ${styles.sizeFull}
                        ${styles.contentStartX}
                        px-[10%]
                        py-[8%]
                        pt-[6%]
                        space-y-[6%]
                        overflow-hidden
                    `}
                >
                    {relatedProject.tools.slice(0, 6).map((tool, index) => (
                        <span key={`retex-skill-${index}`}
                            className=
                            {`
                                ${styles.flexRow}
                                ${styles.sizeFull}
                                ${styles.contentStartX}
                                space-x-[8%]
                            `}
                        >   
                            <img src={tool.icon.content[currentTheme]}
                                alt={tool.icon.alt}
                                className=
                                {`
                                    object-cover
                                    object-center
                                    aspect-square
                                    w-[25%]
                                `}
                            />

                            <label className=
                                {`
                                    font-primary-regular
                                    2xl:text-lg base:text-sm
                                `}
                            > {tool.label} </label>
                        </span>
                    ))}
                </div>
            </div>

            <div id='retex-header-additional'
                className=
                {`
                    ${styles.flexCol}
                `}
            >
                <ul id='retex-header-additional-ressources'
                    className=
                    {`
                        ${styles.sizeFull}
                        ${styles.flexCol}
                        list-none
                        text-wrap
                        ml-[6%]
                        mt-[8%]
                        text-[90%]
                    `}
                >
                    {relatedProject.additionalRessources ? 
                        relatedProject.additionalRessources.map((resource, index) => (
                            <li key={`retex-resource-${index}`}
                                className=
                                {`
                                    ${styles.sizeFull}
                                    ${styles.flexRow}
                                    ${styles.contentStartX}
                                    space-x-[3%]
                                    ${currentTheme === 'dark' ? 'text-[--color-tertiary]' : 'text-[--color-primary]'}
                                    hover:text-white
                                    hover:cursor-pointer
                                    hover:translate-x-[2%]
                                    transition-all
                                    duration-400
                                    ease-in-out
                                `}
                            >   
                                <a target='_blank'
                                    href={resource.link}
                                > → {resource.content[currentLang]} </a>
                            </li>
                        ))
                    : null}
                </ul>
            </div>
        </header>
    )
}

export default RetexHeader
