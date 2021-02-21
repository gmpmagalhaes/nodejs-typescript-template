import winston, { format } from 'winston';
import { config } from '../configs';

export const logger = winston.createLogger({
    transports: [
        new winston.transports.File(config.winston.file),
        new winston.transports.Console(config.winston.console)
    ],
    exitOnError: false,
    format: format.combine(
        format.timestamp(),
        format.simple()
    )
});

export const stream = {
    write: (message: string) => {
        logger.info(message);
    }
}