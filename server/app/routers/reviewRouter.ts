import express from 'express'
const router = express.Router();

import CreateReview from '../controllers/review/CreateReview';

//routes
router.post('/', CreateReview);

export default router;