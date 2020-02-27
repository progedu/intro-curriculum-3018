//Cookie の 有効期限を 2036 年の 1 月 7 日に設定してみましょう。
//Set-Cookie のヘッダで、キー名=値; の後に、 expires=Mon, 07 Jan 2036 00:00:00 GMT;を 付け加えることで有効期限を設定可能です。
'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

