const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email : String,
    phoneNo : Number,
    type : {type: String , enum : ['CUSTOMER' , 'EVENTPLANNER' , 'ADMIN']},
    admin : {type: Number, ref: 'UserModel'}
}, {collection: 'users'});

module.exports = userSchema;