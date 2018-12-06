module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'trailblazersdb';
    var   connectionString = 'mongodb://trail:trail1602@ds227664.mlab.com:27664/';
    connectionString += databaseName;
    mongoose.connect(connectionString).then((result) => {
        console.log(result)
    }).catch( err => {
        console.log("Not Connected " + err);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected on app termination');
            process.exit(0);
        });
    });
};
