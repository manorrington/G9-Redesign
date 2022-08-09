const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String
})

module.exports = mongoose.model('Test', testSchema);