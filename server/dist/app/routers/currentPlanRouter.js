"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const CreateCurrentPlan_1 = __importDefault(require("../controllers/currentPlan/CreateCurrentPlan"));
const UpdateMarkRead_1 = __importDefault(require("../controllers/currentPlan/UpdateMarkRead"));
const GetCurrentPlan_1 = __importDefault(require("../controllers/currentPlan/GetCurrentPlan"));
const auth_1 = __importDefault(require("../middlewares/auth"));
//routes
router.post('/', (0, auth_1.default)(), CreateCurrentPlan_1.default);
router.get('/by-user', (0, auth_1.default)(), GetCurrentPlan_1.default);
router.patch('/:id', (0, auth_1.default)(), UpdateMarkRead_1.default);
exports.default = router;
