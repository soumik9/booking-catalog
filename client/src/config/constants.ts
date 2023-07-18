import { linkTypes } from "./types";

export const homeUrl: string = '/';
export const allBooksUrl: string = '/all-books';
export const signInUrl: string = '/signin';
export const signUpUrl: string = '/signup';
export const addNewBook: string = '/add-new-book';

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

export const footerLinks: linkTypes[] = [
    {
        _id: "foot_1",
        title: "Home",
        url: homeUrl,
    },
    {
        _id: "foot_2",
        title: "All Books",
        url: allBooksUrl,
    },
    {
        _id: "foot_3",
        title: "Add Book",
        url: addNewBook,
    },
    {
        _id: "foot_4",
        title: "Sign In",
        url: signInUrl,
    },
    {
        _id: "foot_5",
        title: "Sign Up",
        url: signUpUrl,
    },
    {
        _id: "foot_6",
        title: "Books",
        url: allBooksUrl,
    },
]