"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    desc: {
        type: String,
        required: [true, 'Review is required']
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book"
    },
}, { timestamps: true });
const Review = (0, mongoose_1.model)("Review", reviewSchema);
exports.default = Review;
