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
    publication_date: any;
    reviews?: string[];
}

export interface IUser {
    _id?: undefined | string;
    name: string;
    email: string;
    passowrd?: string;
}

export interface IGenre {
    _id: number;
    genre: string;
}

export interface IYear {
    _id: string;
    year: string;
}