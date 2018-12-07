const mongoose = require('mongoose');
const beerAtEventSchema = require('../schema/beersAtEvent');
const beerAtEventModel = mongoose.model('BeerAtEventModel' , beerAtEventSchema);

module.exports = beerAtEventModel;