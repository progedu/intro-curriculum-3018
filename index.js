'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    let accessed = req.headers.cookie ? req.headers.cookie.match(/\d+/g) : 0;
      accessed++;
    res.setHeader('Set-Cookie', 'last_access=' + accessed + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
    res.end('このページに ' + accessed + ' 回アクセスしました。');
  }
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});