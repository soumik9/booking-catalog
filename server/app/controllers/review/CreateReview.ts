import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IReview } from '../../../interfaces/modelTypes';
import Review from '../../models/ReviewModel';
import Book from '../../models/BookModel';
import ApiError from '../../../utils/errors/ApiError';

const CreateReview: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        const result = await Review.create(req.body);

        if (result._id) {
            await Book.findByIdAndUpdate(
                req.body.book,
                { $push: { reviews: result._id } },
            );
        } else {
            await Review.findByIdAndDelete(result._id);
            throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create review!')
        }

        sendResponse<IReview>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Review submitted successfully!',
        });
    }
)

export default CreateReview;