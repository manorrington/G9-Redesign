const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    price: String
})

module.exports = mongoose.model('Test', testSchema);