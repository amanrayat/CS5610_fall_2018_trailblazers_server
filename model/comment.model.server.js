const mongoose = require('mongoose');
const commentSchema = require('../schema/comment.schema.server');
const commentModel = mongoose.model('commentModel' , commentSchema);

module.exports = commentModel;