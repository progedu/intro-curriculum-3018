'use strict';
// 3章19節 Cookie を使った秘密の匿名掲示板

// Cookie を使うとブラウザに情報を保存できる
// Cookie には、有効期限を設定できる
// Cookie は、 Cookie と Set-Cookie という 2 つの HTTP ヘッダ項目を使用して実現される

const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Set-Cookie', `last_access=${now};expires=Mon, 07 Jan 2036 00:00:00 GMT;`);
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});