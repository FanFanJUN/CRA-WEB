module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
  },
  rules: {
    'no-console': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    'spaced-comment': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'compat/compat': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-template-curly-in-string': 0,
    'react/destructuring-assignment': 0,
    'no-unused-vars': 0,
    'no-nested-ternary': 0,
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
};
