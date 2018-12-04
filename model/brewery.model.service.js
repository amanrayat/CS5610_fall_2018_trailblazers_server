const mongoose = require('mongoose');
const brewerySchema = require('../schema/brewery.schema.server');
const breweryModel = mongoose.model('BreweryModel' , brewerySchema);

module.exports = breweryModel;