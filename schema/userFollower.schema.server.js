const mongoose = require('mongoose');

const userFollowerSchema = mongoose.Schema({
    _id : Number,
    userId : {type : Number , ref : 'UserModel'},
    followerId : {type : Number , ref : 'UserModel'}
},{collection: 'userFollowers'});

module.exports = userFollowerSchema;