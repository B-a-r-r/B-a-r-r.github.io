import { projects } from '../../data/contents';
import styles from '../../style';
import DOMPurify from 'dompurify';
import { adjustFontSize, isOverflowing } from '../../utils';
import { useContext, useEffect, useRef, useState } from 'react';
import { LangContext } from '../language';
import { menuIcons } from '../../assets';
import { RetexContext } from './RetexDisplayEngine'
import { placeholderMessages } from '../../data/constants';
import RetexHeader from './RetexHeader';
import RetexGalleryViewer from './RetexGalleryViewer';

const RetexViewer = () => {
    const { currentLang } = useContext(LangContext);
    const { displayedRetexTitle, setDisplayedRetex } = useContext(RetexContext);
    const [toggleGallery, setToggleGallery] = useState<boolean>(false);

    const galleryButton = useRef<HTMLButtonElement>(null);
    const galleryPreview = useRef<HTMLDivElement>(null);
    const specsContainer = useRef<HTMLSpanElement>(null);
    const notionsContainer = useRef<HTMLSpanElement>(null);
    const notionsList = useRef<HTMLUListElement>(null);

    useEffect(() => {
        setToggleGallery(false);

        document.addEventListener(
            'click',
            (e) => {
                if (e.target === document.getElementById(`retex-${displayedRetexTitle}`)) {
                    setDisplayedRetex(undefined);
                }
            }
        );

        document.addEventListener('keydown', (e) => {
            if (displayedRetexTitle && !toggleGallery) {
                if (e.key === 'Escape') {
                    setDisplayedRetex(undefined)
                }
            }
        });

        window.addEventListener('resize', handleTextOverflow);

        return () => {
            document.removeEventListener('keydown', (e) => {
                if (displayedRetexTitle && !toggleGallery) {
                    if (e.key === 'Escape') {
                        setDisplayedRetex(undefined)
                    }
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
    }, [displayedRetexTitle, toggleGallery, currentLang]);

    useEffect(() => {
        const button = galleryButton.current;
        const buttonContainer = galleryPreview.current;
        if (!button || !buttonContainer) return;

        //Center absolute button in its parent container
        button.style.top = `${(buttonContainer.clientHeight - button.clientHeight) / 2 -2}px`;
        button.style.left = `${(buttonContainer.clientWidth - button.clientWidth) / 2}px`;
    }, [currentLang, displayedRetexTitle, toggleGallery]);
    
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
            className=
            {`
                ${styles.sizeFull}
                ${styles.flexRow}
                p-[6%]
                relative
            `}
        > 
            <RetexHeader {...relatedProject} />
            
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
                {toggleGallery && relatedProject.img && relatedProject.img.length > 0 
                ? <RetexGalleryViewer images={relatedProject.img} untoggler={() => setToggleGallery(false)}/> : 
                <>
                    <img src={menuIcons.close_menu_icon}
                        id='close-button'
                        className=
                        {`
                            absolute
                            top-[2%]
                            right-[1%]
                            z-[23]
                            ${styles.sizeFit}
                            cursor-pointer
                        `}
                        onClick={() => setDisplayedRetex(undefined)}
                    />

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
                            w-full
                            h-fit
                            max-h-[45%]
                            ${styles.flexRow}
                            ${styles.contentCenter}
                            text-wrap
                            space-x-[3%]
                        `}
                    >
                        <span id='notions'
                            ref={notionsContainer}
                            className=
                            {`
                                ${styles.sizeFull}
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
                        
                        <div id='retex-imgs-container'
                            className=
                            {`
                                relative
                                ${styles.sizeFull}
                                max-w-[45%]
                                ${styles.flexCol}
                                ${styles.contentCenter}
                                rounded-lg
                                overflow-hidden
                            `}
                        >
                            <span id='retex-gallery-preview'
                                ref={galleryPreview}
                                className=
                                {`  
                                    ${styles.sizeFull}
                                    grid
                                    grid-cols-2
                                    grid-rows-2
                                    relative
                                    gap-[1%]
                                    ${styles.flexCol}
                                    rounded-lg
                                    overflow-hidden
                                `}
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
                                                object-center
                                                blur-[2px]
                                            `}
                                        />
                                    )
                                })}

                                <button id='retex-gallery-button'
                                    ref={galleryButton}
                                    className=
                                    {`
                                        absolute
                                        ${styles.sizeFit}
                                        ${styles.flexRow}
                                        ${styles.contentCenter}
                                        z-50
                                        bg-[--color-secondary]
                                        text-[--color-tertiary]
                                        hover:scale-105
                                        font-semibold
                                        hover:text-[--color-quinary]
                                        transition-all
                                        duration-300
                                        ease-in-out
                                        rounded-lg
                                        shadow-lg
                                    `}
                                    onClick={() => setToggleGallery(true)}
                                > {placeholderMessages.find((message) => message.context === "projectGalleryButton")!.content[currentLang]} </button> 
                            </span>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default RetexViewer
