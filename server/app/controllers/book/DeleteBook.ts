import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IBook } from '../../../interfaces/modelTypes';
import Book from '../../models/BookModel';

const DeleteBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // deleting specific cow
        const result = await Book.findByIdAndDelete(req.params.id);

        sendResponse<IBook>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book deleted successfully!',
            data: result,
        });
    }
)

export default DeleteBook;