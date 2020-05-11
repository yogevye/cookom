const addCommonPostHooks = (userSchema) => {
    userSchema.post('save', async function (next) {
        console.log('%s has been saved', doc._id);

        next()
    });

    userSchema.post('remove', async function (next) {
        console.log('%s has been removed', doc._id);

        next()
    });
};

module.exports = {addPostHooks};