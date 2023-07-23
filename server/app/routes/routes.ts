import express from 'express';

import authRouter from '../routers/authRouter'
import bookRouter from '../routers/bookRouter'
import reviewRouter from '../routers/reviewRouter'
import wishlistRouter from '../routers/wishlistRouter'

const router = express.Router();

const apiRoutes: { path: string, route: any }[] = [
    {
        path: '/auth',
        route: authRouter,
    },
    {
        path: '/book',
        route: bookRouter,
    },
    {
        path: '/review',
        route: reviewRouter,
    },
    {
        path: '/wishlist',
        route: wishlistRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;