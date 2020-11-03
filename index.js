'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  res.setHeader('Set-Cookie', `last_access=${now};expires = Mon, 07 Jan 2036 00:00:00 GMT;`);
  const last_access_time = now;
  res.end(new Date(now).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

