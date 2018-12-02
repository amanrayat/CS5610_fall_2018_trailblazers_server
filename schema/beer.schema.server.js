const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    _id : Number,
    name : String,
    type : String,
    uId : {type : Number , ref : 'UserModel'},
    brId : [{type : Number , ref : 'BreweryModel'}]
} , {collection : 'beer'});

module.exports = beerSchema;