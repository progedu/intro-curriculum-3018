'use strict';
const http = require('http');
const expiresdate = new Date('Mon, 07 Jan 2036 00:00:00 GMT;');
console.info(expiresdate);
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  res.setHeader('Set-Cookie', 'last_access=' + now + '; expires=' + expiresdate);
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

