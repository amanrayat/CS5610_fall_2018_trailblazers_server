const mongoose = require('mongoose');
const beerSchema = require('../schema/beer.schema.server');
const beerModel = mongoose.model('BeerModel' , beerSchema);

module.exports = beerModel;