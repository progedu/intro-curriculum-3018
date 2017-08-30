'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  let accessed;
  if (req.headers.cookie){
    accessed = Number(req.headers.cookie.split('=')[1]);
  } else{
    accessed = 0;
  }

  if (req.url !== '/favicon.ico'){
    accessed++;
  }

  const now = new Date().getTime();
  res.setHeader('Set-Cookie', 'last_access=' + accessed + '; expires= Mon, 07 Jan 2036 00:00:00 GMT;');
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('このページに' + accessed + '回アクセスしました。');
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

