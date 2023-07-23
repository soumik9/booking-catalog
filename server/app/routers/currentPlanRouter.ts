import express from 'express'
const router = express.Router();

import CreateCurrentPlan from '../controllers/currentPlan/CreateCurrentPlan';
import UpdateMarkRead from '../controllers/currentPlan/UpdateMarkRead';
import GetCurrentPlan from '../controllers/currentPlan/GetCurrentPlan';
import auth from '../middlewares/auth';

//routes
router.post('/', CreateCurrentPlan);
router.get('/by-user', auth(), GetCurrentPlan);
router.patch('/:id', UpdateMarkRead);

export default router;