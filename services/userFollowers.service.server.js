const followerDao = require ('../dao/userFollower.dao.server');


module.exports = app =>{

    findAllFollowers = ( req , res ) =>{
        followerDao.findAllFollowers().then(result=>{
            res.send(result)
        })
    };

    findMyFollowers =( req , res ) =>{
        followerDao.findAllMyFollowers(req.params['userId']).then(result=>{
            res.send(result)
        })
    };

    findMyFollowing =( req , res ) =>{
        followerDao.findAllMyFollowing(req.params['userId']).then(result=>{
            res.send(result)
        })
    };
    followUser =( req ,res ) =>{
        followerDao.followUser(req.params['userId'] , req.params['followerId']).then((result )=>{
            res.send(result)
        })
    };
    RemoveFollowUser = ( req ,res ) =>{
        followerDao.RemoveFollowUser(req.params['userId'] , req.params['followerId']).then((result )=>{
            res.send(result)
        })
    };

    app.get('/api/follow' , findAllFollowers);
    app.post('/api/user/:userId/follow/:followerId' , followUser);
    app.delete('/api/user/:userId/unfollow/:followerId' , RemoveFollowUser);
    app.get('/api/user/:userId/follower' , findMyFollowers);
    app.get('/api/user/:userId/following' , findMyFollowing);
};
