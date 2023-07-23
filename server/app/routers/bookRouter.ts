import express from 'express'
const router = express.Router();

import GetBooks from '../controllers/book/GetBooks';
import GetBook from '../controllers/book/GetBook';
import CreateBook from '../controllers/book/CreateBook';
import UpdateBook from '../controllers/book/UpdateBook';
import DeleteBook from '../controllers/book/DeleteBook';
import auth from '../middlewares/auth';

//routes
router.post('/', auth(), CreateBook);
router.get('/:id', GetBook);
router.get('/', GetBooks);
router.patch('/:id', auth(), UpdateBook);
router.delete('/:id', auth(), DeleteBook);

export default router;