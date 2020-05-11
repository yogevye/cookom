const logger = require('@cookom/core-logger');
const db = require('@cookom/common-mongo-db');
const app = require('./app');

const PORT = process.env.PORT;
const SERVICE_NAME = process.env.SERVICE_NAME;


const initService = () =>{
    logger.init({
        service: process.env.SERVICE_NAME,
        level: 'info'
    });
    db.connect(process.env.MONGODB_URL);
};

const startService = () => {
    app.listen(port, function(err) {
        logger.info(`${SERVICE_NAME} is running on port ${PORT}`);
    });
};

initService();
startService();
