"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Review"
        }],
}, { timestamps: true });
const Book = (0, mongoose_1.model)("Book", bookSchema);
exports.default = Book;
