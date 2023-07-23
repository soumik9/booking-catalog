"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CreateWishlist_1 = __importDefault(require("../controllers/wishlist/CreateWishlist"));
const auth_1 = __importDefault(require("../middlewares/auth"));
//routes
router.post('/', (0, auth_1.default)(), CreateWishlist_1.default);
exports.default = router;
