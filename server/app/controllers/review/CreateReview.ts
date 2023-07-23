import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IReview } from '../../../interfaces/modelTypes';
import Review from '../../models/ReviewModel';

const CreateReview: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // creating new user
        const result = await Review.create(req.body);

        sendResponse<IReview>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Review submitted successfully!',
            data: result,
        });
    }
)

export default CreateReview;