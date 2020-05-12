const MealOrdersHistoryModel = require('../meal-orders-history-model');

const addMealModelStatics = (mealSchema, mealModel) => {
    mealSchema.statics.create = async (meal) => {
        try{
            const newMealOrdersHistory = await MealOrdersHistoryModel.save();
            meal.mealOrdersHistory = newMealOrdersHistory._id;
            await mealModel.save(meal);
        } catch (error) {
            throw new Error(`failed to create new meal. meal: ${JSON.stringify(meal)}. Error: ${error.message}.`);
        }
    };
};

module.exports = {addMealModelStatics};