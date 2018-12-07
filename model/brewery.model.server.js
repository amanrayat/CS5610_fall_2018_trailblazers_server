const mongoose = require('mongoose');
const bewerySchema = require('../schema/brewery.schema.server');
const breweryModel = mongoose.model('BreweryModel' , bewerySchema);

module.exports = breweryModel;