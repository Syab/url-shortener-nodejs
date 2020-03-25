import winston from "winston";
import moment from "moment";

const datetimestamp = () => moment().format('YYYYMMDD');

const config = {
    levels: {
        ERROR: 0,
        WARN: 1,
        INFO: 2,
        HTTP: 3,
        VERBOSE: 4,
        DEBUG: 5,
        SILLY: 6,
        CUSTOM: 7,
    },
    colors: {
        ERROR: 'red',
        WARN: 'yellow',
        INFO: 'green',
        HTTP: 'white',
        VERBOSE: 'blue',
        DEBUG: 'cyan',
        SILLY: 'magenta',
        CUSTOM: 'grey'
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
            level: 'CUSTOM'
        }),
        new winston.transports.File({
            filename: `logs/errors/${datetimestamp()}_be-error.log`,
            level: 'ERROR'
        }),
    ],
    level: 'CUSTOM'
});