import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './app/routes/routes';
import globalErrorHandler from './utils/globalErrorHandler';
import httpStatus from 'http-status';
import { Server } from 'http';
import bootstrap from './utils/bootstrap';
import cookieParser from 'cookie-parser';

require('dotenv').config();
const app: Application = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// trial route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// all routes
app.use('/api/v1', routes);

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});

// server related works
process.on('uncaughtException', error => {
    console.log('error');
    process.exit(1);
});

let server: Server;
bootstrap(app);

process.on('SIGTERM', () => {
    console.log('SIGTERM is received');
    if (server) {
        server.close();
    }
});