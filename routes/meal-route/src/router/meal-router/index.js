const express = require('express');
const bodyParser = require('body-parser');
const logger = require('@cookom/core-logger');
const {authMiddleware} = require('@cookom/common-auth').UserAuthMiddleware;
import {createMeal} from './meal-router.helper';

const MealRouter = express.Router();

MealRouter.use(bodyParser.json());
MealRouter.use(bodyParser.urlencoded({extended: false}));

UserAuthRouter.route('/')
    .post(authMiddleware, createMeal);

module.exports = MealRouter;