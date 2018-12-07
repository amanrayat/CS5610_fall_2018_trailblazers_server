const eventModel = require('../model/event.model.server');
const beerDao = require('../dao/beer.dao.server');
const beerAtEventDao = require('../dao/beerAtEvent.dao.server');

const axios = require('axios');

findAllEvents =()=>eventModel.find().populate('eventPlannerId  breweryId').exec();
findEventByEventPlanner = epID => eventModel.find({eventPlanner : epID}).populate('breweryId').exec();
findEventsByBrewery = brId => eventModel.find({breweryId : brId}).populate('eventPlannerId').exec();
findEventById = id => eventModel.findById(id);
removeEventById = eid => eventModel.remove({_id : eid});
updateEventById = (id , event) =>  eventModel.update({_id : id} , {$set : event});
addEvent = (epId  , event)=>{
    const evt = {
        name:event.name,
        eventPlannerId : epId,
        breweryId : event.breweryId,
        dateOfEvent : event.dateOfEvent?event.dateOfEvent: Date.now(),
        timeOfEvent : event.timeOfEvent,
    };
    return eventModel.create(evt).then(result=>{
        let beers = [];
        const brewerUrl = 'https://sandbox-api.brewerydb.com/v2/brewery/'+event.breweryId+'/beers?key=21ed24bf7af4b64476155e7902e27d5e'
        return axios.get(brewerUrl).then(result1=>{
             result1.data.data.map(beer=>{
                beers.push(beer)
            });

            beers = JSON.parse(JSON.stringify(beers).split('"id":').join('"_id":'));
            beers.map(beer=>beerDao.createBeer(beer));
            beers.map(beer=>beerAtEventDao.createBeerAtEvent(beer._id , result._id))
        })
    })
};

module.exports = {
    findAllEvents,
    findEventByEventPlanner,
    findEventsByBrewery,
    findEventById,
    removeEventById,
    updateEventById,
    addEvent
};