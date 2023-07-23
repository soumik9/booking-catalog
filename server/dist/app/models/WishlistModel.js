"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wishlistSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book"
    },
}, { timestamps: true });
const Wishlist = (0, mongoose_1.model)("Wishlist", wishlistSchema);
exports.default = Wishlist;
