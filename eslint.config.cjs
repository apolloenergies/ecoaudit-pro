const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

module.exports = [
  ...compat.extends('universe/native', 'plugin:prettier/recommended'),

  {
    ignores: ['node_modules/**', 'dist/**', '*.config.js', '**/*.config.cjs, build/**'],

    plugins: {
      node: require('eslint-plugin-node'),
      'react-native': require('eslint-plugin-react-native'),
      prettier: require('eslint-plugin-prettier'),
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
      'react-native/no-inline-styles': 'warn',
      'node/handle-callback-err': 'off',
    },

    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
];
