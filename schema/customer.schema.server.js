const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    _id : Number,
    cId : {type : Number , ref : 'FeedbackModel'},
    fId : {type : Number , ref : 'FollowerModel'}
});

module.exports = customerSchema;