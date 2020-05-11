const MealSchema = require('common/mongo-db/src/schemas/meal-schema/meal.schema');
import {addCommonPostHooks} from '../../common/common-hooks'

addCommonPostHooks(MealSchema);

module.exports = MealSchema;