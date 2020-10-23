const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SeerArticle = new Schema({
    // id: {
    //     type: Number
    // },
    _id: Number,
    title: String,
    // URL: String,
    // status: String,
    date: Date,
    author: String,
    method: String,
    // claims: [{ benefit: String, type:String, strength:String, isSupport:String}],
    year: Number
});

module.exports = mongoose.model('SeerArticle', SeerArticle);