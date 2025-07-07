import { projects } from '../../data/contents';
import styles from '../../style';
import DOMPurify from 'dompurify';
import { adjustFontSize, isOverflowing } from '../../utils';
import { useContext, useEffect, useRef, useState } from 'react';
import { LangContext } from '../language';
import { coreImages, menuIcons } from '../../assets';
import { RetexContext } from './RetexDisplayEngine'

const RetexViewer = () => {
    const { currentLang } = useContext(LangContext);
    const { displayedRetexTitle, setDisplayedRetex } = useContext(RetexContext);
    const [focusedImage, setFocusedImage] = useState<string | null>(null);
    const specsContainer = useRef<HTMLSpanElement>(null);
    const notionsContainer = useRef<HTMLSpanElement>(null);
    const retexContainer = useRef<HTMLDivElement>(null);
    const notionsList = useRef<HTMLUListElement>(null);
    const headerContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener(
            'keydown', 
            (e) => {
                if (e.key === 'Escape') {
                    setFocusedImage(null)
                    setDisplayedRetex(undefined)
                }
            }
        );
        document.addEventListener(
            'click',
            (e) => {
                if (e.target === document.getElementById(`retex-${displayedRetexTitle}`)) {
                    setDisplayedRetex(undefined);
                }
            }
        );
        window.addEventListener('resize', handleTextOverflow);

        return () => {
            document.removeEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    setFocusedImage(null)
                    setDisplayedRetex(undefined)
                }
            });
            document.removeEventListener(
                'click',
                (e) => {
                    if (e.target === document.getElementById(`retex-${displayedRetexTitle}`)) {
                        setDisplayedRetex(undefined);
                    }
                }
            );
            window.removeEventListener('resize', handleTextOverflow);
        }
    }, [displayedRetexTitle]);

    useEffect(() => {
        handleTextOverflow();
    }, [displayedRetexTitle]);
    
    const handleTextOverflow = () => {
        if (!specsContainer.current) return;
        if (isOverflowing(specsContainer.current)) {adjustFontSize(specsContainer.current, "min");}
        else {adjustFontSize(specsContainer.current, "max");}

        if (!notionsContainer.current) return;
        if (isOverflowing(notionsContainer.current)) {
            adjustFontSize(notionsContainer.current, "min");
            if (!notionsList.current) return;
            /** If the content is still overflowing, remove the last notion */
            while (isOverflowing(notionsContainer.current)) {
                notionsList.current.removeChild(notionsList.current.lastChild as Node);
            }
        }
    }

    const relatedProject = projects.find((project) => project.title === displayedRetexTitle);
    if (!displayedRetexTitle) return;
    if (!relatedProject) {console.warn(`No project found for '${displayedRetexTitle}'.`); return;}

    return (
        <div id={`retex-${displayedRetexTitle}`}
            ref={retexContainer}
            className=
            {`
                ${styles.sizeFull}
                ${styles.flexRow}
                p-[6%]
                relative
            `}
        > 
            <header id='retex-header'
                ref={headerContainer}
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
                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(relatedProject.title)}}
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
                                    2xl:text-lg base:text-sm
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
                    rounded-lg
                    shadow-lg
                    overflow-hidden
                    z-[22]
                    ml-[2%]
                    relative
                    transition-all
                    duration-200
                    ease-in-out
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
                    onClick={() => setDisplayedRetex(undefined)}
                />
                
                {/* <div id='retex-bottom'
                    className=
                    {`
                        h-full
                        w-3/5
                        ${styles.flexCol}
                        text-wrap
                        overflow-hidden
                        mr-[5%]
                        relative
                    `}
                >
                    <span id='focused-image-container'
                        className={`
                            ${focusedImage === null ? "hidden" : "display"}
                            absolute
                            z-[25]
                            ${styles.flexCol}
                            ${styles.sizeFull}
                            ${styles.contentCenter}
                            top-0
                            left-0
                            object-fill
                        `}
                    >
                        <img src={menuIcons.close_menu_icon}
                            id='close-button'
                            className=
                            {`
                                absolute
                                top-[1%]
                                right-[1%]
                                ${styles.sizeFit}
                                cursor-pointer
                            `}
                            onClick={() => setFocusedImage(null)}
                        />

                        <img id='focused-image'
                            className={`
                                object-center
                                w-full
                                h-full
                            `}
                            src={focusedImage || undefined}
                            alt='focused image'
                        />
                    </span> */}

                <span id='specs'
                    ref={specsContainer}
                    className=
                    {`
                        ${styles.sizeFull}
                        overflow-hidden
                        text-base
                        text-wrap
                    `}
                >
                    <p className=
                        {`
                            ${styles.sizeFull}
                            text-base
                        `}
                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(relatedProject.specs[currentLang])}}
                    />
                </span>
                
                <div id='retex-bottom'
                    className=
                    {`
                        ${styles.sizeFull}
                        ${styles.flexRow}
                        text-wrap
                        overflow-hidden
                    `}
                >
                    <span id='notions'
                        ref={notionsContainer}
                        className=
                        {`
                            ${styles.sizeFull}
                            ${styles.flexRow}
                            ${styles.contentCenter}
                            overflow-hidden
                            relative
                        `}
                    >
                        <ul ref={notionsList}
                            className=
                            {`
                                ${styles.sizeFull}
                                ${styles.flexCol}
                                ${styles.contentStartY}
                                list-disc
                                list-inside
                                space-y-[5%]
                            `}
                        >
                            {relatedProject.notions[currentLang].map((notion, index) => (
                                <li key={`notion-${index}`}
                                    className={`notion-${index}`}
                                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(notion)}}
                                />
                            ))}
                        </ul>
                    </span>
                    
                    <span id='retex-imgs'
                        className=
                        {`
                            grid
                            grid-cols-2
                            grid-rows-2
                            relative
                            gap-[1%]
                            h-full
                            w-2/3
                            ${styles.flexCol}
                            hover:cursor-pointer
                            rounded-lg
                            overflow-hidden
                            
                        `}
                        onMouseEnter={() => {
                            document.getElementById("gallery-preview-text")!.classList.add("scale-110");
                            document.getElementById("gallery-preview-text")!.classList.remove("text-white");
                            document.getElementById("gallery-preview-text")!.classList.add("text-[--color-tertiary]");
                        }}
                        onMouseLeave={() => {
                            document.getElementById("gallery-preview-text")!.classList.remove("scale-110");
                            document.getElementById("gallery-preview-text")!.classList.remove("text-[--color-tertiary]");
                            document.getElementById("gallery-preview-text")!.classList.add("text-white");
                        }}
                    >
                        {relatedProject.img && relatedProject.img.map((img, index) => {
                            if (index <= 4) return (
                                <img key={`retex-img-${index}`}
                                    src={img}
                                    alt={`retex image ${index + 1}`}
                                    className=
                                    {`
                                        ${styles.sizeFull}
                                        object-cover
                                        blur-sm
                                    `}
                                    onClick={() => setFocusedImage(img)}
                                />
                            )
                        })}

                        <text id="gallery-preview-text"
                            className=
                            {`
                                absolute
                                top-24
                                left-24
                                z-[24]
                                text-white
                                font-semibold
                                transition-all
                                duration-300
                                ease-in-out
                            border-2
                            border-green-500
                            `}
                        > {
                            relatedProject.img && relatedProject.img.length > 0 ? 
                                relatedProject.img.length > 4 ? 
                                `+${relatedProject.img.length - 4 }` 
                                : "Images gallery"
                            : ""
                        } </text>

                    </span>
                </div>
            </div>
        </div>
    )
}

export default RetexViewer
