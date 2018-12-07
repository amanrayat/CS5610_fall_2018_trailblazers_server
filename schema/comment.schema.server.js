const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    userId : {type : mongoose.Schema.Types.ObjectId , ref : 'UserModel'},

    beerId : {type:  String, ref : 'BeerModel'},
    time : { type : Date, default: Date.now },
    comment : String
},{collection: 'comments'});

module.exports = commentSchema;