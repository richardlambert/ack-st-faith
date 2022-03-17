const os = require('os');
const path = require('path');
const debug = require('debug')('app');
const engine = require('ejs-mate');
const express = require('express');
const flash = require('express-flash');
const methodOverride = require('method-override');
const connect = require('./source/database/connect');
const sessionHandler = require('./source/middlewares/session-handler');
const indexRoutes = require('./source/routes/index-routes');
const authenticationRoutes = require('./source/routes/authentication-routes');
const sermonRoutes = require('./source/routes/sermon-routes');
const errorHandler = require('./source/middlewares/error-handler');
const notFoundHandler = require('./source/middlewares/not-found-handler');

const app = express();
const port = process.env.PORT;
const dbUri = process.env.DB_URI;

// connect to database
connect(dbUri);
// setup view engine
app.engine('ejs', engine);
app.set('views', path.join(__dirname, './source/views'));
app.set('view engine', 'ejs');
// setup static routing middlware
app.use(express.static(path.join(__dirname, 'public')));
// setup body-parsing middleware
app.use(express.urlencoded({ extended: false }));
// setup session-handling middleware
app.use(sessionHandler);
// setup flash-messaging middleware
app.use(flash());
// setup method-override middleware
app.use(methodOverride('_method'));
// setup index route
app.get('/', indexRoutes);
// setup authentication routes
app.use('/auth', authenticationRoutes);
// setup sermon routes
app.use('/sermons', sermonRoutes);
// setup not-found middleware
app.use('*', notFoundHandler);
// setup error-handling middleware
app.use(errorHandler);

app.listen(port, () => {
  debug(`listening at *:${port}`);
});
