const commentModel = require ('../model/comment.model.server');


findAllComments = () => commentModel.find().populate('userId beerId').exec();
findAllMyComments = id => commentModel.find({userId : id}).populate('beerId').exec();
findAllCommentsOnBeerId = id => commentModel.find({beerId : id}).populate('userId').exec();
findAllMyCommentOnBeerId =(uId ,bId) => commentModel.find({userId : uId , beerId : bId}).populate('userId beerId').exec();

commentOnBeer = (userId , beerId ,comment) =>
    commentModel.create({userId : userId , beerId : beerId , comment : comment});

removeComment = (cId) => commentModel.remove({_id : cId});
updateComment = (cId , newComment) => commentModel.update({_id: cId}, {$set: newComment});

module.exports = {
    findAllComments,
    findAllMyComments,
    findAllCommentsOnBeerId,
    commentOnBeer,
    removeComment,
    findAllMyCommentOnBeerId,
    updateComment
};