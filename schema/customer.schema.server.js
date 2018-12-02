const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    following : []
});

module.exports = customerSchema;