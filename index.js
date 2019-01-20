'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';');
  res.setHeader('Set-Cookie', 'expires=' + new Date(2036, 1, 7, 0, 0, 0, 0));
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

