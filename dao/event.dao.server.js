const eventModel = require('../model/event.model.server');

findAllEvents =()=>eventModel.find().populate('eventPlannerId  breweryId').exec();
findEventByEventPlanner = epID => eventModel.find({eventPlanner : epID}).populate('breweryId').exec();
findEventsByBrewery = brId => eventModel.find({breweryId : brId}).populate('eventPlannerId').exec();
findEventById = id => eventModel.findById(id);
removeEventById = eid => eventModel.remove({_id : eid});
updateEventById = (id , event) =>  eventModel.update({_id : id} , {$set : event});
addEvent = (epId , brId , event)=>{

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