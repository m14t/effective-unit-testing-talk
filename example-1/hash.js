const rot13 = require('ebg13');

function hash(input) {
  return rot13(input);
}

module.exports = hash;
