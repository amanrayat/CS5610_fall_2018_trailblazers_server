const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    _id : Number,
    cId : {type : Number , ref : 'commentModel'}
});

module.exports = customerSchema;