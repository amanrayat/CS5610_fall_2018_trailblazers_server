const mongoose = require('mongoose');
const CustomerSchema  = require('./customer.schema.server');
const userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email : String,
    type : {type: String , enum : ['CUSTOMER' , 'EVENTPLANNER' , 'ADMIN']},
    customer : CustomerSchema,
    eventPlanner : PlannerSchema,
    admin : AdminSchema
}, {collection: 'user'});

module.exports = userSchema;