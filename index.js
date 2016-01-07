'use strict';
let http = require('http');
let server = http.createServer((req, res) => {
  let now = new Date().getTime();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';');
  res.end(req.headers.cookie);
});
let port = 8000;
server.listen(8000, () => {
  console.info('Listening on ' + port);
});

