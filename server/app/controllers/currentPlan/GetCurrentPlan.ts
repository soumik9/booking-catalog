import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { ICurrentPlan } from '../../../interfaces/modelTypes';
import CurrentPlan from '../../models/CurrentPlanModel';


const GetCurrentPlan: RequestHandler = catchAsync(
    async (req: Request, res: Response): Promise<void> => {

        // get my profile user
        const result = await CurrentPlan.find({ user: req?.user?._id }).populate('book');

        sendResponse<ICurrentPlan>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Current plan retrived successfully!'
        });
    }
)

export default GetCurrentPlan;