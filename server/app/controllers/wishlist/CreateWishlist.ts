import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IReview } from '../../../interfaces/modelTypes';
import ApiError from '../../../utils/errors/ApiError';
import Wishlist from '../../models/WishlistModel';
import User from '../../models/UserModel';

const CreateWishlist: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // finding the wishlist
        const findWishlist = await Wishlist.findOne({ $and: [{ book: req.body.book, user: req.body.user }] });
        if (findWishlist) throw new ApiError(httpStatus.BAD_REQUEST, 'Already added to wishlist!');

        // creating wishlist
        const result = await Wishlist.create(req.body);

        if (result._id) {
            await User.findByIdAndUpdate(
                req.body.user,
                { $push: { wishlists: result._id } },
            );
        } else {
            await Wishlist.findByIdAndDelete(result._id);
            throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create wishlist!')
        }

        sendResponse<IReview>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book added to wishlist!',
        });
    }
)

export default CreateWishlist;