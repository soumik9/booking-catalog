import express from 'express'
const router = express.Router();

import CreateWishlist from '../controllers/wishlist/CreateWishlist';

//routes
router.post('/', CreateWishlist);

export default router;