const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // _id : mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email : String,
    phoneNo : Number,
    type : {type: String , enum : ['CUSTOMER' , 'EVENTPLANNER' , 'ADMIN']},
    admin : {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: 'user'});

module.exports = userSchema;