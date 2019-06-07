const Group = require('./group.model');

const createSearchQuery = (options = {}) => {
  const filters = options.filters || {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchQuery = {};
  if (filters.name) {
    const nameRegExp = filters.name
      // Replace all diacritics and special characters for a wildcard '.'
      .replace(/[^\w\s]/g, '.')
      // Replace all whitespace to allow the completition of any partial name
      .replace(/\s+/g, '.*');
    searchQuery.name = {
      $regex: nameRegExp,
      $options: 'gi',
    };
  }

  if (filters.ids) {
    searchQuery._id = {
      $in: options.filters.ids,
    };
  }

  if (filters.isFeatured !== undefined) {
    searchQuery.isFeatured = filters.isFeatured;
  }

  return searchQuery;
};

const entityService = {
  async all(options = {}) {
    const searchQuery = createSearchQuery(options);

    const entityCount = await Group.countDocuments(searchQuery);

    const entities = await Group.find(searchQuery)
      .limit(10)
      .skip(0)
      .exec();

    return {
      data: entities,
      info: {
        total: entityCount,
      },
    };
  },
};

module.exports = entityService;
