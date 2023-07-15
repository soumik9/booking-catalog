import express from 'express'
const router = express.Router();

import GetBooks from '../controllers/book/GetBooks';
import GetBook from '../controllers/book/GetBook';

//routes
router.get('/:id', GetBook);
router.get('/', GetBooks);

export default router;