'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  // Cookieデータのセット
  res.setHeader('Set-Cookie', `last_access=${now};`);
  
  // Cookieをreq.headers.cookieで取得し、取得できた場合はそれを、できなかった場合はnowを使う
  // ※ sample: "last_access=1452147999931".split('last_access=') => ["", "1452147999931"]
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.end(new Date(last_access_time).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

