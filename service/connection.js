const mongoose = require('mongoose');
// const beautifyUnique = require('mongoose-beautiful-unique-validation');
const { mongodb } = require('../config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// mongoose.set('useFindAndModify', false);
// mongoose.set('debug', false);
// mongoose.plugin(beautifyUnique);

mongoose.connect(mongodb.uri);

module.exports = mongoose;
