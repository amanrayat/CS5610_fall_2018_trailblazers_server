const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userId : {type : Number , ref : 'UserModel'},
    beerId : {type:  Number , ref : 'BeerModel'},
    comment : String
},{collection: 'comment'});

module.exports = commentSchema;