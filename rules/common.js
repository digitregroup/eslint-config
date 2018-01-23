module.exports = {
  rules: {
    // General rules
    'no-cond-assign': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty-character-class': ['error'],
    'no-empty': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-semi': ['error'],
    'no-func-assign': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-obj-calls': ['error'],
    'no-regex-spaces': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': ['error'],
    'use-isnan': ['error'],
    'valid-jsdoc': ['error'],
    'valid-typeof': ['error'],

    // Best practices
    'class-methods-use-this': ['error'],
    'consistent-return': ['error'],
    'curly': ['error'],
    'default-case': ['error'],
    'dot-notation': ['error'],
    'eqeqeq': ['error', 'always'],
    'no-case-declarations': ['error'],
    'no-empty-function': ['error'],
    'no-empty-pattern': ['error'],
    'no-fallthrough': ['error'],
    'no-global-assign': ['error'],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-octal': ['error'],
    'no-param-reassign': ['error'],
    'no-redeclare': ['error'],
    'no-return-assign': ['error', 'always'],
    'no-self-assign': ['error'],
    'no-unused-labels': ['error'],

    // Variables
    'no-delete-var': ['error'],
    'no-undef': ['error'],
    'no-unused-vars': ['error'],
    'no-use-before-define': ['error'],

    // Stylistic issues
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error'],
    'brace-style': ['error', 'allman', { allowSingleLine: true }],
    'capitalized-comments': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'indent': ['error', 2],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // to edit
    'keyword-spacing': ['error'],
    'max-len': ['error', 120],
    'max-nested-callbacks': ['error', 10],
    'max-params': ['error', 10],
    'new-cap': ['error', { newIsCap: true }],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': ['error'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-trailing-spaces': ['error'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
  },
};
