import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import verifyToken from '../../../utils/helpers/verifyToken';
import { Secret } from 'jsonwebtoken';
import ApiError from '../../../utils/errors/ApiError';
import createToken from '../../../utils/helpers/createToken';
import { ILoginResponse } from '../../../interfaces/types';
import User from '../../models/UserModel';

const RefreshToken: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        const { refreshToken } = req.cookies;

        // verifing the token
        let verifiedToken = null;
        try {
            verifiedToken = verifyToken(
                refreshToken,
                process.env.JWT_REFRESH_SECRET as Secret
            );
        } catch (err) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Refresh Token Invalid!');
        }

        // destructing the user id
        const { _id: userId } = verifiedToken;

        // checking is user exist
        const isAdminExist = await User.isUserExist(userId);
        if (!isAdminExist) {
            throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
        }

        //generate new token
        const newAccessToken = createToken(
            {

                _id: isAdminExist._id,
                role: isAdminExist.role,
            },
            process.env.JWT_SECRET as Secret,
            process.env.JWT_EXPIRES_IN as string
        );

        // set refresh token into cookie
        const cookieOptions = {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
        };

        res.cookie('refreshToken', refreshToken, cookieOptions);

        sendResponse<ILoginResponse>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User logged in successfully !',
            data: {
                accessToken: newAccessToken
            },
        });
    }
)

export default RefreshToken;