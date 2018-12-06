const mongoose = require('mongoose');
const likesSchema = require('../schema/likes.schema.server');
const likesModel = mongoose.model('LikesModel' , likesSchema);

module.exports = likesModel;