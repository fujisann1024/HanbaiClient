# クライアント側

[フロントエンド設定 1](https://astris.design/atcl/next15-eslint9-prettier/)
[フロントエンド設定 2](https://zenn.dev/socialplus/articles/b09827d74ff148)

- Prettier の設定

  - `npm install -D prettier`
  - `npm install -D prettier-plugin-tailwindcss`
  - .prettierignore の作成(printter の対象外)
  - prettier.config.mjs の作成(printter のルールの設定)
  - package.json の scripts に追加("format": "prettier --write ."):カレントディレクトリに対して実行
  - npm run format で整形

- ESLint の設定

  - ```
     npm install -D @eslint/js typescript-eslint
    ```
  - ```
     -- prettierとの競合を避けるため
     npm install -D eslint-config-prettier
    ```
  - ```
     -- モジュールの import 構文に関するルール集
     npm install -D eslint-plugin-import
     -- 使われていない import / 変数を検出＆自動削除
     npm install -D eslint-plugin-unused-imports
    ```
  - ```
     npm install -D eslint-plugin-react
    ```

- setting.json の作成
  - .vscode/setting.json の作成
  - [この記事](https://ralacode.com/blog/post/vscode-prettier/)をもとに VSCode に下記設定を行う
  - Default Formatter を Prettier に設定
  - Format On Save にチェックを入れる

https://zenn.dev/hamworks/articles/3d623eede50de4
