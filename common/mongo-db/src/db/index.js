const mongoose = require('mongoose');

async function connect(connectionString) {
    if(mongoose.connection.readyState === 0){
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    } else {
        console.log(`mongo db state: ${mongoose.STATES[mongoose.connection.readyState]}`);
    }

}

module.exports = connect;