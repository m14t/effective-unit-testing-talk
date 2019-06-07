const groupService = require('./group.service');

jest.mock('./group.model', () => {
  const mockedModel = {
    countDocuments: jest.fn().mockImplementation(() => 1),
    exec: jest.fn().mockImplementation(() => [
      {
        isFeatured: true,
        name: 'MOCKED-GROUP',
      },
    ]),
    find: jest.fn().mockImplementation(() => mockedModel),
    limit: jest.fn().mockImplementation(() => mockedModel),
    skip: jest.fn().mockImplementation(() => mockedModel),
  };

  return mockedModel;
});

describe('example-2', () => {
  describe('group.service', () => {
    it('is an Object', () => {
      expect(groupService).toEqual(expect.any(Object));
    });

    it('should have an `all` method', () => {
      expect(groupService.all).toEqual(expect.any(Function));
    });

    it('do stuff', async () => {
      const result = await groupService.all({});

      expect(result).toEqual({
        data: [
          {
            isFeatured: true,
            name: 'MOCKED-GROUP',
          },
        ],
        info: {
          total: 1,
        },
      });
    });
  });
});
