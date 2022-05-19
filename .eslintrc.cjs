module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: ['jest'],
  env: {
    // To allow console variable.
    browser: true,
    node: true,
  },
  rules: {
    // Because browser doesn't automatically add the file extensions.
    'import/extensions': [
      'error',
      'always',
    ],
    // To allow console.log().
    'no-console': 'off',
    // To allow modification of DOM objects
    'no-param-reassign': 0,
    // To allow require() for parcel file path resolving
    'import/no-unresolved': [
      2, 
      { ignore: ['\\.png$'] }
    ],
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
