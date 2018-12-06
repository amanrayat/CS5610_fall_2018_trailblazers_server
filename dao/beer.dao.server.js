const beerModel = require('../model/beer.model.server');

createBeer = (beer) => beerModel.create(beer);
findAllBeers = () => beerModel.find();

module.exports = {
    createBeer,
    findAllBeers
};