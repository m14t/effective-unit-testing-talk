const R = require('ramda');

const aLowerCode = 'a'.charCodeAt();
const zLowerCode = 'z'.charCodeAt();
const aUpperCode = 'A'.charCodeAt();
const zUpperCode = 'Z'.charCodeAt();

const between = (lower, higher) => R.allPass([R.lte(lower), R.gte(higher)]);
const isLower = between(aLowerCode, zLowerCode);
const isUpper = between(aUpperCode, zUpperCode);

const hash = R.pipe(
  R.map((char) => {
    const charCode = char.charCodeAt();
    if (isLower(charCode)) {
      return String.fromCodePoint(
        ((charCode - aLowerCode + 13) % 26) + aLowerCode,
      );
    }
    if (isUpper(charCode)) {
      return String.fromCodePoint(
        ((charCode - aUpperCode + 13) % 26) + aUpperCode,
      );
    }

    return char;
  }),
  R.join(''),
);

module.exports = hash;
