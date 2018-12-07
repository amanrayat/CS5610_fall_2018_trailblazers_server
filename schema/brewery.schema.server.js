const mongoose = require('mongoose');

const brewerySchema = mongoose.Schema({
    _id : String,
    name : String,
    eventId : {type : mongoose.Schema.Types.ObjectId , ref : 'EventModel'}
},{collection: 'breweries'});

module.exports = brewerySchema;
