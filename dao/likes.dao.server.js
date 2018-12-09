const likesModel = require ('../model/likes.model.server');
const userFollowerDao = require ('../dao/userFollower.dao.server');


findAllLikes = () => likesModel.find().populate('userId beerId').exec();
findAllMyLikes = id => likesModel.find({userId : id}).populate('beerId').exec();
findAllLikesOnBeerId = id => likesModel.find({beerId : id}).populate('userId').exec();
findAllMyLikeOnBeerId =(uId ,bId) => likesModel.find({userId : uId , beerId : bId}).populate('userId beerId').exec();

findDuplicateLike = (userId, beerId) => likesModel.find({
    $and: [
        {'userId': userId},
        {'beerId': beerId}]
});

likesOnBeer = (userId , beerId ,likes) =>
    likesModel.create({userId : userId , beerId : beerId , like : likes.like , rating : likes.rating});

removeLike = (lId) => likesModel.remove({_id : lId});
updateLike = (lId , newLike) => likesModel.update({_id: lId}, {$set: newLike});
recentLikes = () => likesModel.find({}).sort('-time').exec();
recentLikeByFollowing = (id) =>{
    return likesModel.find().populate('userId followerId').exec().then(result=>{
        return userFollowerDao.findAllMyFollowingId(id).then(result2=>{
            let ans =[];
            const followersId = result2.map(x=>x.followerId);
            result.map(x=>{
                if(followersId.includes(x.userId._id)){
                    ans.push(x)
                }
            });
            return ans
        })
    })
};

module.exports = {
    findAllLikes,
    findAllMyLikes,
    findAllLikesOnBeerId,
    findDuplicateLike,
    likesOnBeer,
    removeLike,
    findAllMyLikeOnBeerId,
    updateLike,
    recentLikes,
    recentLikeByFollowing
};