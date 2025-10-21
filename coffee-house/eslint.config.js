import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  // ...ts.configs.recommended,
  {
    ignores: ['dist', 'node_modules', '*.config.js', '*.config.ts', 'scripts/**/*'],
  },
  {
    files: ['src/**/*.{ts,tsx,js}'],
    languageOptions: {
      parser,
    
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: './tsconfig.json',

        // tsconfigRootDir: import.meta.dirname,
      },
       globals: {
          console: 'readonly',
      document: 'readonly',
      window: 'readonly',
      HTMLElement: 'readonly',
      HTMLLIElement: 'readonly',
      HTMLDivElement: 'readonly',
      setTimeout: 'readonly',
      clearTimeout: 'readonly',
      setInterval: 'readonly',
      clearInterval: 'readonly',
      requestAnimationFrame: 'readonly',
      cancelAnimationFrame: 'readonly',
      fetch: 'readonly',
      },
   
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      // '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': ['error'],
    },
  },
];
