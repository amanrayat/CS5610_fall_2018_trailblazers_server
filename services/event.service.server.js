const eventDao = require('../dao/event.dao.server');

module.exports = app => {

    getAllEvents = (req , res )=>{
        eventDao.findAllEvents().then(result=>{
            res.send(result)
        })
    };
    getEventById = (req , res ) =>{
        eventDao.findEventById(req.params['eId']).then(result=>{
            res.send(result)
        })
    };
    getEventsByPlannerId = (req , res )=>{
        eventDao.findEventByEventPlanner(req.params['epId']).then(result=>{
            res.send(result)
        })
    };
    getEventsByBreweryId = (req , res ) =>{
        eventDao.findEventsByBrewery(req.params['brId']).then(result=>{
            res.send(result)
        })
    };
    deleteEventById = (req,res) =>{
        eventDao.removeEventById(req.params['eId']).then(result=>{
            res.send(result)
        })
    };

    updateEventById = (req,res) =>{
        eventDao.updateEventById(req.params['eId'] , req.body).then(result=>{
            res.send(result)
        })
    };
    createEvent = (req,res)=>{
        eventDao.addEvent(req.params['epId'] , req.body).then(result=>{
            res.send(result)
        })
    };

    app.get('/api/event' , getAllEvents);
    app.get('/api/event/:eId' , getEventById);
    app.delete('/api/event/:eId' , deleteEventById);
    app.put('/api/event/:eId' , updateEventById);
    app.get('/api/eventplanner/:epId/event' , getEventsByPlannerId);
    app.post('/api/eventplanner/:epId/event' , createEvent);
    app.get('/api/brewery/:brId/event' , getEventsByPlannerId);
};