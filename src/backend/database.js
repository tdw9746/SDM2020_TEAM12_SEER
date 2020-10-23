const mongoose = require('mongoose');

if (process.env.CON == undefined) {
    console.log('No environment value for MongoDB connection string found');
    require('dotenv').config();
}

console.log('MongoDB connection string :', process.env.CON);
const connection = process.env.CON;

mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));