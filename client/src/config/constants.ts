import { IGenre, IYear, linkTypes } from "./types";

export const homeUrl: string = '/';
export const allBooksUrl: string = '/all-books';
export const signInUrl: string = '/signin';
export const signUpUrl: string = '/signup';
export const addNewBook: string = '/add-new-book';
export const wishlistUrl: string = '/wishlist';
export const currentPlanUrl: string = '/current-plan';

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

export const genres: IGenre[] = [
    { _id: 1, genre: 'Mystery' },
    { _id: 2, genre: 'Thriller' },
    { _id: 3, genre: 'Romance' },
    { _id: 4, genre: 'Emily White' },
    { _id: 5, genre: 'Alex Turner' },
    { _id: 6, genre: 'Matthew Gray' },
    { _id: 7, genre: 'Drama' },
    { _id: 8, genre: 'Fantasy' },
    { _id: 9, genre: 'Sci-Fi' },
    { _id: 10, genre: 'Adventure' },
];

export const years: IYear[] = [
    { _id: 'year1', year: '2020' },
    { _id: 'year2', year: '2021' },
    { _id: 'year3', year: '2022' },
    { _id: 'year4', year: '2023' },
];