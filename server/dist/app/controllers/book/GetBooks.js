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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const SendResponse_1 = __importDefault(require("../../../utils/SendResponse"));
const BookModel_1 = __importDefault(require("../../models/BookModel"));
const constatnts_1 = require("../../../utils/constatnts");
const pick_1 = __importDefault(require("../../../utils/pick"));
const calculatePagination_1 = __importDefault(require("../../../utils/helpers/calculatePagination"));
const GetBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const andConditions = [];
    const filters = (0, pick_1.default)(req.query, constatnts_1.bookFilterableFields);
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    // pagination and sorting
    const paginationOptions = (0, pick_1.default)(req.query, constatnts_1.paginationProps);
    const { limit, page, skip, sortBy, sortOrder } = (0, calculatePagination_1.default)(paginationOptions);
    // sorting
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    // if there is searching query
    if (searchTerm) {
        andConditions.push({
            $or: constatnts_1.bookSearchableFields.map(field => ({
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
    const result = yield BookModel_1.default.find(whereConditions).sort(sortConditions).skip(skip).limit(limit);
    const totalRecords = yield BookModel_1.default.countDocuments();
    (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Books retrieved successfully!',
        meta: {
            page,
            limit,
            total: totalRecords,
        },
        data: result,
    });
}));
exports.default = GetBooks;
