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
    return eventModel.create(evt);
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