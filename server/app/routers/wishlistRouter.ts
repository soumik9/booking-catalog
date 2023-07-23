import express from 'express'
const router = express.Router();

import CreateWishlist from '../controllers/wishlist/CreateWishlist';
import auth from '../middlewares/auth';

//routes
router.post('/', auth(), CreateWishlist);

export default router;