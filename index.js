'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  let last_access_count = req.headers.cookie ? parseInt(req.headers.cookie.split('access_count=')[1]) : 0;
  last_access_count++;
  res.setHeader('Set-Cookie', 'access_count=' + last_access_count + ';' + 
                'expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  res.end((last_access_count).toString() + '回目のアクセスです。');
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

