import express from 'express'
const router = express.Router();

import GetBooks from '../controllers/book/GetBooks';
import GetBook from '../controllers/book/GetBook';
import CreateBook from '../controllers/book/CreateBook';
import UpdateBook from '../controllers/book/UpdateBook';
import DeleteBook from '../controllers/book/DeleteBook';

//routes
router.post('/', CreateBook);
router.get('/:id', GetBook);
router.get('/', GetBooks);
router.patch('/:id', UpdateBook);
router.delete('/:id', DeleteBook);

export default router;