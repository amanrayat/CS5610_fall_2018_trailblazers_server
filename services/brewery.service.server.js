const breweryDao = require('../dao/brewery.dao.server');

module.exports = app => {
    addBrewery = (req ,res ) =>{
        console.log(req.body)
        breweryDao.createBrewery(req.body).then(result =>{
            res.send(result)
        })
    };

    getAllBrewery = (req , res ) =>{
        breweryDao.findAllBreweries().then(result=>{
            res.send(result)
        })
    };

    app.post('/api/brewery' , addBrewery);
    app.get('/api/brewery' , getAllBrewery);
};