const beerAtEventModel = require('../model/beerAtEvent.model.server');

createBeerAtEvent = (beerId , eventId) => beerAtEventModel.create({beerId : beerId, eventId : eventId});
findAllBeerAtEventByEventId = id => beerAtEventModel.find({eventId : id}).populate('beerId').exec();
findAllBeerAtEventByBeerId = id => beerAtEventModel.find({beerId : id}).populate('eventId').exec();
findAllBeerAtEvent = ()=>beerAtEventModel.find();
deleteBeerAtEventById = id => beerAtEventModel.remove({_id : id});

module.exports = {
    createBeerAtEvent,
    findAllBeerAtEvent,
    findAllBeerAtEventByEventId,
    findAllBeerAtEventByBeerId,
    deleteBeerAtEventById
};