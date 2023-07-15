import { Model, Types } from "mongoose";

// -------------------- user types -----------------------------------------
export interface IUser {
    _id?: Types.ObjectId | undefined | string;
    name: string;
    email: string;
    password: string;
}

export type UserModel = {
    isUserExist(param: string): Promise<Partial<IUser>>;
    isPasswordMatched(givenPassword: string, savedPassword: string): Promise<boolean>;
} & Model<IUser>;
// -------------------- user types -----------------------------------------


// -------------------- book types -----------------------------------------
export interface IBook {
    _id?: Types.ObjectId | undefined | string;
    title: string;
    author: string;
    genre: string;
    publication_date: string;
    reviews: Types.ObjectId[];
}
// -------------------- book types -----------------------------------------