import { NavbarPattern, NavLink } from "./data/dataTypes";
import { navLinks } from "./data/constants";
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config.d'
import { Config } from "tailwindcss";

const TAILWIND_CONFIG = resolveConfig(config as Config);

/**
 * @function randomNumberBetween Get a random number between min and max
 * @param min from this number 
 * @param max to this number (included)
 * @returns a number 
 */
export const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @function getCurrentNavigation Get the current navigation link to highlight in the navbar of the current page
 * If no nav links correspond to the current pae, return the first link of the 
 * current navigation links
 * @returns the link to highlight in the navbar
 */
export const getCurrentNavigation = () => {
    const currentRoute: NavbarPattern = navLinks.find(
        (nav) => nav.route.includes(window.location.pathname.split('/')[1])
    )!;

    const correspondingNavigation: NavLink = currentRoute.links.find(
        (navLink) => navLink.label[0].toLowerCase() === window.location.pathname.split('/')[1]
    )!;

    if (correspondingNavigation) {
        return (correspondingNavigation.label[getLocalLanguage()] ? 
        correspondingNavigation.label[getLocalLanguage()] 
        : correspondingNavigation.label[0]).toLowerCase();
    } else {
        return (currentRoute.links[0].label[getLocalLanguage()] ? 
        currentRoute.links[0].label[getLocalLanguage()] 
        : currentRoute.links[0].label[0]).toLowerCase();
    }
}

/**
 * @function getLocalTheme Get the current theme of the website
 * @returns the current theme 
 */
export const getLocalTheme = () => {
    return localStorage.getItem('theme')?.toLocaleLowerCase() || 'light';
}

/**
 * @function getLocalLanguage Get the language used by the user
 * @returns the symbol of local language (ex: 'fr')
 */
export const getLocalLanguage = () => {
    return localStorage.getItem('lang')?.toString().toLowerCase() 
    || navigator.language.slice(0, 2)?.toString().toLowerCase()
    || 'fr';
}

/**
 * @function isOverflowing Check if an element is overflowing its container
 * @param element the element to check
 * @returns true if the element is overflowing, false otherwise
 */
export const isOverflowing = (element: HTMLElement) => {
    if (!element) {console.warn("Can't check overflowing: element is null."); return false;}
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

/**
 * @function truncateTextIfOverflow Truncate the text in an element if it is overflowing
 * @param textContainer HTML element containing the text
 * @param text the text to truncate
 */
export const truncateTextIfOverflow = (textContainer: HTMLElement, text: string) => {
    let tempText = text;

    while (isOverflowing(textContainer) && tempText.length > 0) {
        tempText = tempText.slice(0, tempText.lastIndexOf(' '));
        textContainer.textContent = tempText + '...';
    }
}

/**
 * @function getNavbarOffset Get the height of the navbar
 * @returns the height of the navbar
 */
export const getNavbarOffset = () => {
    const navbar = document.getElementById('navbar');
    return navbar ? navbar.clientHeight : 0;
}

/**
 * @function getFooterOffset Get the height of the footer
 * @returns the height of the footer
 */
export const getFooterOffset = () => {
    const footer = document.getElementById('footer');
    return footer ? footer.clientHeight : 0;
}

/**
 * @function handleMouseMove When the mouse mouves over the given div, the element
 * rotates according to the mouse position.
 * @param e the mouse event
 * @param div the div to rotate
 * @returns void
 */
export const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, div: HTMLDivElement | null) => {
    if (!div) return;

    const { top, left, width, height } = div.getBoundingClientRect();
    const color1 = getComputedStyle(document.documentElement).getPropertyValue("--color-primary")
    const color2 = getComputedStyle(document.documentElement).getPropertyValue("--color-secondary")
    const cursorX = e.clientX - left - width / 2;
    const cursorY = e.clientY - top - height / 2;
    console.log(left, top);

    div.style.transform = `rotateX(${cursorY/25}deg) rotateY(${cursorX/22}deg)`;
    div.style.background = `radial-gradient(circle at ${cursorX}% ${cursorY}%, ${lightenHexColor(color1, 3)} 8%, ${darkenHexColor(color2, 0)})`;
    injectCursorPosition(e.clientX, e.clientY);
}

/**
 * @function handleMouseLeave When the mouse leaves the given div, the element
 * rotates back to its original position.
 * @param div the div to rotate
 * @returns void
 */
export const handleMouseLeave = (div: HTMLDivElement | null) => {
    if (!div) return;
    div.style.transform = `rotateX(0deg) rotateY(0deg)`;
    div.style.background = 'none';
    injectCursorPosition(0, 0);
}

/**
 * @function injectCursorPosition Inject the cursor position in the CSS variables
 * @param x the x position of the cursor
 * @param y the y position of the cursor
 * @returns void
 */
export const injectCursorPosition = (x: number, y: number) => {
    document.documentElement.style.setProperty('--x', `${Math.round(x)}`)
    document.documentElement.style.setProperty('--y', `${Math.round(y)}`);
}

/**
 * @function darkenHexColor Darken a given hex string color by a given percentage
 * @param color the color to darken
 * @param percent the percentage to darken the color
 * @returns the darkened color as a hex string
 */
export const darkenHexColor = (color: string, percent: number) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + 
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + 
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

/**
 * @function lightenHexColor Lighten a given hex string color by a given percentage
 * @param color the color to lighten
 * @param percent the percentage to lighten the color
 * @returns the lightened color as a hex string
 */
export const lightenHexColor = (color: string, percent: number) => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + 
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + 
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

/**
 * @function getRandomTailwindColor Get a random Tailwind CSS color anmong a 
 * predefined list of colors.
 * @returns a random Tailwind CSS color
 */
export const getRandomTailwindColor = () => {
    const colors = [
        'red-500', 
        'green-500', 
        'blue-500', 
        'yellow-500', 
        'purple-500', 
        'pink-500', 
        'cyan-500', 
    ];
    return colors[randomNumberBetween(0, colors.length - 1)];
}

/**
 * @function getActiveBreakpoint compare the current screen width with the custom 
 * breakpoints in the tailwindcss config file.
 * @returns the active breakpoint.
 */
export const getActiveBreakpoint = (returnType: "string" | "number") => {
    const currentWidth = window.innerWidth;
    console.log(parseInt(TAILWIND_CONFIG.theme.screens["2xl"]))
    console.log(currentWidth)
    if (parseInt(TAILWIND_CONFIG.theme.screens["2xl"]) <= currentWidth) {
        return returnType === "number" ? 5 : "2xl";
    }
    else if (parseInt(TAILWIND_CONFIG.theme.screens["xl"]) <= currentWidth) {
        return returnType === "number" ? 4 : "xl";
    }
    else if (parseInt(TAILWIND_CONFIG.theme.screens["lg"]) <= currentWidth) {
        return returnType === "number" ? 3 : "lg";
    }
    else if (parseInt(TAILWIND_CONFIG.theme.screens["md"]) <= currentWidth) {
        return returnType === "number" ? 2 : "md"
    }
    else if (parseInt(TAILWIND_CONFIG.theme.screens["sm"]) <= currentWidth) {
        return returnType === "number" ? 1 : "sm";
    }
    else {
        return returnType === "number" ? 0 : "base";
    }
}