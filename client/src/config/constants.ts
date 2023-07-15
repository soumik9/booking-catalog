import { linkTypes } from "./types";

export const homeUrl: string = '/';
export const allBooksUrl: string = '/all-books';
export const signInUrl: string = '/signin';
export const signUpUrl: string = '/signup';

// nav itmes
export const navItems: linkTypes[] = [
    {
        _id: "nav_1",
        title: "All Books",
        url: allBooksUrl,
    },
    {
        _id: "nav_2",
        title: "Sign In",
        url: signInUrl,
    },
    {
        _id: "nav_3",
        title: "Singup",
        url: signUpUrl,
    },
];