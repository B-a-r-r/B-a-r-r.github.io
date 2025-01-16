import { NavbarPattern, NavLink } from "./data/dataTypes";
import { navLinks } from "./data/constants";

/**
 * Get a random number between min and max
 * @param min from this number 
 * @param max to this number (included)
 * @returns a number 
 */
export const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get the current navigation link to highlight in the navbar of the current page
 * If no nav links correspond to the current pae, return the first link of the 
 * current navigation links
 * @returns the link to highlight in the navbar
 */
export const getCurrentNavigation = () => {
    const currentRoute: NavbarPattern = navLinks.filter(
        (nav) => nav.route.includes(window.location.pathname.split('/')[1])
    )[0];

    const correspondingNavigation: NavLink = currentRoute.links.filter(
        (navLink) => navLink.label.toLowerCase() === window.location.pathname.split('/')[1]
    )[0];

    if (correspondingNavigation) {
        return correspondingNavigation.label.toLowerCase();
    } else {
        return currentRoute.links[0].label.toLowerCase();
    }
}