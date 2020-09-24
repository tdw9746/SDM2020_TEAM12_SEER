const mongoose = require('mongoose');

console.log('No value for FOO yet:', process.env.CON);

if (process.env.CON == undefined) {
    console.log('Trying to read CON');
    require('dotenv').config();
}

console.log('Now the value for FOO is:', process.env.CON);
const connection = process.env.CON;

mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));