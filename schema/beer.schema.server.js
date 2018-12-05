const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    name : String,
    type : String,
    rating : Number
});

module.exports = beerSchema;