import express from 'express'
const router = express.Router();

import CreateReview from '../controllers/review/CreateReview';
import auth from '../middlewares/auth';

//routes
router.post('/', auth(), CreateReview);

export default router;