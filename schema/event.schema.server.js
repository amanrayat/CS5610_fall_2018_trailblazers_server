const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name:String,
    eventPlannerId : {type : mongoose.Schema.Types.ObjectId , ref : 'UserModel'},
    breweryId : {type:  String, ref : 'BreweryModel'},
    dateOfEvent : Date,
    timeOfEvent : String,
},{collection: 'events'});

module.exports = eventSchema;