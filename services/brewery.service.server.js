const breweryDao = require('../dao/brewery.dao.server');

module.exports = app => {
    addBrewery = (req ,res ) =>{
        breweryDao.createBrewery(req.body).then(result =>{
            res.send(result)
        })
    };

    getAllBrewery = (req , res ) =>{
        breweryDao.findAllBreweries().then(result=>{
            res.send(result)
        })
    };

    deleteBreweryById =(req , res )=>{
        breweryDao.deleteBreweryById(req.params['brId']).then(result=>{
            res.send(result)
        })
    };

    updateBreweryById =(req , res )=>{
        breweryDao.updateBreweryById(req.params['brId'] , req.body).then(result=>{
            res.send(result)
        })
    };


    app.post('/api/brewery' , addBrewery);
    app.get('/api/brewery' , getAllBrewery);
    app.delete('/api/brewery/:brId' , deleteBreweryById)
    app.put('/api/brewery/:brId' , updateBreweryById)
};