
import { useEffect, useState } from "react";
import styles from "../../style";
import { menuIcons } from "../../assets";

type RetexGalleryViewerProps = {
    images: string[];
    untoggler: () => void;
}

type ImageProps = {
    src: string;
    index: number;
}

const RetexGalleryViewer = ({images, untoggler}: RetexGalleryViewerProps) => {
    const [focusedImage, setFocusedImage] = useState<ImageProps | null>(null);
    
    useEffect(() => {
        setFocusedImage(images.length > 0 ? {src: images[0], index: 0} : null);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                untoggler();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                if (focusedImage) {
                    const nextIndex = (focusedImage.index + 1) % images.length;
                    setFocusedImage({src: images[nextIndex], index: nextIndex});
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                if (focusedImage) {
                    const prevIndex = (focusedImage.index - 1 + images.length) % images.length;
                    setFocusedImage({src: images[prevIndex], index: prevIndex});
                }
            }
        });

        return () => {
            document.removeEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    untoggler();
                }
            });
            document.removeEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    if (focusedImage) {
                        const nextIndex = (focusedImage.index + 1) % images.length;
                        setFocusedImage({src: images[nextIndex], index: nextIndex});
                    }
                }
            });
            document.removeEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    if (focusedImage) {
                        const prevIndex = (focusedImage.index - 1 + images.length) % images.length;
                        setFocusedImage({src: images[prevIndex], index: prevIndex});
                    }
                }
            });
        }
    }, []);

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
            <img src={menuIcons.close_menu_icon}
                id='close-button'
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
                    src={focusedImage?.src || ''}
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
                                
                                ${focusedImage?.src === image ? 
                                    'border-2 \
                                    border-[--color-tertiary] \
                                    mb-[1.5%]' 
                                : 
                                    'border-[1px] \
                                    border-[--color-quaternary]'
                                }
                            `}
                            onClick={() => setFocusedImage({src: image, index})}
                        />
                    )) : null}

                    <hr id="thumbnail-underline"
                        className=
                        {`
                            absolute
                            ${styles.line}
                            w-1/3
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
