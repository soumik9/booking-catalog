import express from 'express';

import authRouter from '../app/routers/authRouter'

const router = express.Router();

const apiRoutes: { path: string, route: any }[] = [
    {
        path: '/auth',
        route: authRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;