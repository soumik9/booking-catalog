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
    addedBy?: string | IUser;
}

export interface IUser {
    _id?: undefined | string;
    name: string;
    email: string;
    passowrd?: string;
    wishlists?: IWishlist[];
    currentPlans?: ICurrentPlan[];
}

export interface IGenre {
    _id: number;
    genre: string;
}

export interface IYear {
    _id: string;
    year: string;
}

export interface IWishlist {
    _id: string;
    book: IBook;
    user: IUser;
}

export interface ICurrentPlan extends IWishlist {
    isFinished: boolean;

}
