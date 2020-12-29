module.exports = {
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'plugin:@stencil/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
