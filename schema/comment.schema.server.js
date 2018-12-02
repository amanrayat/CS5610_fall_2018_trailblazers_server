const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id : Number,
    comment : String,
    uId : {type : Number , ref : 'UserModel'},
    bId : {type:  Number , ref : 'BeerModal'}
} , {collection : 'comment'});

module.exports = commentSchema;