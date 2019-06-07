const hash = require('./hash');

describe('example-1', () => {
  describe('hash', () => {
    it('is a function', () => {
      expect(hash).toEqual(expect.any(Function));
    });

    it('encodes a string', () => {
      const input = 'abcdef1234!@#$';

      const result = hash(input);

      expect(result).toEqual('nopqrs1234!@#$');
    });

    it('encoding a string twice returns initial value', () => {
      const input = 'abcdef1234!@#$';

      const result = hash(hash(input));

      expect(result).toEqual(input);
    });
  });
});
