"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const SendResponse_1 = __importDefault(require("../../../utils/SendResponse"));
const verifyToken_1 = __importDefault(require("../../../utils/helpers/verifyToken"));
const ApiError_1 = __importDefault(require("../../../utils/errors/ApiError"));
const createToken_1 = __importDefault(require("../../../utils/helpers/createToken"));
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const RefreshToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    // verifing the token
    let verifiedToken = null;
    try {
        verifiedToken = (0, verifyToken_1.default)(refreshToken, process.env.JWT_REFRESH_SECRET);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Refresh Token Invalid!');
    }
    // destructing the user id
    const { _id: userId } = verifiedToken;
    // checking is user exist
    const isAdminExist = yield UserModel_1.default.isUserExist(userId);
    if (!isAdminExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    //generate new token
    const newAccessToken = (0, createToken_1.default)({
        _id: isAdminExist._id,
        role: isAdminExist.role,
    }, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);
    // set refresh token into cookie
    const cookieOptions = {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User logged in successfully !',
        data: {
            accessToken: newAccessToken
        },
    });
}));
exports.default = RefreshToken;
