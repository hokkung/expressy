import express, { Express, Request, Response, NextFunction } from 'express';
import http from 'http';
import config from './config/default';

const router: Express = express();

router.use('/', (req: Request, res: Response, next: NextFunction) => {
    return res.send('hello eiei')
})

const httpServer = http.createServer(router);
const port: any = config.port
httpServer.listen(port, () => console.log(`The server is running on port ${port}`));
