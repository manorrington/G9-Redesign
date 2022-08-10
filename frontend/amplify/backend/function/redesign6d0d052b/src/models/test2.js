const mongoose = require('mongoose');

const test2Schema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    price: String
})

module.exports = mongoose.model('Test2', test2Schema);