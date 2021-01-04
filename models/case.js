const mongoose = require('mongoose');
const connection = require('../service/connection');

const caseSchema = new mongoose.Schema(
    {
        /* required */

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        title: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },

        //   subcategory: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //   },

        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tag',
                required: true
            }
        ],

        /* other */

        images: [String],

        price: Number,

        rate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rate'
        },

        replies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Reply'
            }
        ],

        settings: Number,

        type: {
            type: String,
            enum: config.app.types,
            required: true,
            default: 'case'
        }
    },
    {
        timestamps: true
    }
);

module.exports = connection.model('Case', caseSchema);
