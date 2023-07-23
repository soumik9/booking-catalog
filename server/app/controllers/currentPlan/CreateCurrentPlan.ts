import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IReview } from '../../../interfaces/modelTypes';
import ApiError from '../../../utils/errors/ApiError';
import User from '../../models/UserModel';
import CurrentPlan from '../../models/CurrentPlanModel';

const CreateCurrentPlan: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // finding the current plan
        const findCurrentPlant = await CurrentPlan.findOne({ $and: [{ book: req.body.book, user: req.body.user }] });
        if (findCurrentPlant) throw new ApiError(httpStatus.BAD_REQUEST, 'Already added to current plan!');

        // creating wishlist
        const result = await CurrentPlan.create(req.body);

        if (result._id) {
            await User.findByIdAndUpdate(
                req.body.user,
                { $push: { currentPlans: result._id } },
            );
        } else {
            await CurrentPlan.findByIdAndDelete(result._id);
            throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create Current Plan!')
        }

        sendResponse<IReview>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book added to current plan!',
        });
    }
)

export default CreateCurrentPlan;