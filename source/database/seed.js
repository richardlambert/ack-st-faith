const debug = require('debug')('seed');
const connect = require('./connect');
const sermonSeed = require('./sermond-seed.json');
const Sermon = require('../models/sermon');

const dbUri = process.env.DB_URI;

const seed = async (dbUri, seedData) => {
  try {
    await connect(dbUri);
    const seeded = await Sermon.findOne({});
    if (seeded) {
      debug('db already seeded');
    } else {
      await Sermon.insertMany(seedData);
      debug('db seeded');
    }
  } catch (error) {
    debug(`db not seeded: ${error.message}`);
    process.exit(1);
  }
};

seed(dbUri, sermonSeed);
