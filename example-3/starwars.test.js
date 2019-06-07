const starwars = require('./starwars');

jest.mock('node-fetch', () => {
  return () => ({
    // eslint-disable-next-line global-require
    json: () => require('./__stubs__/character-response'),
  });
});

describe('example-3', () => {
  describe('starwars', () => {
    it('is a function', () => {
      expect(starwars).toEqual(expect.any(Function));
    });
  });
});
