import { Schema, model } from 'mongoose';
import { IReview } from '../../interfaces/modelTypes';

const reviewSchema = new Schema<IReview>({
    desc: {
        type: String,
        required: [true, 'Review is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

const Review = model<IReview>("Review", reviewSchema);
export default Review;