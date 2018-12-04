const feedbackModel = require('../model/feedback.model.server');

findAllFeedback = () => feedbackModel.find().populate('uId').exec();
addFeedback = feedback =>feedbackModel.create(feedback);


module.exports = {
    findAllFeedback,
    addFeedback
};
