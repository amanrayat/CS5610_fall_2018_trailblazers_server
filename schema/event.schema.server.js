const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id : Number,
    eventPlannerId : {type : Number , ref : 'UserModel'},
    breweryId : {type:  String, ref : 'BreweryModel'},
    dateOfEvent : Date,
    timeOfEvent : Number,
},{collection: 'events'});

module.exports = eventSchema;