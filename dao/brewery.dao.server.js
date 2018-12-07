const breweryModel = require('../model/brewery.model.server');

createBrewery = (brewery) => breweryModel.findById(brewery._id).then(result=>{
    if(!result){
        return breweryModel.create(brewery)
    }
    return []
});
findAllBreweries = () => breweryModel.find();

module.exports = {
    createBrewery,
    findAllBreweries
};