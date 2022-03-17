const debug = require('debug')('db');
const mongoose = require('mongoose');

const connect = async (dbUri) => {
  try {
    const db = await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    debug(`Connected to MongoDB: ${db.connection.host}`);
  } catch (error) {
    debug(`Unable to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connect;
