export default {
  plugins: ['prettier-plugin-tailwindcss'], // Tailwind CSS用のPrettierプラグイン
  semi: true, // ステートメントの末尾にセミコロンを付ける
  trailingComma: 'all', // 配列やオブジェクトの末尾にカンマを付ける
  tabWidth: 2, // インデント幅を2スペースに設定
  printWidth: 100, // 1行の最大文字数を100に設定
  endOfLine: 'crlf', // 改行コードを自動検出する
  arrowParens: 'avoid', // アロー関数の引数が1つの場合、括弧を省略する
  bracketSameLine: true, // JSXの閉じ括弧を同じ行に配置する
  bracketSpacing: true, // オブジェクトリテラルの括弧内にスペースを入れる
  htmlWhitespaceSensitivity: 'ignore', // HTMLの空白を無視する
  singleQuote: true, // シングルクォートを使用する
  jsxSingleQuote: false, // JSX内でシングルクォートを使用しない
  quoteProps: 'as-needed', // オブジェクトのプロパティ名を必要に応じてクォートする
};
