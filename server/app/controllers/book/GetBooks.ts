import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import Book from '../../models/BookModel';
import { IBook } from '../../../interfaces/modelTypes';

const GetBooks: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // get books
        const result = await Book.find();
        const totalRecords = await Book.countDocuments();

        sendResponse<IBook[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Books retrieved successfully!',
            meta: {
                total: totalRecords,
            },
            data: result,
        });
    }
)

export default GetBooks;