import { v4 as uuidv4 } from 'uuid';

const start = (req, res, next) => {
    req.transactionId = uuidv4();
    req.startTime = new Date().getTime();
};

module.exports = {start};