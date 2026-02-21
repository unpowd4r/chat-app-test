import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import globals from 'globals';

const eslintConfig = defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'node_modules/**',
    '.eslintrc.cjs',
    'webpack.config.js',
    'next-env.d.ts'
  ]),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      prettier: prettierPlugin
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

      // React Hooks rules
      ...reactHooksPlugin.configs.recommended.rules,

      // TypeScript rules
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',

      // Import sorting
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React и внешние пакеты
            ['^react', '^@?\\w'],
            // Внутренние алиасы
            ['^(app|entities|features|pages|shared|widgets)(/.*|$)'],
            // Родительские импорты
            ['^\\.\\.', '^\\.'],
            // Стили
            ['^.+\\.?(css|scss|styles)$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',

      'prettier/prettier': 'error'
    }
  },

  ...nextVitals,
  ...nextTs,

  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },

  prettierConfig
]);

export default eslintConfig;
