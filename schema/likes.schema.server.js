const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    _id : Number,
    userId : {type : Number , ref : 'UserModel'},
    beerId : {type:  String, ref : 'BeerModel'},
    time : { type : Date, default: Date.now },
    like : Boolean ,
    rating : Number
},{collection: 'likes'});

module.exports = likesSchema;