import express from 'express'
const router = express.Router();

import CreateCurrentPlan from '../controllers/currentPlan/CreateCurrentPlan';

//routes
router.post('/', CreateCurrentPlan);

export default router;