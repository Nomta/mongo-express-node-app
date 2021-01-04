const mongoose = require('mongoose');
const connection = require('../service/connection');

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = connection.model('Tag', tagSchema);
