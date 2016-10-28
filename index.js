'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  const exp = new Date('Mon, 07 Jan 2036 00:00:00 GMT');
  res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=' + exp.toGMTString() + ';');
  res.end(req.headers.cookie + '; expires=' + exp.toISOString() + ';'); //ISOSTring => 2036-01-07T00:00:00.000Z
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});


