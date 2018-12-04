const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    _id : Number,
    comment : String,
    favorite : Boolean,
    uId : {type : Number , ref : 'UserModel'},
    bId : {type:  Number , ref : 'BeerModal'}
} , {collection : 'feedback'});

module.exports = feedbackSchema;