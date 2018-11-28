module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'trailblazers';
    var   connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
}; 