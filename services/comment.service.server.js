const commentDao = require('../dao/comment.dao.service');

module.exports = app => {


    getAllCommentsOnBeer = (req ,res ) =>{
        commentDao.findAllCommentsOnBeerId(req.params['beerId']).then(result=>{
            res.send(result)
        })
    };
    getCommentOnBeerByUserId = (req,res)=>{
        commentDao.findAllMyCommentOnBeerId(req.params['userId'],req.params['beerId']).then(result=>{
            res.send(result)
        })
    };

    getAllCommentsByUserId = (req ,res )=>{
        commentDao.findAllMyComments(req.params['userId']).then(result=>{
            res.send(result)
        })
    };
    deleteComment = (req , res ) =>{
        commentDao.removeComment(req.params['commentId']).then(result=>{
            res.send(result)
        })
    };
    getAllComments = (req , res ) =>{
        commentDao.findAllComments().then(result=>{
            res.send(result)
        })
    };
    addcomment = (req , res ) =>{
        commentDao.commentOnBeer(req.params['userId'],req.params['beerId'] , req.body).then(result=>{
            res.send(result)
        })
    };

    updateComment = (req , res ) =>{
        commentDao.updateComment(req.params['beerId'] , req.body).then(result=>{
            res.send(result)
        })
    };

    allComments = (req,res) =>{
        commentDao.AllComments().then(result=>{
            res.send(result)
        })
    };

    getMyRecentComment = (req ,res ) =>{
        commentDao.recentCommentByFollowing(req.params['userId']).then(result=>{
            res.send(result)
        })
    }

    app.get('/api/beer/:beerId/comment' , getAllCommentsOnBeer);
    app.post('/api/user/:userId/beer/:beerId/comment' , addcomment);
    app.put('/api/beer/:beerId/comment' , updateComment);
    app.delete('/api/beer/:beerId/comment/:commentId' , deleteComment);
    app.get('/api/user/:userId/beer/:beerId/comment' , getCommentOnBeerByUserId);
    app.get('/api/user/:userId/comment' , getAllCommentsByUserId);
    app.get('/api/user/:userId/recentcomment' , getMyRecentComment);
    app.get('/api/comment' , getAllComments);
    app.get('/api/allComments' , allComments);
};