module.exports = {
  env: {
    'es6': true,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed', { 'requireReturnForObjectLiteral': true }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'constructor-super': ['error'],
    'no-class-assign': ['error'],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-new-symbol': ['error'],
    'no-this-before-super': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'require-yield': ['error'],
  },
};
