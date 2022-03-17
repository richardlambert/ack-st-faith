const Sermon = require('../models/sermon');
const ExpressError = require('../utilities/express-error');
const withAsyncCatch = require('../utilities/with-async-catch');

const getSermonIndex = withAsyncCatch(async (req, res, next) => {
  const sermons = await Sermon.find({}).sort({ date: -1 });
  return res.render('sermon/index', { sermons });
});

const getSermonCreate = withAsyncCatch(async (req, res, next) => {});

const getSermonDetail = withAsyncCatch(async (req, res, next) => {
  const { id } = req.params;
  const sermon = await Sermon.findById(id);
  if (!sermon)
    throw new ExpressError(
      "Oops!... We couldn't find what you were looking for",
      404
    );
  return res.render('sermon/detail', { sermon });
});

const getSermonUpdate = withAsyncCatch(async (req, res, next) => {});

const createSermon = withAsyncCatch(async (req, res, next) => {});

const updateSermon = withAsyncCatch(async (req, res, next) => {});

const deleteSermon = withAsyncCatch(async (req, res, next) => {});

module.exports = {
  getSermonIndex,
  getSermonCreate,
  getSermonDetail,
  getSermonUpdate,
  createSermon,
  updateSermon,
  deleteSermon,
};
