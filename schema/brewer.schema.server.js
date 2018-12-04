const mongoose = require('mongoose');

const brewerSchema = mongoose.Schema({
    _id : Number,
    brId : {type : Number , ref : 'BreweryModel'},
    bId : {type : Number , ref : 'BeerModel'}

});

module.exports = brewerSchema;