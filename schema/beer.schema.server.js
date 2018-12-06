const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    _id : Number,
    name : String,
    type : String,
    rating : Number
} , {collection : 'beer'});

module.exports = beerSchema;
