const mongoose = require('mongoose');

const userFollowerSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    userId : {type : mongoose.Schema.Types.ObjectId , ref : 'UserModel'},
    followerId : {type : mongoose.Schema.Types.ObjectId , ref : 'UserModel'}
},{collection: 'userFollower'});

module.exports = userFollowerSchema;