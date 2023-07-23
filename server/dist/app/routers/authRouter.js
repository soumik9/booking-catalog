"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const validateZodReq_1 = __importDefault(require("../middlewares/validateZodReq"));
const AdminLoginValidation_1 = __importDefault(require("../validations/AdminLoginValidation"));
const LoginUser_1 = __importDefault(require("../controllers/auth/LoginUser"));
const UserSignup_1 = __importDefault(require("../controllers/auth/UserSignup"));
const Profile_1 = __importDefault(require("../controllers/auth/Profile"));
const auth_1 = __importDefault(require("../middlewares/auth"));
//routes
router.get('/profile', (0, auth_1.default)(), Profile_1.default);
router.post('/signup', UserSignup_1.default);
router.post('/login', (0, validateZodReq_1.default)(AdminLoginValidation_1.default), LoginUser_1.default);
// router.post('/refresh-token', validateZodRequest(RefreshTokenValidation), RefreshToken);
exports.default = router;
