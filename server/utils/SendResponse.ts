import { Response } from 'express';
import { IApiReponse } from '../interfaces/types';

const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
    const responseData: IApiReponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null,
    };

    res.status(data.statusCode).json(responseData);
};

export default sendResponse;