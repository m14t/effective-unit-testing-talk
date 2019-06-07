const starwars = require('./starwars');

describe('example-3', () => {
  describe('starwars', () => {
    it('is a function', () => {
      expect(starwars).toEqual(expect.any(Function));
    });

    it('returns a list of characters', async () => {
      const result = await starwars();

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
