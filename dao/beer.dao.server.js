const beerModel = require('../model/beer.model.server');

createBeer = (beer) => beerModel.findById(beer._id).then(result=>{
    if(!result){
        return beerModel.create(beer)
    }
        return []
});
findAllBeers = () => beerModel.find();
deleteBeerById = id => beerModel.remove({_id : id});

createBeer2 = (beer) => beerModel.findOneAndUpdate({_id : beer._id}, beer, {upsert : true , new: true, runValidators: true});

module.exports = {
    createBeer,
    findAllBeers,
    createBeer2,
    deleteBeerById

};