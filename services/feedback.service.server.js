const feedbackDao = require('../dao/feedback.dao.server');

module.exports = app =>{

    addFeedback = (req , res)=>{
        feedbackDao.addFeedback(req.body).then(result=>{
            res.send(result)
        })
    };

    findAllFeedback = (req , res) =>{
        feedbackDao.findAllFeedback().then(result=>{
            res.send(result)
        })
    };

    app.post('/api/feedback', addFeedback);
    app.get('/api/feedback', findAllFeedback);

};
