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

    app.post('/api/beer' , addBeer);
    app.get('/api/beer' , getAllBeer);
};