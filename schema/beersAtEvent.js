const mongoose = require('mongoose');

const beersAtEventSchema = mongoose.Schema({
    _id : Number,
    eventId : {type : Number , ref : 'EventModel'},
    beerId : {type:  String, ref : 'BeerModel'}
},{collection: 'beerAtEvents'});

module.exports = beersAtEventSchema;