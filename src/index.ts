import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
// import { helloRouter } from './controllers/helloController';
import { helloRouter } from './controllers/helloController'

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Routes
app.use('/hello', helloRouter);

// Root route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

// Server startup
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

export default app;
