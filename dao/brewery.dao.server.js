const breweryModel = require('../model/brewery.model.server');

createBrewery = (brewery) => breweryModel.findById(brewery._id).then(result=>{
    if(!result){
        return breweryModel.create(brewery)
    }
    return []
});
findAllBreweries = () => breweryModel.find();

deleteBreweryById = brId =>breweryModel.remove({_id:brId});
updateBreweryById =(id , brewery) => breweryModel.update({_id: id}, {$set: brewery})

module.exports = {
    createBrewery,
    findAllBreweries,
    deleteBreweryById,
    updateBreweryById
};