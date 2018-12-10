const userFollowerModel = require ('../model/userFollower.model.server');

findAllFollowers = () => userFollowerModel.find().populate('userId followerId').exec();
findAllMyFollowers = id =>userFollowerModel.find({userId : id}).populate('followerId').exec();
findAllMyFollowing = id =>userFollowerModel.find({followerId : id}).populate('userId').exec();
findAllMyFollowingId = id =>userFollowerModel.find({userId : id},{followerId : 1});
followUser = (userId , followerId) =>
    userFollowerModel.create({userId : userId , followerId : followerId});
RemoveFollowUser = (userId , followerId) =>
    userFollowerModel.remove({userId : userId , followerId :followerId});

module.exports = {
    findAllFollowers,
    findAllMyFollowers,
    findAllMyFollowing,
    followUser,
    RemoveFollowUser,
    findAllMyFollowingId
};