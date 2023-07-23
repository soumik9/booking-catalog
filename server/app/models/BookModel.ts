import { Schema, model } from 'mongoose';
import { IBook } from '../../interfaces/modelTypes';

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: [true, 'Last name is required']
    },
    author: {
        type: String,
        required: [true, 'Last name is required']
    },
    genre: {
        type: String,
        required: [true, 'Last name is required']
    },
    publication_date: {
        type: String,
        required: [true, 'Last name is required']
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

const Book = model<IBook>("Book", bookSchema);
export default Book;