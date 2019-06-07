const hash = require('./hash');

describe('example-1', () => {
  describe('hash', () => {
    it('is a function', () => {
      expect(hash).toEqual(expect.any(Function));
    });
  });
});
