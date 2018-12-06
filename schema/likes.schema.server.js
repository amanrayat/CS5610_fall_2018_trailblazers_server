const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    userId : {type : Number , ref : 'UserModel'},
    beerId : {type:  Number, ref : 'BeerModel'},
    like : Boolean ,
    rating : Number
},{collection: 'likes'});

module.exports = likesSchema;