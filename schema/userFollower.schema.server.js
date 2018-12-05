const mongoose = require('mongoose');

const userFollowerSchema = mongoose.Schema({
    userId : {type : Number , ref : 'UserModel'},
    followerId : {type : Number , ref : 'UserModel'}
},{collection: 'userFollower'});

module.exports = userFollowerSchema;