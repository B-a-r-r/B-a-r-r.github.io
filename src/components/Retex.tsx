import { projects, retex } from '../data/contents';
import styles from '../style';
import DOMPurify from 'dompurify';
import { isOverflowing } from '../utils';
import { useContext, useEffect, useRef } from 'react';
import { LangContext } from './language';

type RetexProps = {
    projectTitle: string;
    displayed: React.Dispatch<React.SetStateAction<string | false>>;
}

const Retex = ({projectTitle, displayed}: RetexProps) => {
    const { currentLang } = useContext(LangContext);
    const isVerifyed = useRef(false);

    useEffect(() => {
        document.addEventListener(
            'keydown', 
            (e) => {
                if (e.key === 'Escape') {
                    displayed(false);
                }
            }
        );
    }, []);

    useEffect(() => {
    }, [isVerifyed]);

    const relatedRetex = retex.find((project) => project.relatedProject === projectTitle);
    if (!relatedRetex) {console.log(`Could not log retex titled ${projectTitle}`); return (<></>)};
    const relatedProject = projects.find((project) => project.title === projectTitle)!;
    isVerifyed.current = true;

    return (
        <div id={`retex-${projectTitle}`}
            className=
            {`
                ${styles.sizeFull}
                ${styles.flexRow}
                ${styles.contentStartY}
                p-[6%]
                relative
            `}
        >
            <button id='close-button'
                className=
                {`
                    absolute
                    top-[12%]
                    right-[4%]
                    z-[23]
                    ${styles.sizeFit}
                `}
                onClick={() => displayed(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

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
                        overflow-hidden
                        border-dashed
                        space-y-[6%]
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
                        overflow-scroll
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
                    ${styles.flexCol}
                    color-scheme-secondary
                    py-[3%]
                    px-[3%]
                    space-x-[3%]
                    space-y-[3%]
                    rounded-lg
                    shadow-lg
                    overflow-hidden
                    z-[22]
                    ml-[2%]
                    text-justify
                `}
            >
                <span id='specs'
                    className=
                    {`
                        w-full
                        h-3/5
                        ${styles.flexRow}
                        text-xs
                    `}
                >
                    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(relatedRetex.specs[currentLang])}}/>
                    
                    {/* <img id='img-1'
                        src={relatedRetex.img[0]}
                        alt="retex image"
                        className=
                        {`
                            aspect-video
                            object-contain
                            object-center
                            w-[10%]
                        `}
                    /> */}
                </span>

                <span id='notions'
                    className=
                    {`
                        w-full
                        h-2/5
                        ${styles.flexRow}
                        ${styles.contentStartX}
                        justify-evenly
                    `}
                >
                    <ul className='list-disc text-wrap w-1/2'>
                        {relatedRetex.notions[currentLang].map((notion, index) => (
                            <li key={`notion-${index}`}
                                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(notion)}}
                            />
                        ))}
                    </ul>
                    
                    <img id='img-2'
                        src={relatedRetex.img[1]}
                        alt="retex image"
                        className=
                        {`
                            aspect-video
                            object-contain
                            object-center
                            w-1/2
                        `}
                    />
                </span>

            </div>
        </div>
    )
}

export default Retex
