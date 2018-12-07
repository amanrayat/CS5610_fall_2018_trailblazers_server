const beerAtEventDao = require('../dao/beerAtEvent.dao.server');

module.exports = app => {
    getAllBeersAtEvent =(req,res)=>{
        beerAtEventDao.findAllBeerAtEvent().then(result=>{
            res.send(result)
        })
    };

    getAllBeersAtEventByEventId = (req ,res ) => {
        beerAtEventDao.findAllBeerAtEventByEventId(req.params['eId']).then(result=>{
            res.send(result)
        })

    };
    getAllBeersAtEventByBeertId = (req ,res ) => {
        beerAtEventDao.findAllBeerAtEventByBeerId(req.params['bId']).then(result=>{
            res.send(result)
        })
    };

    deleteBeerAtEventById = (req ,res) =>{
        beerAtEventDao.deleteBeerAtEventById(req.params['id']).then(result=>{
            res.send(result)
        })
    };

    app.get('/api/beeratevent' , getAllBeersAtEvent);
    app.delete('/api/beeratevent/:id' , deleteBeerAtEventById);
    app.get('/api/beeratevent/beer/:bId' , getAllBeersAtEventByBeertId);
    app.get('/api/beeratevent/event/:eId' , getAllBeersAtEventByEventId);

};