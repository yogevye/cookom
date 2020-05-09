const winston = require('winston')
const {combine, timestamp, label, prettyPrint, json, colorize} = winston.format;

const LEVELS = {
    alert: 0,
    error: 1,
    warn: 2,
    info: 3,
    http: 4,
    debug: 5
}

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

    info(message, functionName) {
        this.logger.log({level: 'info', message});
    }

    debug(message, functionName) {
        this.logger.log({level: 'debug', message});
    }

    warn(message, functionName) {
        this.logger.log({level: 'warn', message});
    }

    error(message, functionName) {
        this.logger.log({level: 'error', message});
    }

    alert(message, functionName) {
        this.logger.log({level: 'alert', message});
    }

    http(message, functionName) {
        this.logger.log({level: 'http', message});
    }
}

module.exports = LoggerManager;
