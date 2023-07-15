import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import Book from '../../models/BookModel';
import { IBook } from '../../../interfaces/modelTypes';

const CreateBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // creating new user
        const result = await Book.create(req.body);

        sendResponse<IBook>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book created successfully!',
            data: result,
        });
    }
)

export default CreateBook;