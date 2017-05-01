'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const cookieString = req.headers.cookie;
  let accessCount = cookieString ? parseInt(cookieString.split('access_count=')[1]) : 0;
  if(req.url !== '/favicon.ico') accessCount++;
  res.setHeader('Set-Cookie', 'access_count=' + accessCount)
  res.end('アクセス回数：' + accessCount.toString() + '回');

  // const now = new Date().getTime();
  // res.setHeader(
  //   'Set-Cookie',
  //   'last_access=' + now + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;'
  // );
  // res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

