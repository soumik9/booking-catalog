import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/SendResponse';
import Book from '../../models/BookModel';
import { IBook } from '../../../interfaces/modelTypes';
import { bookFilterableFields, bookSearchableFields, paginationProps } from '../../../utils/constatnts';
import { SortOrder } from 'mongoose';
import pick from '../../../utils/pick';
import calculatePagination from '../../../utils/helpers/calculatePagination';

const GetBooks: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const andConditions: any = [];
        const filters = pick(req.query, bookFilterableFields);
        const { searchTerm, ...filtersData } = filters;

        // pagination and sorting
        const paginationOptions = pick(req.query, paginationProps);
        const { limit, page, skip, sortBy, sortOrder } = calculatePagination(paginationOptions);

        // sorting
        const sortConditions: { [key: string]: SortOrder } = {};
        if (sortBy && sortOrder) { sortConditions[sortBy] = sortOrder; }

        // if there is searching query
        if (searchTerm) {
            andConditions.push({
                $or: bookSearchableFields.map(field => ({
                    [field]: {
                        $regex: searchTerm,
                        $options: 'i',
                    },
                })),
            });
        }

        // if any filterable query make it on object
        if (Object.keys(filtersData).length) {
            andConditions.push({
                $and: Object.entries(filtersData).map(([field, value]) => ({
                    [field]: value,
                })),
            });
        }


        // finalizing the where condition
        const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};

        // get books
        const result = await Book.find(whereConditions).sort(sortConditions).skip(skip).limit(limit);
        const totalRecords = await Book.countDocuments();

        sendResponse<IBook[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Books retrieved successfully!',
            meta: {
                page,
                limit,
                total: totalRecords,
            },
            data: result,
        });
    }
)

export default GetBooks;