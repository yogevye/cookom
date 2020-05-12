const MealModel = require('../../models/meal-model');
const logger = require('@cookom/core-logger');

const createMeal = async (req,res) => {
    try{
        const {meal} = req.body;
        const newMeal = await MealModel.create(meal)
        res.status(200).json(newMeal);
    } catch (e) {
        logger.error(`failed to create new meal. ${e.message}`);
        res.status(500).json({message: 'failed to create new meal', error: e});
    }
};

module.exports = {createMeal};