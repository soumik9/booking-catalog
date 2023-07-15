import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import Book from '../../models/BookModel';
import { IBook } from '../../../interfaces/modelTypes';

const UpdateBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // updating specific book data
        const result = await Book.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true }
        );

        sendResponse<IBook>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book updated successfully!',
            data: result,
        });
    }
)

export default UpdateBook;