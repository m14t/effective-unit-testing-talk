const R = require('ramda');
const fetch = require('node-fetch');

async function getStarWarsCharacters() {
  const response = await fetch('https://swapi.co/api/people');
  const data = await response.json();

  return R.pluck('name', data.results);
}

module.exports = getStarWarsCharacters;
