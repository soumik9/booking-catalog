import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IBook } from '../../../interfaces/modelTypes';
import Book from '../../models/BookModel';
import ApiError from '../../../utils/errors/ApiError';

const DeleteBook: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // finding the book
        const findBook = await Book.findById(req.params.id);

        // checking user req is valid
        if (findBook?.addedBy.toString() !== req?.user?._id) {
            throw new ApiError(httpStatus.BAD_REQUEST, 'You have not added this book!')
        }

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