import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { ICurrentPlan } from '../../../interfaces/modelTypes';
import CurrentPlan from '../../models/CurrentPlanModel';

const UpdateMarkRead: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // updating specific book data
        const result = await CurrentPlan.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true }
        );

        sendResponse<ICurrentPlan>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book plan updated successfully!',
            data: result,
        });
    }
)

export default UpdateMarkRead;