const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
    _id : String,
    name : String,
    nameDisplay : String,
    description : String,
    createDate : String,
    updateDate : String,
    breweries : [String],
    available : [],
    glass:String,
    servingTemperatureDisplay : String,
    isOrganic : Boolean,
    abv:String,
    ibu : String,
    og : String,
    srm : String

} , {collection : 'beers'});

module.exports = beerSchema;
