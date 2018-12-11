const beerDao = require('../dao/beer.dao.server');

module.exports = app => {
    addBeer = (req ,res ) =>{
        beerDao.createBeer(req.body).then(result =>{
            res.send(result)
        })
    };

    getAllBeer = (req , res ) =>{
        beerDao.findAllBeers().then(result=>{
            res.send(result)
        })
    };

    deleteBeerById = (req ,res ) =>{
        beerDao.deleteBeerById(req.params['beerId']).then(result=>{
            res.send(result)
        })
    };

    updateBeerById =(req , res ) => {
        beerDao.updateBeerById(req.params['beerId'], req.body).then(result => {
            res.send(result)
        })
    };

    app.post('/api/beer' , addBeer);
    app.get('/api/beer' , getAllBeer);
    app.delete('/api/beer/:beerId' , deleteBeerById);
    app.put('/api/beer/:beerId' , updateBeerById);
};