const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id : Number,
    userId : {type : Number , ref : 'UserModel'},
    beerId : {type:  Number, ref : 'BeerModel'},
    time : { type : Date, default: Date.now },
    comment : String
},{collection: 'comment'});

module.exports = commentSchema;