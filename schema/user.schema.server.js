const mongoose = require('mongoose');
const CustomerSchema  = require('./customer.schema.server');
const BrewerSchema  = require('./brewer.schema.server');

const userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    type : {type: String , enum : ['CUSTOMER' , 'BREWER']},
    customer : CustomerSchema,
    brewer : BrewerSchema,
    following : []
}, {collection: 'user'});

module.exports = userSchema;