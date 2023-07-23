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
const ApiError_1 = __importDefault(require("../../../utils/errors/ApiError"));
const createToken_1 = __importDefault(require("../../../utils/helpers/createToken"));
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const LoginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    // checking is admin exists
    const isUserExists = yield UserModel_1.default.isUserExist(email);
    if (!isUserExists)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist!');
    // checking is password valid
    if (isUserExists.password && !(yield UserModel_1.default.isPasswordMatched(password, isUserExists.password))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect!');
    }
    // destructing 
    const { _id } = isUserExists;
    // creating accesstoken & refreshtoken
    const accessToken = (0, createToken_1.default)({ _id }, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);
    const refreshToken = (0, createToken_1.default)({ _id }, process.env.JWT_REFRESH_SECRET, process.env.JWT_REFRESH_EXPIRES_IN);
    // set refresh token into cookie
    const cookieOptions = {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
    };
    res.cookie('refreshToken', refreshToken, cookieOptions);
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User logged in successfully!',
        data: {
            accessToken,
            user: isUserExists
        }
    });
}));
exports.default = LoginUser;
