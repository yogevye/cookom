const mongoose = require('mongoose');

async function connect() {
    if(mongoose.connection.readyState === 0){
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    } else {
        console.log(`mongo db state: ${mongoose.STATES[mongoose.connection.readyState]}`);
    }

}

module.exports = connect;