const winston = require('winston')
const {combine, timestamp, label, prettyPrint, json, colorize} = winston.format;

const LEVELS = {
    alert: 0,
    error: 1,
    warn: 2,
    info: 3,
    http: 4,
    debug: 5
};

class LoggerManager {
    logger;

    constructor() {
    }

    init(options) {
        let transports = [new winston.transports.Console()];
        if (options && options.files) options.files.map(file => {
            transports.push(new winston.transports.File({filename:file.filename}))
        });

        this.logger = winston.createLogger({
            levels: LEVELS,
            level: (options && options.level) || 'info',
            format: combine(
                label({label: options && options.serviceName ? options.serviceName : 'simple-service'}),
                timestamp(),
                json()
            ),
            transports: transports
        })
    }

    info(message, transactionId) {
        this.logger.log({level: 'info', message, transactionId});
    }

    debug(message, transactionId) {
        this.logger.log({level: 'debug', message, transactionId});
    }

    warn(message, transactionId) {
        this.logger.log({level: 'warn', message, transactionId});
    }

    error(message, transactionId) {
        this.logger.log({level: 'error', message, transactionId});
    }

    alert(message, transactionId) {
        this.logger.log({level: 'alert', message, transactionId});
    }

    http(message, transactionId) {
        this.logger.log({level: 'http', message, transactionId});
    }
}

module.exports = LoggerManager;
