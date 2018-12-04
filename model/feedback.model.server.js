const mongoose = require('mongoose');
const feedbackSchema = require('../schema/feedback.schema.server');
const feedbackModel = mongoose.model('FeedbackModel' , feedbackSchema);

module.exports = feedbackModel;