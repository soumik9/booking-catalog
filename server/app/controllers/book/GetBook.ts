import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IBook } from '../../../interfaces/modelTypes';
import Book from '../../models/BookModel';

const GetBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // creating new book
        const result = await Book.findOne({ _id: req.params.id });

        sendResponse<IBook>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book retrieved successfully!',
            data: result,
        });
    }
)

export default GetBook;