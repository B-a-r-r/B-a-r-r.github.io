
import { useContext, useEffect, useRef, useState } from "react";
import styles from "../../style";
import { menuIcons } from "../../assets";
import { ThemeContext } from "../theme/ThemeEngine";

type RetexGalleryViewerProps = {
    images: string[];
    untoggler: () => void;
}

const RetexGalleryViewer = ({images, untoggler}: RetexGalleryViewerProps) => {
    const {currentTheme} = useContext(ThemeContext);
    const [focusedImage, setFocusedImage] = useState<string>(images[0]);
    let index = useRef<number>(0);
    
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                setIndex((index.current + 1) % images.length);
            }
            else if (e.key === 'ArrowLeft') {
                setIndex((index.current - 1 + images.length) % images.length);
            }
        });

        return () => {
            document.removeEventListener('keydown', () => {});
        }
    }, []);

    const setIndex = (newIndex: number) => {
        index.current = newIndex;
        setFocusedImage(images[index.current]);
    }

    return (
        <div id="retex-gallery-container"
            className=
            {`
                ${styles.flexCol}
                ${styles.sizeFull}
                ${styles.contentCenter}
                cursor-default
                relative
            `}
        >
            <img src={menuIcons.close_menu_icon.content[currentTheme]}
                id='close-button'
                alt={menuIcons.close_menu_icon.alt}
                className=
                {`
                    absolute
                    -top-[5%]
                    -right-[3%]
                    z-[23]
                    ${styles.sizeFit}
                    cursor-pointer
                `}
                onClick={untoggler}
            />

            <div id="gallery-focused-image-container"
                className=
                {`
                    ${styles.sizeFull}
                    ${styles.flexCol}
                    ${styles.contentCenter}
                    transition-all
                    duration-300
                    ease-in-out
                `}
            >
                <img id="gallery-focused-image"
                    src={focusedImage || ''}
                    alt={`Focused Retex Image`}
                    className=
                    {`
                        ${styles.sizeFull}
                        object-fill
                        object-center
                        rounded-lg
                    `}
                />
            </div>

            <nav id="gallery-navigation"
                className=
                {`
                    absolute
                    ${styles.flexCol}
                    ${styles.contentCenter}
                    overflow-x-scroll
                    overflow-y-hidden
                    w-4/5
                    h-1/6
                    -bottom-0
                `}
            >
                <div id="gallery-thumbnails"
                    className=
                    {`
                        ${styles.flexRow}
                        ${styles.sizeFull}
                        ${styles.contentCenter}
                        space-x-[1%]
                        relative
                    `}  
                >
                    {images ? images.map((image, index) => (
                        <img key={`retex-gallery-image-${index}`}
                            src={image}
                            alt={`Retex Gallery Image ${index + 1}`}
                            className=
                            {`
                                ${styles.sizeFit}
                                max-w-[100px]
                                max-h-[60px]
                                object-fill
                                object-center
                                cursor-pointer
                                hover:scale-105
                                transition-all
                                duration-300
                                ease-in-out
                                rounded-lg
                                shadow-lg
                                
                                ${focusedImage === image ? 
                                    'border-2 \
                                    border-[--color-tertiary] \
                                    mb-[1.5%]' 
                                : 
                                    'border-[1px] \
                                    border-[--color-quaternary]'
                                }
                            `}
                            onClick={() => { setIndex(index) }}
                        />
                    )) : null}

                    <hr id="thumbnail-underline"
                        className=
                        {`
                            absolute
                            block
                            bg-[--color-tertiary]
                            h-[4px]
                            border-none
                            w-1/5
                            bottom-0
                            shadow-lg
                            blur-[1px]
                        `}
                    />
                </div>
            </nav>
        </div>
    )
}

export default RetexGalleryViewer
