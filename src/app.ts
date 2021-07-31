import express, { Express, Request, Response, NextFunction } from 'express';
import http from 'http';
import config from './config/default';
import { sum } from './utils/sum'

const router: Express = express();

router.use('/', (req: Request, res: Response, next: NextFunction) => {
    return res.send(`hello eiei ${sum(1, 2)}`)
})

const httpServer = http.createServer(router);
const port: any = config.port
httpServer.listen(port, () => console.log(`The server is running on port ${port}`));
