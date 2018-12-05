const mongoose = require('mongoose');
const userFollowerSchema = require('../schema/userFollower.schema.server');
const userFollowerModel = mongoose.model('UserFollowerModel' , userFollowerSchema);

module.exports = userFollowerModel;