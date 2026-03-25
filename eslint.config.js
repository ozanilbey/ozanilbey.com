// Modules
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

// Constants (Local)
const PATH = fileURLToPath(import.meta.url)
const DIRECTORY = dirname(PATH)
const COMPATIBILITY = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: DIRECTORY,
  recommendedConfig: js.configs.recommended
})

// Configuration
const configuration = [
  {
    ignores: [
      'build/**',
      'dist/**',
      'node_modules/**'
    ]
  },
  {
    files: [
      'source/server.jsx',
      'source/_server.js'
    ],
    rules: {
      'no-console': 'off'
    }
  },
  ...COMPATIBILITY.config({
    env: {
      browser: true,
      es2021: true,
      jest: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended'
    ],
    globals: {
      expect: 'readonly',
      fetch: 'readonly',
      test: 'readonly'
    },
    parserOptions: {
      allowImportExportEverywhere: true,
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true
      },
      ecmaVersion: 'latest',
      parser: '@babel/eslint-parser',
      requireConfigFile: false,
      sourceType: 'module'
    },
    plugins: [
      'react',
      'react-hooks',
      'react-refresh'
    ],
    rules: {
      'array-bracket-spacing': 'error',
      'arrow-parens': ['warn', 'as-needed'],
      'arrow-spacing': 'error',
      'comma-dangle': ['error', 'never'],
      'eol-last': 'error',
      'jsx-quotes': ['error', 'prefer-double'],
      'linebreak-style': 'off',
      'no-case-declarations': 'off',
      'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
      'no-extra-boolean-cast': 'off',
      'no-func-assign': 'off',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }],
      'no-tabs': 'error',
      'no-trailing-spaces': 'error',
      'no-unused-vars': 'warn',
      'object-curly-newline': ['error', {
        ExportDeclaration: {
          minProperties: 1,
          multiline: true
        },
        ImportDeclaration: { multiline: true }
      }],
      'object-curly-spacing': ['error', 'always'],
      quotes: ['error', 'single'],
      'react/jsx-closing-bracket-location': ['warn', {
        nonEmpty: 'after-props',
        selfClosing: 'after-props'
      }],
      'react/jsx-curly-brace-presence': ['warn', {
        children: 'never',
        props: 'never'
      }],
      'react/jsx-curly-spacing': ['error', {
        children: true,
        when: 'never'
      }],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
      'react/jsx-max-props-per-line': ['error', { when: 'always' }],
      'react/jsx-no-target-blank': 'off',
      'react/jsx-one-expression-per-line': ['off', { allow: 'literal' }],
      'react/jsx-tag-spacing': ['error', {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never'
      }],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      semi: ['error', 'never'],
      'sort-keys': ['error', 'asc', {
        caseSensitive: true,
        minKeys: 2,
        natural: true
      }],
      'space-in-parens': 'error',
      'space-infix-ops': 'error'
    },
    settings: { react: { version: 'detect' } }
  })
]

// Export
export default configuration
