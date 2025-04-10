import { Router, Request, Response } from 'express';

export const helloRouter = Router();

// Sample route
helloRouter.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the Hello World route!' });
});

// export { helloRouter };
