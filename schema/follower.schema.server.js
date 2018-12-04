const mongoose = require('mongoose');

const followerSchema = mongoose.Schema({
    _id : Number,
    uId : {type : Number , ref : 'UserModel'},
    fId : {type:  Number , ref : 'UserModel'}
} , {collection : 'follower'});

module.exports = followerSchema;