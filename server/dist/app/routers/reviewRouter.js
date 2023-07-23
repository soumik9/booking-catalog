"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CreateReview_1 = __importDefault(require("../controllers/review/CreateReview"));
//routes
router.post('/', CreateReview_1.default);
// router.get('/:id', GetBook);
// router.get('/', GetBooks);
// router.patch('/:id', UpdateBook);
// router.delete('/:id', DeleteBook);
exports.default = router;
