const likesModel = require ('../model/likes.model.server');


findAllLikes = () => likesModel.find().populate('userId beerId').exec();
findAllMyLikes = id => likesModel.find({userId : id}).populate('beerId').exec();
findAllLikesOnBeerId = id => likesModel.find({beerId : id}).populate('userId').exec();
findAllMyLikeOnBeerId =(uId ,bId) => likesModel.find({userId : uId , beerId : bId}).populate('userId beerId').exec();

likesOnBeer = (userId , beerId ,likes) =>
    likesModel.create({userId : userId , beerId : beerId , like : likes.like , rating : likes.rating});

removeLike = (lId) => likesModel.remove({_id : lId});
updateLike = (lId , newLike) => likesModel.update({_id: lId}, {$set: newLike});

module.exports = {
    findAllLikes,
    findAllMyLikes,
    findAllLikesOnBeerId,
    likesOnBeer,
    removeLike,
    findAllMyLikeOnBeerId,
    updateLike
};