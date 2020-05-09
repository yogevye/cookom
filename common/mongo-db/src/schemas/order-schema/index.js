const OrderSchema = require('order.schema');
import {addCommonPostHooks} from '../../common/common-hooks'

addCommonPostHooks(OrderSchema);

module.exports = OrderSchema;