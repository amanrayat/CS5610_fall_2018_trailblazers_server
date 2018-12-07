const beerAtEventModel = require('../model/beerAtEvent.model.server');

createBeerAtEvent = (beerId , eventId) =>{
    beerAtEventModel.create({beerId : beerId, eventId : eventId})
};
findAllBeerAtEvent = ()=>beerAtEventModel.find();

module.exports = {
    createBeerAtEvent,
    findAllBeerAtEvent
}