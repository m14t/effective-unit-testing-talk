const R = require('ramda');

const parseCharaterResponse = R.pipe(
  R.prop('results'),
  R.pluck('name'),
);

module.exports = parseCharaterResponse;
