'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  const cookie_session_time = 'Mon, 07 Jan 2036 00:00:00 GMT;';
  res.setHeader('Set-Cookie', 'last_access=' + now + ';' + 'expires=' + cookie_session_time);
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(new Date(last_access_time).toString() + '<br>' + '有効期限:' + cookie_session_time);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on' + port);
});
