const hash = require('./hash');

jest.mock('ebg13', () => {
  let previous = 'encoded-string';

  return (x) => {
    const temp = previous;
    previous = x;

    return temp;
  };
});

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

    it('encoding a string twice returns initial value', () => {
      const input = 'abcdef1234!@#$';

      const result = hash(hash(input));

      expect(result).toEqual(input);
    });
  });
});
