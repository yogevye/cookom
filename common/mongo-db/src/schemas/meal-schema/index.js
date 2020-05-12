const MealSchema = require('common/mongo-db/src/schemas/meal-schema/meal.schema');
import {addCommonPostHooks} from '../../common/common-hooks';
import {addMealHooks} from './meal.schema.hooks';

addCommonPostHooks(MealSchema);

module.exports = MealSchema;