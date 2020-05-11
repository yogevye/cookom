const OrderSchema = require('common/mongo-db/src/schemas/order-schema/order.schema');
import {addCommonPostHooks} from '../../common/common-hooks'

addCommonPostHooks(OrderSchema);

module.exports = OrderSchema;