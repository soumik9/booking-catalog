import { Model, Types } from "mongoose";

// -------------------- user types -----------------------------------------
export interface IUser {
    _id?: Types.ObjectId | undefined | string;
    name: string;
    email: string;
    password: string;
    role: string;
    wishlists: Types.ObjectId[] | IWishlist[];
    currentPlans: Types.ObjectId[] | ICurrentPlan[];
}

export type UserModel = {
    isUserExist(param: string): Promise<Partial<IUser>>;
    isPasswordMatched(givenPassword: string, savedPassword: string): Promise<boolean>;
} & Model<IUser>;
// -------------------- user types -----------------------------------------

export interface IBook {
    _id?: Types.ObjectId | undefined | string;
    title: string;
    author: string;
    genre: string;
    publication_date: string;
    reviews: Types.ObjectId[] | IReview[];
    addedBy: Types.ObjectId[] | IUser;
}

export interface IReview {
    _id?: Types.ObjectId | undefined | string
    desc: string;
    user: Types.ObjectId | IUser;
    book: Types.ObjectId | IBook;
}

export interface IWishlist {
    _id?: Types.ObjectId | undefined | string
    user: Types.ObjectId | IUser;
    book: Types.ObjectId | IBook;
}

export interface ICurrentPlan extends IWishlist {
    isFinished: boolean;
}
