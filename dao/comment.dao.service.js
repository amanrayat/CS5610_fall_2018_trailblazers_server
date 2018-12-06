const commentModel = require ('../model/comment.model.server');
const userFollowerDao = require ('../dao/userFollower.dao.server');


findAllComments = () => commentModel.find().populate('userId beerId').exec();
findAllMyComments = id => commentModel.find({userId : id}).populate('beerId').exec();
findAllCommentsOnBeerId = id => commentModel.find({beerId : id}).populate('userId').exec();
findAllMyCommentOnBeerId =(uId ,bId) => commentModel.find({userId : uId , beerId : bId}).populate('userId beerId').exec();

commentOnBeer = (userId , beerId ,comment) =>
    commentModel.create({userId : userId , beerId : beerId , comment : comment.comment});

removeComment = (cId) => commentModel.remove({_id : cId});
updateComment = (cId , newComment) => commentModel.update({_id: cId}, {$set: newComment});
recentComments = () => commentModel.find({}).sort('-time').exec();
recentCommentByFollowing = (id) =>{
    return commentModel.find().populate('userId').exec().then(result=>{
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
    findAllComments,
    findAllMyComments,
    findAllCommentsOnBeerId,
    commentOnBeer,
    removeComment,
    findAllMyCommentOnBeerId,
    updateComment,
    recentComments,
    recentCommentByFollowing
};