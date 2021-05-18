'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  // Cookieの有効期限を2036/1/7に設定
  res.setHeader('Set-Cookie', 'last_access=' + now + ';' + 
  'expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

