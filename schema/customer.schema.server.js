const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    _id : Number,
    fId : {type : Number , ref : 'FollowerModel'}
});

module.exports = customerSchema;