import mongoose, { Schema, model } from 'mongoose';
import { CUserRole } from '../../utils/constatnts';
import { IUser, UserModel } from '../../interfaces/modelTypes';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser, UserModel, {}>({
    name: {
        firstName: {
            type: String,
            required: [true, 'First name is required']
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required']
        },
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        enum: {
            values: CUserRole,
            message: "Status value can not be {VALUE}, must be seller/buyer"
        },
        required: [true, 'Role is required']
    },
    budget: {
        type: Number,
        default: 0
    },
    income: {
        type: Number,
        default: 0
    },

}, { timestamps: true });

// checking is admin exists
userSchema.statics.isUserExist = async function (param: string): Promise<Partial<IUser> | null> {
    let query: { $or: ({ _id: string } | { phoneNumber: string })[] } = {
        $or: [{ phoneNumber: param }],
    };

    // Check if param is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(param)) {
        query.$or.push({ _id: param });
    }

    return await this.findOne(query).select('role password').exec();
}

// checking is password matched
userSchema.statics.isPasswordMatched = async function (givenPassword: string, savedPassword: string): Promise<boolean> {
    return await bcrypt.compare(givenPassword, savedPassword);
};

// password hashing before saving or creating
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const password = this.password;
    const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));

    this.password = hashedPassword;

    next();
});

// Exclude password field from response
userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
    }
});

const User = model<IUser, UserModel>("User", userSchema);
export default User;