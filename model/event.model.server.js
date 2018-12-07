const mongoose = require('mongoose');
const eventSchema = require('../schema/event.schema.server');
const eventModel = mongoose.model('EventModel' , eventSchema);

module.exports = eventModel;