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

    app.get('/api/follow' , findAllFollowers);
    app.get('/api/user/:userId/follower' , findMyFollowers);
    app.get('/api/user/:userId/following' , findMyFollowing);
};
