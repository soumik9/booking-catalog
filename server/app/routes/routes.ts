import express from 'express';

import authRouter from '../routers/authRouter'
import bookRouter from '../routers/bookRouter'

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
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;