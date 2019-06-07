const hash = require('./hash');

jest.mock('ebg13', () => () => 'encoded-string');

describe('example-1', () => {
  describe('hash', () => {
    it('is a function', () => {
      expect(hash).toEqual(expect.any(Function));
    });

    it('encodes a string', () => {
      const input = 'abcdef1234!@#$';

      const result = hash(input);

      expect(result).toEqual('encoded-string');
    });
  });
});
