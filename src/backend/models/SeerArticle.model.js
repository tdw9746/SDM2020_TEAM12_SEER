const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SeerArticle = new Schema({
    // id: {
    //     type: Number
    // },
    title: String,
    URL: String,
    status: String,
    date: Date,
    author: String,
    SEmethods: String,
    claims: [String]
});

module.exports = mongoose.model('SeerArticle', SeerArticle);