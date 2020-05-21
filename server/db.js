const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/topic_db';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:')); // --eslint-disable-line
database.once('open', function () {
  console.log('connected!'); // --eslint-disable-line
});

module.exports = mongoose;