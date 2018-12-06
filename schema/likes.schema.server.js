const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    userId : {type : Number , ref : 'UserModel'},
    beerId : {type:  Number, ref : 'BeerModel'},
    time : { type : Date, default: Date.now },
    like : Boolean ,
    rating : Number
},{collection: 'likes'});

module.exports = likesSchema;