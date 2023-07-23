"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const GetBooks_1 = __importDefault(require("../controllers/book/GetBooks"));
const GetBook_1 = __importDefault(require("../controllers/book/GetBook"));
const CreateBook_1 = __importDefault(require("../controllers/book/CreateBook"));
const UpdateBook_1 = __importDefault(require("../controllers/book/UpdateBook"));
const DeleteBook_1 = __importDefault(require("../controllers/book/DeleteBook"));
const auth_1 = __importDefault(require("../middlewares/auth"));
//routes
router.post('/', (0, auth_1.default)(), CreateBook_1.default);
router.get('/:id', GetBook_1.default);
router.get('/', GetBooks_1.default);
router.patch('/:id', (0, auth_1.default)(), UpdateBook_1.default);
router.delete('/:id', (0, auth_1.default)(), DeleteBook_1.default);
exports.default = router;
