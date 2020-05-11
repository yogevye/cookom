const express = require("express");
const bodyParser = require("body-parser");
const logger = require('@cookom/core-logger');
const {UserAuthRouter} = require('@cookom/common-auth');
const {start} = require('@cookom/common-middlewares').beforeMiddleware;
const {end} = require('@cookom/common-middlewares').afterMiddleware;
const SERVICE_NAME = process.env.SERVICE_NAME;
const app = express();

app.use(bodyParser.json());

app.use(start);

app.get('/', function(req, res) {
    res.send(`service ${SERVICE_NAME} is up`);
});

app.use("/api/auth", UserAuthRouter);

// request to handle undefined or all other routes
app.use("*", function(req, res) {
    logger.warn('no such route');
    res.send('no such route');
});

app.use(end);

module.exports = app;
