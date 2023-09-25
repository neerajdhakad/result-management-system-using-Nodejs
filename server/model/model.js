const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    rollNumber : {
        type : Number,
        required: true,
        unique: true
    },
    name : {
        type: String,
        required: true,
    },
    dob : {
        type: Date,
        required: true,
    },
    score : {
        type: Number,
        required: true,
    },
})

const studentdb = mongoose.model('studentdb', schema);

module.exports = studentdb;