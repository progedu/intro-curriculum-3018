'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  //const now = new Date().getTime();
   const dt = new Date(2036, 0, 7, 0, 0);
  res.setHeader('Set-Cookie', 'expires=' + dt + ';');
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

