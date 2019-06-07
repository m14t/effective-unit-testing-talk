module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ['jest', 'prettier'],
};
