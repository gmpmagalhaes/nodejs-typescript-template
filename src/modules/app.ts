import express, { Application } from 'express';
import morgan from 'morgan';
import { Config } from '../models';
import { stream, logger } from './logger';

const app: Application = express();

class ExpressServer {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }

    init(): void {

        // logger
        app.use(morgan("combined", { stream: stream }));

        this.listen();
    }

    listen(): void {
        app.listen(this.config.application.port, () => {
            logger.info(`Server running @ localhost:${this.config.application.port}`);
        });
    }
}

export default ExpressServer;

