import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
 
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  {
    files: ['*.ts', '*.tsx'], // 読み込むファイル
  },
  {
    ignores: ['**/.next/**/*','**/node_modules/**/*','eslint.config.mjs','postcss.config.mjs','prettier.config.mjs'], // 無視するファイル
  },
  eslint.configs.recommended, 
  tseslint.configs.strictTypeChecked, // TypeScriptの厳格なルールを適用
  tseslint.configs.stylisticTypeChecked, // TypeScriptのスタイルガイドを適用
  ...compat.extends('next/core-web-vitals'), // Next.jsのルールを適用
  {
    // eslint-plugin-reactに関する設定
    languageOptions: {
      parser: tseslint.parser, // TypeScriptのパーサーを使用
      parserOptions: {
        project: true, // tsconfig.jsonを使用
        tsconfigRootDir: __dirname, // tsconfig.jsonのルートディレクトリ
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/jsx-filename-extension': [
        'error', // JSXを使用するファイルの拡張子を指定
        { extensions: ['.ts', '.tsx'] },
      ],
      'react/react-in-jsx-scope': 'off', // React 17以降、JSXを使用する際にReactをインポートする必要がなくなったため、オフにする
      'react/prop-types': 'off', // TypeScriptを使用しているため、PropTypesのチェックは不要
    },

  },
  {
    // @typescript-eslintに関する設定
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off', // 型安全性の警告をオフにする
      '@typescript-eslint/no-misused-promises': 'off', // Promiseの誤用に関する警告をオフにする
    },
  },
  {
    // eslint-plugin-importに関する設定
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'], // importのグループ分け
          alphabetize: { order: 'asc', caseInsensitive: true }, // importのアルファベット順
          'newlines-between': 'always', // import groups 1行空ける
          pathGroups: [
            { pattern: 'app/components/**', group: 'internal', position: 'before' }, // componentsをinternalグループの最初に配置
            { pattern: 'lib/**', group: 'internal', position: 'before' }, // libをinternalグループの最初に配置
          ],
        },
      ],
      'import/newline-after-import': 'error', // importの後に改行を入れる 
      'import/no-duplicates': 'error', // 重複したimportを禁止
      'import/no-unresolved': 'error', // 解決できないimportを禁止
    },
  },
  {
    // eslint-plugin-unused-importsに関する設定
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error', // 未使用のimportを禁止
    },
  },
  {
    // その他設定
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      globals: {
        React: "readonly",
      },
    },
    rules: {
      "react/jsx-boolean-value": "error", // JSXの中でのbooleanの使用
      "react/jsx-curly-brace-presence": "error", // JSXの中での余分な{}の使用
    },
  },
  eslintConfigPrettier, // Prettierとの競合防止
);