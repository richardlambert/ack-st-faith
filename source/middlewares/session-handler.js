const debug = require('debug')('session');
const session = require('express-session');
const redis = require('redis');

const RedisStore = require('connect-redis')(session);
const RedisClient = redis.createClient({ legacyMode: true });
RedisClient.connect().catch((error) => debug(error.message));

const sessionHandler = session({
  store: process.env.NODE_ENV === 'production' ? new RedisStore({ client: RedisClient }) : new session.MemoryStore(),
  resave: false,
  saveUninitialized: false,
  secret: process.env.NODE_ENV === 'production' ? process.env.SESSION_SECRET : 'THISISARUBBISHSECRET',
});

module.exports = sessionHandler;
