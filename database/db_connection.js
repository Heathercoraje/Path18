const mongoose = require('mongoose');
require('env2')('./congif.env');

const db = mongoose.connection;
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});

module.exports = db;
