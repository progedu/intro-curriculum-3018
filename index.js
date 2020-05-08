'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  const expires_time = new Date(2036, 0, 7);
  res.setHeader('Set-Cookie', `last_access=${now}; expires=${expires_time};`);
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

