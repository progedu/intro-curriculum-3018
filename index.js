'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Set-Cookie', 'rensyu=2525; expires=Wed, 05 Feb 2025 00:25:25 GMT;');
  // cookie の寿命（expires）をブラウザか、コンソールに表示させることが【自分自身の今回の課題】なので、少し簡略化。
  res.end( '<pre>'+ req.headers.cookie+ '</pre>');
  // 結局、クッキーの寿命をブラウザに出力させる事が出え着なかった。
  // 頑張ったアピールするために、無効と知りつつ、 preタグを追加した。
  // 前処理として、 ';' とかで splitとかしてしまうと、エラーが起きた。
  // 型宣言か、型の理解が足りていないようだ。
  // cookie の値に、半角スペースや制御文字( ;とか "とか)を含んではいけないところまでは調べたのだが・・・。残念、タイムアップ。
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

