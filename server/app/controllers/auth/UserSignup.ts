import { Request, Response, RequestHandler } from 'express';
import User from '../../models/UserModel';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IUser } from '../../../interfaces/modelTypes';

const UserSignup: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

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