import { Schema, model } from 'mongoose';
import { IWishlist } from '../../interfaces/modelTypes';

const wishlistSchema = new Schema<IWishlist>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    },
}, { timestamps: true });

const Wishlist = model<IWishlist>("Wishlist", wishlistSchema);
export default Wishlist;