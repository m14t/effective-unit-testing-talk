const fetch = require('node-fetch');
const parseCharaterResponse = require('./parse-character-response');

async function getStarWarsCharacters() {
  const response = await fetch('https://swapi.co/api/people');
  const data = await response.json();

  return parseCharaterResponse(data);
}

module.exports = getStarWarsCharacters;
