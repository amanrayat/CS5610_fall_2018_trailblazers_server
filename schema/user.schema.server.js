const mongoose = require('mongoose');
const CustomerSchema  = require('./customer.schema.server');
const PlannerSchema = require('./eventPlanner.schema.servver');
const AdminSchema = require('./admin.schema.server');

const userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email : String,
    phoneNo : Number,
    type : {type: String , enum : ['CUSTOMER' , 'EVENTPLANNER' , 'ADMIN']},
    admin : {type: Number, ref: 'user'}
}, {collection: 'user'});

module.exports = userSchema;