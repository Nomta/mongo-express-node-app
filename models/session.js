const mongoose = require('mongoose');
const connection = require('../service/connection');

const sessionSchema = new mongoose.Schema({
    token: {
        type: String,
        unique: true,
        required: true
    },
    visited: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = connection.model('Session', sessionSchema);
