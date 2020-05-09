const MealSchema = require('meal.schema');
import {addCommonPostHooks} from '../../common/common-hooks'

addCommonPostHooks(MealSchema);

module.exports = MealSchema;