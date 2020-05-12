const addMealHooks = (userSchema) => {
    userSchema.pre('save', async function (next) {
        let meal = this;
        meal.creationTime = new Date();
        meal.totalProfit = 0;
        meal.activeOrders = {
            profit: 0,
            orders: [],
            orderLimit : -1
        };
        next()
    });
};

module.exports = {addMealHooks};