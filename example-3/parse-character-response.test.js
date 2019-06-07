const parseCharaterResponse = require('./parse-character-response');
const charaterResponse = require('./__stubs__/character-response');

describe('example-3', () => {
  describe('parseCharaterResponse', () => {
    it('is a function', () => {
      expect(parseCharaterResponse).toEqual(expect.any(Function));
    });

    it('returns a list of characters', () => {
      const result = parseCharaterResponse(charaterResponse);

      expect(result).toEqual([
        'Luke Skywalker',
        'C-3PO',
        'R2-D2',
        'Darth Vader',
        'Leia Organa',
        'Owen Lars',
        'Beru Whitesun lars',
        'R5-D4',
        'Biggs Darklighter',
        'Obi-Wan Kenobi',
      ]);
    });
  });
});
