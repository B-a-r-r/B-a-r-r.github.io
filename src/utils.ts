import { NavbarPattern, NavLink } from "./data/dataTypes";
import { navLinks } from "./data/constants";

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
        (navLink) => (navLink.label['en'] ? navLink.label['en'].toLowerCase() 
            : navLink.label[0].toLowerCase()) === window.location.pathname.split('/')[1]
    )!;

    if (correspondingNavigation) {
        return correspondingNavigation.label[getLocalLanguage()].toLowerCase();
    } else {
        return currentRoute.links[0].label[getLocalLanguage()].toLowerCase();
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
    if (textContainer) {
        let tempText = text;

        while (isOverflowing(textContainer) && tempText.length > 0) {
            tempText = tempText.slice(0, tempText.lastIndexOf(' '));
            textContainer.textContent = tempText + '...';
        }
    }
}