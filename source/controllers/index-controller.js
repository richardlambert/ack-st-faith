const Sermon = require('../models/sermon');
const withAsyncCatch = require('../utilities/with-async-catch');

const getIndex = withAsyncCatch(async (req, res, next) => {
  const sermon = await Sermon.findOne({}).sort({ date: -1 }).limit(1);
  console.log('in routes/index', sermon);
  return res.render('index', { sermon });
});

module.exports = {
  getIndex,
};
