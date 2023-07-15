import { ZodError, ZodIssue } from 'zod';
import { IErrorMessage, IErrorResponse } from '../../interfaces/types';

const handleZodError = (error: ZodError): IErrorResponse => {
    const errors: IErrorMessage[] = error.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue.path.length - 1],
            message: issue?.message,
        };
    });

    const statusCode = 400;

    return {
        statusCode,
        message: 'Validation Error',
        errorMessages: errors,
    };
};

export default handleZodError;