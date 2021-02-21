import appRoot from 'app-root-path';

const winstonConfig = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: false,
        json: true,
        colorize: false,
        options: {
            flags: 'w'
        }
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: true,
    },
}

export default winstonConfig;