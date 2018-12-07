const mongoose = require('mongoose');

const beersAtEventSchema = mongoose.Schema({
    eventId : {type : mongoose.Schema.Types.ObjectId , ref : 'EventModel'},
    beerId : {type:  String, ref : 'BeerModel'}
},{collection: 'beerAtEvents'});

module.exports = beersAtEventSchema;