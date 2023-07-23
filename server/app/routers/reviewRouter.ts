import express from 'express'
const router = express.Router();

import CreateReview from '../controllers/review/CreateReview';

//routes
router.post('/', CreateReview);
// router.get('/:id', GetBook);
// router.get('/', GetBooks);
// router.patch('/:id', UpdateBook);
// router.delete('/:id', DeleteBook);

export default router;