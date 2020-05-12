const UserSchema = require('common/mongo-db/src/schemas/user-schema/user.schema');
import {addCommonPostHooks} from '../../common/common-hooks'

addCommonPostHooks(UserSchema);

module.exports = {tableName: 'user', schema: UserSchema};