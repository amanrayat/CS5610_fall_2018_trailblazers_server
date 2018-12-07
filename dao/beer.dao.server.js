const beerModel = require('../model/beer.model.server');

createBeer = (beer) => beerModel.findById(beer._id).then(result=>{
    if(!result){
        return beerModel.create(beer)
    }
        return []
});
findAllBeers = () => beerModel.find();

module.exports = {
    createBeer,
    findAllBeers
};