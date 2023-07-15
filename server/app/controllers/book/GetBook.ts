import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IBook } from '../../../interfaces/modelTypes';
import Book from '../../models/BookModel';

const GetBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // creating new user
        const result = await Book.findById(req.params.id).populate('review');

        sendResponse<IBook>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book retrieved successfully!',
            data: result,
        });
    }
)

export default GetBook;