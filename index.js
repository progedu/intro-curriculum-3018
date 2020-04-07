'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Set-Cookie', `last_access=${now}; expires=Mon, 07 Jan 2036 00:00:00 GMT;`);
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('=')[1]) : now;
  console.log(req.headers.cookie);

  res.writeHead(200, {
    'Content-type': 'text/plain; charset=utf-8'
  });
  res.write(`前回は ${new Date(last_access_time).toString()} にアクセスしました。`);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});
