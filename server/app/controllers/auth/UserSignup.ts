import { Request, Response, RequestHandler } from 'express';
import User from '../../models/UserModel';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IUser } from '../../../interfaces/modelTypes';
import { CUserRole } from '../../../utils/constatnts';
import ApiError from '../../../utils/errors/ApiError';

const UserSignup: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // if requested role is buyer
        if (req.body.role === CUserRole[1]) {
            if (!req.body.budget || req.body.budget === 0) {
                throw new ApiError(httpStatus.BAD_REQUEST, 'Please give your budget amount / above 0!')
            }
        }

        // creating new user
        const result = await User.create(req.body);

        sendResponse<IUser>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    }
)

export default UserSignup;