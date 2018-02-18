'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const expire = new Date(2036,0,7);
  res.setHeader('Set-Cookie', 'expire=' + expire + ';');
  res.end('expire=' + expire);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

