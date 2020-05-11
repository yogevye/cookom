import {v4 as uuidv4} from "uuid";
const logger = require('@cookom/core-logger');

const end = (req, res, next) => {
    const transactionId = req.transactionId;
    const startTime = req.startTime;
    const transactionTimeDelta = new Date().getTime() - req.startTime;
    const userId = req.tokenData ? req.tokenData.id : 'unknown';
    const route = req.route.path;
    const status = res.status;

    const message = `transction finished with status: ${status}. userId: ${userId}, route: ${route}, startTime: ${new Date(startTime)}, deltaTime: ${transactionTimeDelta}ms`;

    if(status === 200){
        logger.info(message, transactionId);
    } else if(status >= 400 && status < 500){
        logger.warn(message, transactionId);
    } else {
        logger.error(message, transactionId);
    }
};

module.exports = {end};