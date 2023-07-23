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
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const constatnts_1 = require("../../utils/constatnts");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Naame is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        enum: {
            values: constatnts_1.CUserRole,
            message: "Status value can not be {VALUE}, must be user"
        },
        default: 'user'
    },
}, { timestamps: true });
// checking is admin exists
userSchema.statics.isUserExist = function (param) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield this.findOne({ email: param }).select('password').exec();
    });
};
// checking is password matched
userSchema.statics.isPasswordMatched = function (givenPassword, savedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(givenPassword, savedPassword);
    });
};
// password hashing before saving or creating
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified('password')) {
            return next();
        }
        const password = this.password;
        const hashedPassword = yield bcrypt_1.default.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));
        this.password = hashedPassword;
        next();
    });
});
// Exclude password field from response
userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
    }
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
