const userFollowerModel = require ('../model/userFollower.model.server');

findAllFollowers = () => userFollowerModel.find().populate('userId followerId').exec();
findAllMyFollowers = id =>userFollowerModel.find({followerId : id}).populate('userId').exec();
findAllMyFollowing = id =>userFollowerModel.find({userId : id}).populate('followerId').exec();

module.exports = {
    findAllFollowers,
    findAllMyFollowers,
    findAllMyFollowing
};