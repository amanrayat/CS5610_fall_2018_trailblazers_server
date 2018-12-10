const mongoose = require('mongoose');

const brewerySchema = mongoose.Schema({
    _id : String,
    name : String,
},{collection: 'breweries'});

module.exports = brewerySchema;
