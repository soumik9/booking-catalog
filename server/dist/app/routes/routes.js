"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("../routers/authRouter"));
const bookRouter_1 = __importDefault(require("../routers/bookRouter"));
const reviewRouter_1 = __importDefault(require("../routers/reviewRouter"));
const router = express_1.default.Router();
const apiRoutes = [
    {
        path: '/auth',
        route: authRouter_1.default,
    },
    {
        path: '/book',
        route: bookRouter_1.default,
    },
    {
        path: '/review',
        route: reviewRouter_1.default,
    },
];
apiRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
