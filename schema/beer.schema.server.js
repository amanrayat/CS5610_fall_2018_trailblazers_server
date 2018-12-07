const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    _id : String,
    name : String,
    nameDisplay : String,
    description : String,
    createDate : String,
    updateDate : String,
    breweries : String,
    available : Boolean,
    glass:String,
    servingTemperatureDisplay : String,
    isOrganic : Boolean,
    abv:Number,
    ibu : Number,
    og : Number,
    srm : Number

} , {collection : 'beer'});

module.exports = beerSchema;
