module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'trailblazersdb';
    var   connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
};
