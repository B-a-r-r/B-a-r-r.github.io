import { projects, retex } from '../data/contents';
import styles from '../style';
import DOMPurify from 'dompurify';
import { isOverflowing } from '../utils';
import { useContext, useEffect } from 'react';
import { LangContext } from './language';

type RetexProps = {
    projectTitle: string;
    displayed: React.Dispatch<React.SetStateAction<string | false>>;
}

const Retex = ({projectTitle, displayed}: RetexProps) => {

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
        if (isOverflowing(document.getElementById('specs')!)) {
            document.getElementById('img-1')!.style.display = 'none';
        }
        // if (isOverflowing(document.getElementById('notions')!)) {
        //     document.getElementById('img-2')!.style.display = 'none';
        // }
    }, []);

    const { currentLang } = useContext(LangContext);
    const relatedRetex = retex.find((project) => project.relatedProject === projectTitle);
    if (!relatedRetex) return (<></>);
    const relatedProject = projects.find((project) => project.title === projectTitle)!;

    return (
        <div id={`retex-${projectTitle}`}
            className=
            {`
                ${styles.sizeFull}
                ${styles.flexRow}
                ${styles.contentCenter}
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
                    h-full
                    w-2/5
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
                        h-1/3
                        font-primary-bold
                        text-5xl
                        tracking-wide
                        py-[6%]
                        px-[10%]
                        overflow-hidden
                        border-dashed
                    `}
                > 
                    {relatedRetex.relatedProject} 

                    <hr className=
                        {`
                            ${styles.line}
                            w-[50%]
                        `}
                    />

                    <span className=
                        {`
                            font-primary-regular
                            text-[50%]
                            self-end
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
                        w-full
                        h-2/3
                        ${styles.contentStartX}
                        py-[8%]
                        px-[10%]
                        space-y-[5%]
                        overflow-scroll
                    `}
                >
                    {relatedRetex.tools.map((tool, index) => (
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
                                    w-[15%]
                                `}
                            />

                            <label className=
                                {`
                                    
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
                    ml-[3%]
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
