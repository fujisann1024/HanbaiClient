# クライアント側

[フロントエンド設定](https://astris.design/atcl/next15-eslint9-prettier/)

 - Prettierの設定
   - ``` npm install -D prettier ```
   - ``` npm install -D prettier-plugin-tailwindcss ```
   - .prettierignoreの作成(printterの対象外)
   - prettier.config.mjsの作成(printterのルールの設定)
   - package.jsonのscriptsに追加("format": "prettier --write ."):カレントディレクトリに対して実行
   - npm run formatで整形
 