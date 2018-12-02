const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id : Number,
    comment : String,
    uId : {type : Number , ref : 'UserModel'}
} , {collection : 'comment'});

module.exports = commentSchema;