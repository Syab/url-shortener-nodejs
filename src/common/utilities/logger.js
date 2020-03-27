import winston from "winston";
import moment from "moment";

const datetimestamp = () => moment().format('YYYYMMDD');

const config = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
        custom: 7,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'white',
        verbose: 'blue',
        debug: 'cyan',
        silly: 'magenta',
        custom: 'grey'
    }
};

winston.addColors(config.colors);

export const logger = winston.createLogger({
    levels: config.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info =>
            `${info.timestamp} ${info.level} : ${info.message}`
        ),
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: `logs/warnings/${datetimestamp()}_be-warning.log`,
            level: 'custom'
        }),
        new winston.transports.File({
            filename: `logs/errors/${datetimestamp()}_be-error.log`,
            level: 'error'
        }),
    ],
    level: 'custom'
});