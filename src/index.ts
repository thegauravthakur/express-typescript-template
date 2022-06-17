import express, { Request, Response } from 'express';
import { createHttpsServer, createHttpServer } from './utils/server';

const app = express();
const httpsServer = createHttpsServer(app);
const httpServer = createHttpServer(app);

const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('hey there!');
});

httpsServer.listen(port, () => {
    console.log(`secure server started at port ${port}`);
});

httpServer.listen(4242, () => {
    console.log(`unsecure server started at port 4242`);
});
