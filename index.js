'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  const 期限 = {
    曜日: "Mon",
    日: "07",
    月: "Jan",
    年: 2036,
    時間: "00:00:00"
  };
  //時間が00:00:02くらいずれる
  res.setHeader('Set-Cookie',`last_access=${now};expires=${期限.曜日}, ${期限.日} ${期限.月} ${期限.年} ${期限.時間} GMT;`);
  res.end(req.headers.cookie);
  console.assert(
    'Mon, 07 Jan 2036 00:00:00 GMT;' === `${期限.曜日}, ${期限.日} ${期限.月} ${期限.年} ${期限.時間} GMT;`,
    'ERR!!'
  );  
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});