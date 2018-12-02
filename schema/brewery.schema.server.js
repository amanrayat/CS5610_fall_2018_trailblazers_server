const mongoose = require('mongoose');

const brewerySchema = mongoose.Schema({
    _id : Number,
    name : String,
    uId : {type : Number , ref : 'UserModel'},
    bId : [{type:  Number , ref : 'BeerModal'}]
} , {collection : 'brewery'});

module.exports = brewerySchema;