import { Schema, model } from 'mongoose';
import { ICurrentPlan } from '../../interfaces/modelTypes';

const currentPlanSchema = new Schema<ICurrentPlan>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    },
    isFinished: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const CurrentPlan = model<ICurrentPlan>("CurrentPlan", currentPlanSchema);
export default CurrentPlan;