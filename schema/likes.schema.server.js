const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId , ref : 'UserModel'},
    beerId : {type:  mongoose.Schema.Types.ObjectId, ref : 'BeerModel'},
    time : { type : Date, default: Date.now },
    like : Boolean ,
    rating : Number
},{collection: 'likes'});

module.exports = likesSchema;