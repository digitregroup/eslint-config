module.exports = {
  env: {
    'mocha': true,
    'node': true,
  },
  rules: {
    // General rules
    'no-console': ['error'],

    // Node.js and CommonJS
    'no-template-curly-in-string': ['error'],
    'callback-return': ['error'],
    'global-require': ['error'],
    'no-mixed-requires': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'arrow-parens': ['error', 'as-needed'],
  },
};
