const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SeerArticle = new Schema({
    // id: {
    //     type: Number
    // },
    title: {
        type: String
    },
    URL: {
        type: String
    },
    status: {
        type: String
    },
    date: {
        type: Date
    }
});

module.exports = mongoose.model('SeerArticle', SeerArticle);