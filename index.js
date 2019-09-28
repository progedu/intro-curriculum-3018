'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
<<<<<<< HEAD
  const now = Date.now();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';');
=======
  const now = new Date().getTime();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
>>>>>>> master
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

