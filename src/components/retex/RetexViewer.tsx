import { projects } from '../../data/contents';
import styles from '../../style';
import DOMPurify from 'dompurify';
import { adjustFontSize, isOverflowing } from '../../utils';
import { useContext, useEffect, useRef, useState } from 'react';
import { LangContext } from '../language';
import { coreImages, menuIcons } from '../../assets';
import { RetexContext } from './RetexDisplayEngine';

const RetexViewer = () => {
    const { currentLang } = useContext(LangContext);
    const { displayedRetexTitle, setDisplayedRetex } = useContext(RetexContext);
    const [focusedImage, setFocusedImage] = useState<string>();
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
                    setDisplayedRetex(undefined);
                }
            }
        );
        document.getElementById(`retex-${displayedRetexTitle}`)?.addEventListener(
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
                    setDisplayedRetex(undefined);
                }
            });
            document.getElementById(`retex-${displayedRetexTitle}`)?.removeEventListener(
                'click',
                (e) => {
                    if (e.target === document.getElementById(`retex-${displayedRetexTitle}`)) {
                        setDisplayedRetex(undefined);
                    }
                }
            );
            window.addEventListener('resize', handleTextOverflow);
        }
    }, []);

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
        else {adjustFontSize(notionsContainer.current, "max");}

        /** Homogenize the font sizes to the lower one */
        const minFontSize = (
            specsContainer.current.style.fontSize < notionsContainer.current.style.fontSize ?
            specsContainer.current.style.fontSize : notionsContainer.current.style.fontSize
        )
        specsContainer.current.style.fontSize = minFontSize
        notionsContainer.current.style.fontSize = minFontSize
    }


    const relatedProject = projects.find((project) => project.title === displayedRetexTitle);
    if (!displayedRetexTitle) return;
    if (!relatedProject) {console.error(`No project found for '${displayedRetexTitle}'.`); return;}

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
                        2xl:text-4xl base:text-3xl
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
                    onClick={() => setDisplayedRetex(undefined)}
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
                        ref={specsContainer}
                        className=
                        {`
                            ${styles.sizeFull}
                            max-h-[70%]
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

                    <span id='notions'
                        ref={notionsContainer}
                        className=
                        {`
                            w-full
                            h-fit
                            min-h-[30%]
                            ${styles.flexRow}
                            ${styles.contentStartX}
                            overflow-hidden
                            relative
                        `}
                    >
                        <ul ref={notionsList}
                            className=
                            {`
                                ${styles.sizeFull}
                                ${styles.flexCol}
                                ${styles.contentStartAll}
                                list-disc
                                list-inside
                                space-y-[3%]
                                ml-[3%]
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
                            hover:shadow-lg
                            hover:scale-[1.01]
                            transition-all
                            duration-400
                            linear
                        `}
                    >
                        <img id='img-1'
                            src={
                                relatedProject.img ?
                                    relatedProject.img.length > 1 ?
                                    relatedProject.img[1] : relatedProject.img[0]
                                : coreImages.portrait  
                            }
                            alt="retex image 1"
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
                            hover:scale-[1.01]
                            hover:shadow-lg
                            transition-all
                            duration-400
                            linear
                        `}
                    >
                        <img id='img-2'
                            src={
                                relatedProject.img ?
                                    relatedProject.img.length > 1 ?
                                    relatedProject.img[2] : relatedProject.img[0]
                                : coreImages.portrait  
                            }
                            alt="retex image 2"
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

export default RetexViewer
