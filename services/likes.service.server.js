const likeDao = require('../dao/likes.dao.server');

module.exports = app => {

    getAllLikesOnBeer = (req ,res ) =>{
        likeDao.findAllLikesOnBeerId(req.params['beerId']).then(result=>{
            res.send(result)
        })
    };
    getLikeOnBeerByUserId = (req,res)=>{
        likeDao.findAllMyLikeOnBeerId(req.params['userId'],req.params['beerId']).then(result=>{
            res.send(result)
        })
    };

    getAllLikesByUserId = (req ,res )=>{
        likeDao.findAllMyLikes(req.params['userId']).then(result=>{
            res.send(result)
        })
    };
    deleteLike = (req , res ) =>{
        likeDao.removeLike(req.params['likeId']).then(result=>{
            res.send(result)
        })
    };
    getAllLikes = (req , res ) =>{
        likeDao.findAllLikes().then(result=>{
            res.send(result)
        })
    };
    addlike = (req , res ) =>{
        likeDao.likesOnBeer(req.params['userId'],req.params['beerId'] , req.body).then(result=>{
            res.send(result)
        })
    };

    updateLike = (req , res ) =>{
        likeDao.updateLike(req.params['beerId'] , req.body).then(result=>{
            res.send(result)
        })
    };

    recentLikes = (req,res) =>{
        likeDao.recentLikes().then(result=>{
            res.send(result.slice(0,6))
        })
    };

    getMyRecentLikes = (req,res)=>{
        likeDao.recentLikeByFollowing(req.params['userId']).then(result=>{
            res.send(result)
        })
    };

    app.get('/api/beer/:beerId/like' , getAllLikesOnBeer);
    app.post('/api/user/:userId/beer/:beerId/like' , addlike);
    app.put('/api/beer/:beerId/like' , updateLike);
    app.delete('/api/beer/:beerId/like/:likeId' , deleteLike);
    app.get('/api/user/:userId/beer/:beerId/like' , getLikeOnBeerByUserId);
    app.get('/api/user/:userId/like' , getAllLikesByUserId);
    app.get('/api/like' , getAllLikes);
    app.get('/api/recentlike' , recentLikes);
    app.get('/api/user/:userId/recentlikes' , getMyRecentLikes);

};