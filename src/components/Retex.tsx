import { projects, retex } from '../data/contents';
import styles from '../style';
import DOMPurify from 'dompurify';
import { isOverflowing } from '../utils';
import { useContext, useEffect, useRef } from 'react';
import { LangContext } from './language';
import { menuIcons } from '../assets';

type RetexProps = {
    projectTitle: string | false;
    displayed: React.Dispatch<React.SetStateAction<string | false>>;
}

const Retex = ({projectTitle, displayed}: RetexProps) => {
    const { currentLang } = useContext(LangContext);

    useEffect(() => {
        document.addEventListener(
            'keydown', 
            (e) => {
                if (e.key === 'Escape') {
                    displayed(false);
                }
            }
        );
        document.getElementById(`retex-${projectTitle}`)?.addEventListener(
            'click',
            (e) => {
                if (e.target === document.getElementById(`retex-${projectTitle}`)) {
                    displayed(false);
                }
            }
        );
    }, [displayed, projectTitle]);

    const relatedRetex = retex.find((project) => project.relatedProject === projectTitle);
    if (!relatedRetex) {console.log(`Could not log retex titled ${projectTitle}`); return (<></>)};
    const relatedProject = projects.find((project) => project.title === projectTitle)!;

    return (
        <div id={`retex-${projectTitle}`}
            className=
            {`
                ${styles.sizeFull}
                ${styles.flexRow}
                p-[6%]
                relative
            `}
        > 

            <header id='retex-header'
                className=
                {`
                    h-fit
                    w-3/12
                    ${styles.flexCol}
                    z-[21]
                    color-scheme-secondary
                    rounded-lg
                    shadow-lg
                `}
            >
                <h1 className=
                    {`
                        w-full
                        font-primary-bold
                        text-3xl
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
                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(relatedRetex.relatedProject)}}
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
                    {relatedRetex.tools.slice(0, 6).map((tool, index) => (
                        <span key={`retex-skill-${index}`}
                            className=
                            {`
                                ${styles.flexRow}
                                ${styles.sizeFull}
                                ${styles.contentStartX}
                                space-x-[8%]
                            `}
                        >   
                            <img src={tool.icon}
                                alt={tool.label}
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
                                    text-sm
                                `}
                            > {tool.label} </label>
                        </span>
                    ))}
                </div>
            </header>

            <div id='retex-content'
                className=
                {`
                    ${styles.sizeFull}
                    ${styles.flexRow}
                    color-scheme-secondary
                    py-[3%]
                    px-[3%]
                    rounded-lg
                    shadow-lg
                    overflow-hidden
                    z-[22]
                    ml-[2%]
                    relative
                `}
            >
                <img src={menuIcons.close_menu_icon}
                    id='close-button'
                    className=
                    {`
                        absolute
                        top-[1%]
                        right-[1%]
                        z-[23]
                        ${styles.sizeFit}
                        cursor-pointer
                    `}
                    onClick={() => displayed(false)}
                />
                
                <div id='retex-text'
                    className=
                    {`
                        h-full
                        w-3/5
                        ${styles.flexCol}
                        text-wrap
                        overflow-hidden
                        mr-[5%]
                    `}
                >
                    <span id='specs'
                        className=
                        {`
                            ${styles.sizeFull}
                            text-sm
                            overflow-hidden
                        `}
                    >
                        <p className=
                            {`
                                ${styles.sizeFull}
                            `}
                            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(relatedRetex.specs[currentLang])}}
                        />
                    </span>

                    <span id='notions'
                        className=
                        {`
                            w-full
                            h-fit
                            min-h-[30%]
                            ${styles.flexRow}
                            ${styles.contentStartAll}
                            overflow-hidden
                        `}
                    >
                        <ul className=
                            {`
                                ${styles.sizeFull}
                                ${styles.flexCol}
                                ${styles.contentStartAll}
                                list-disc
                                list-inside
                                space-y-[5%]
                            `}
                        >
                            {relatedRetex.notions[currentLang].map((notion, index) => (
                                <li key={`notion-${index}`}
                                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(notion)}}
                                />
                            ))}
                        </ul>
                    </span>
                </div>
            
                <div id='retex-imgs'
                    className=
                    {`
                        h-full
                        w-2/5
                        ${styles.flexCol}
                        space-y-[10%]
                    `}
                >
                    <span id='image-1-container'
                        className=
                        {`
                            focus:fixed 
                            focus:top-[50%]
                            ${styles.sizeFull}
                            overflow-hidden
                            rounded-lg
                            -rotate-[3deg]
                            hover:rotate-1
                            transition-all
                            duration-200
                            ease-in-out
                        `}
                    >
                        <img id='img-1'
                            src={relatedRetex.img[0]}
                            alt="retex image"
                            className=
                            {`
                                aspect-video
                                object-cover
                                object-center
                                ${styles.sizeFull}
                                border-2
                            `}
                        />
                    </span>

                    <span id='image-2-container'
                        className=
                        {`
                            ${styles.sizeFull}
                            overflow-hidden
                            rounded-lg
                            rotate-[0.5deg]
                            hover:-rotate-1
                            transition-all
                            duration-200
                            ease-in-out
                        `}
                    >
                        <img id='img-2'
                            src={relatedRetex.img[1]}
                            alt="retex image"
                            className=
                            {`
                                aspect-video
                                object-cover
                                object-center
                                ${styles.sizeFull}
                                border-2
                            `}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Retex
