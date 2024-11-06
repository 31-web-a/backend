import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    // files: ['**/*.spec.js', '**/*.test.js'],
    // plugins: { jest: pluginJest },
    languageOptions: { globals: globals.node },
    rules: {
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  pluginJest.configs['flat/recommended'],
];
