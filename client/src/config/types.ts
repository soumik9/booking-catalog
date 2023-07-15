export interface linkTypes {
    _id: string;
    title: string;
    url: string;
}

export interface IBook {
    _id?: undefined | string;
    title: string;
    author: string;
    genre: string;
    publication_date: string;
    reviews: string[];
}