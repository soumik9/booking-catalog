"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const currentPlanSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book"
    },
    isFinished: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });
const CurrentPlan = (0, mongoose_1.model)("CurrentPlan", currentPlanSchema);
exports.default = CurrentPlan;
