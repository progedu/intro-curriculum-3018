'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  let accessed;
  const now = new Date().getTime();
  if (req.headers.cookie) {
    accessed = Number(req.headers.cookie.split('=')[2]);
  }else {
    accessed = 0;
  }
  if(req.url !== '/favicon.ico') {
    accessed++;
  }
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', 'last_access=' + now + ', access_counts=' + accessed + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.end('最新のアクセス時間： ' + new Date(last_access_time).toString() + ',    アクセス数： ' + accessed);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

