import { Request, Response, RequestHandler } from 'express';
import User from '../../models/UserModel';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import { IUser } from '../../../interfaces/modelTypes';


const Profile: RequestHandler = catchAsync(
    async (req: Request, res: Response): Promise<void> => {

        // get my profile user
        const result = await User.findById(req?.user?._id);

        sendResponse<IUser>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Profile retrived successfully!',
            data: result,
        });
    }
)

export default Profile;