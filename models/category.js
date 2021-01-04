const mongoose = require('mongoose');
const connection = require('../service/connection');

// const subCategorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }

        //   subcategories: [subCategorySchema],
    },
    {
        timestamps: true
    }
);

module.exports = connection.model('Category', categorySchema);
