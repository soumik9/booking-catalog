import express from 'express';

import authRouter from '../routers/authRouter'
import bookRouter from '../routers/bookRouter'
import reviewRouter from '../routers/reviewRouter'
import wishlistRouter from '../routers/wishlistRouter'
import currentPlanRouter from '../routers/currentPlanRouter'

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
    {
        path: '/current-plan',
        route: currentPlanRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;