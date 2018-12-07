const beerAtEventDao = require('../dao/beerAtEvent.dao.server');

module.exports = app => {
    getAllBeersAtEvent =(req,res)=>{
        beerAtEventDao.findAllBeerAtEvent().then(result=>{
            res.send(result)
        })
    };

    app.get('/api/beeratevent' , getAllBeersAtEvent)
};