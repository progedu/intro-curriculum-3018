'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  // Cookieデータのセット
  res.setHeader('Set-Cookie', `last_access=${now};`);
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

