const mongoose = require('mongoose');
const connection = require('../service/connection');

const replySchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        //   comments: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Comment'
        //   }],

        text: {
            type: String,
            required: true
        },

        rate: Number,
        // rate: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: 'Rate'
        // },

        isSolution: Boolean
    },
    {
        timestamps: true
    }
);

module.exports = connection.model('Reply', replySchema);
