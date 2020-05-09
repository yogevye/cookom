const UserSchema = require('user.schema');
import {addCommonPostHooks} from '../../common/common-hooks'

addCommonPostHooks(UserSchema);

module.exports = UserSchema;