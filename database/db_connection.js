const mongoose = require('mongoose');
require('env2')('./congif.env');

const db = mongoose.connection;
mongoose.connect(process.env.DB_URL, {
  useMongoClient: true
});

module.exports = db;
